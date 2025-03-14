#!/usr/bin/env python3
import json
import os
import argparse

def merge_json_files(input_file, output_file):
    """
    Process a JSON file and merge it into the OpenAPI specification.
    
    Args:
        input_file: Path to the input JSON file containing a section of the API
        output_file: Path to output merged JSON file
    """
    # Initialize the OpenAPI structure if the output file doesn't exist
    if os.path.exists(output_file):
        with open(output_file, 'r') as file:
            merged_data = json.load(file)
    else:
        merged_data = {
            "openapi": "3.0.3",
            "info": {
                "title": "Skilljar API",
                "description": "API for Skilljar Learning Management System",
                "version": "1.0.0"
            },
            "servers": [
                {
                    "url": "https://api.skilljar.com/v1",
                    "description": "Production server"
                }
            ],
            "paths": {},
            "components": {
                "schemas": {},
                "parameters": {},
                "securitySchemes": {
                    "apiKey": {
                        "type": "apiKey",
                        "in": "header",
                        "name": "Authorization",
                        "description": "API key authentication"
                    }
                }
            },
            "security": [
                {
                    "apiKey": []
                }
            ]
        }
    
    # Load the input file
    try:
        with open(input_file, 'r') as file:
            data = json.load(file)
            
            # Merge paths at the method level
            if "paths" in data:
                for path, path_item in data["paths"].items():
                    if path not in merged_data["paths"]:
                        merged_data["paths"][path] = {}
                    
                    # For each HTTP method in the path
                    for method, operation in path_item.items():
                        merged_data["paths"][path][method] = operation
            
            # Merge components
            if "components" in data:
                # Merge schemas
                if "schemas" in data["components"]:
                    if "schemas" not in merged_data["components"]:
                        merged_data["components"]["schemas"] = {}
                    for schema_name, schema in data["components"]["schemas"].items():
                        merged_data["components"]["schemas"][schema_name] = schema
                
                # Merge parameters
                if "parameters" in data["components"]:
                    if "parameters" not in merged_data["components"]:
                        merged_data["components"]["parameters"] = {}
                    for param_name, param in data["components"]["parameters"].items():
                        merged_data["components"]["parameters"][param_name] = param
                
                # Merge other components as needed
                for comp_key, comp_value in data["components"].items():
                    if comp_key not in ["schemas", "parameters"]:
                        if comp_key not in merged_data["components"]:
                            merged_data["components"][comp_key] = {}
                        merged_data["components"][comp_key].update(comp_value)
        
        # Write the merged data to the output file
        with open(output_file, 'w') as file:
            json.dump(merged_data, file, indent=2)
        
        print(f"Successfully merged {input_file} into {output_file}")
    except json.JSONDecodeError:
        print(f"Error: {input_file} is not a valid JSON file")
    except FileNotFoundError:
        print(f"Error: {input_file} not found")
    except Exception as e:
        print(f"Error processing {input_file}: {str(e)}")

# Set up command-line argument parsing
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Merge JSON files into an OpenAPI specification')
    parser.add_argument('input_file', help='Path to the input JSON file to process')
    parser.add_argument('--output', default='skilljar_openapi.json', 
                        help='Path to the output OpenAPI JSON file (default: skilljar_openapi.json)')
    
    args = parser.parse_args()
    merge_json_files(args.input_file, args.output)