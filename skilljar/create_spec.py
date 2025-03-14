#!/usr/bin/env python3

import json
import sys
import os

def convert_schema_to_openapi(input_file, output_file):
    with open(input_file, "r") as f:
        schema = json.load(f)
    
    openapi_spec = {
        "openapi": "3.0.0",
        "info": {
            "title": schema.get("title", "API Documentation"),
            "version": "1.0.0",
            "description": schema.get("description", "Generated OpenAPI Specification")
        },
        "paths": {},
        "components": {
            "schemas": {},
            "parameters": {},
            "requestBodies": {}
        }
    }
    
    for endpoint, details in schema.items():
        if not isinstance(details, dict):
            continue  # Skip invalid entries
        
        for action, info in details.items():
            if not isinstance(info, dict) or "url" not in info:
                continue
            
            path = "/" + info["url"].lstrip("/")
            
            valid_methods = {"get", "post", "put", "patch", "delete"}
            method = info.get("action", "").lower()

            if method not in valid_methods:
                print(f"⚠️ Unknown action '{method}' in schema for {path}, skipping.")
                continue  # Skip invalid actions
            
            if path not in openapi_spec["paths"]:
                openapi_spec["paths"][path] = {}
                
            operation = {
                "operationId": f"{action}_{endpoint}",
                "summary": info.get("description", ""),
                "tags": [endpoint],
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "Successful response",
                        "content": {
                            "application/json": {
                                "schema": {"type": "object"}
                            }
                        }
                    }
                }
            }
            
            request_body = {
                "required": True,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
            has_request_body = False
            
            for field in info.get("fields", []):
                param_name = field.get("name")
                param_location = field.get("location", "query")
                param_schema = field.get("schema", {})

                # Ensure enums have a valid type
                if param_schema.get("type") == "enum":
                    param_schema["type"] = "string"  # Defaulting to string if unknown

                # Ensure arrays have 'items'
                if param_schema.get("type") == "array" and "items" not in param_schema:
                    param_schema["items"] = {"type": "string"}  # Defaulting to string if unknown

                if not param_name:
                    continue  # Skip invalid fields

                # Remove invalid `_type` key and replace it with `type`
                if "_type" in param_schema:
                    param_schema["type"] = param_schema.pop("_type")

                if param_location == "form":
                    if param_schema.get("type") == "array" and "items" not in param_schema:
                        param_schema["items"] = {"type": "string"}  # Default type

                    # Fix invalid 'type: enum' inside request bodies
                    if "enum" in param_schema and param_schema.get("type") == "enum":
                        param_schema["type"] = "string"

                    request_body["content"]["application/json"]["schema"]["properties"][param_name] = param_schema
                    has_request_body = True
                elif param_location in ["query", "path", "header", "cookie"]:
                    operation["parameters"].append({
                        "name": param_name,
                        "in": param_location,
                        "required": field.get("required", False),
                        "schema": param_schema
                    })
                elif param_location == "response_object":
                    # Ensure response structure exists
                    if "200" not in operation["responses"]:
                        operation["responses"]["200"] = {
                            "description": "Successful response",
                            "content": {
                                "application/json": {
                                    "schema": {
                                        "type": "object",
                                        "properties": {}
                                    }
                                }
                            }
                        }
                    elif "content" not in operation["responses"]["200"]:
                        operation["responses"]["200"]["content"] = {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {}
                                }
                            }
                        }
                    elif "schema" not in operation["responses"]["200"]["content"]["application/json"]:
                        operation["responses"]["200"]["content"]["application/json"]["schema"] = {
                            "type": "object",
                            "properties": {}
                        }
                    elif "properties" not in operation["responses"]["200"]["content"]["application/json"]["schema"]:
                        operation["responses"]["200"]["content"]["application/json"]["schema"]["properties"] = {}

                    # Add the response field
                    operation["responses"]["200"]["content"]["application/json"]["schema"]["properties"][param_name] = param_schema
            
            if has_request_body and request_body["content"]["application/json"]["schema"].get("properties"):
                operation["requestBody"] = request_body
                
            openapi_spec["paths"][path][method] = operation
    
    with open(output_file, "w") as f:
        json.dump(openapi_spec, f, indent=4)
    
    print(f"Generated OpenAPI spec: {output_file}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: create_spec.py <input_json> <output_json>")
        sys.exit(1)
    
    input_json = sys.argv[1]
    output_json = sys.argv[2]
    
    convert_schema_to_openapi(input_json, output_json)