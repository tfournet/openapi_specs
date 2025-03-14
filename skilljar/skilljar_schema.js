{
    "_type": "document",
    "_meta": {
        "url": "https://api.skilljar.com/docs/schema.js"
    },
    "assets": {
        "list": {
            "_type": "link",
            "url": "/v1/assets",
            "action": "get",
            "description": "Returns a paginated list of `Asset` objects associated with your organization.\n\n### Example Response\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n          {\n            \"id\": \"asdfv34d\",\n            \"name\": \"Title\",\n            \"type\": \"Video\",\n            \"embed_link_url\": \"url://url\",\n            \"aspect_ratio\": \"16:9\",\n            \"sync_completion\": true\n          }\n        ]\n    }",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/assets",
            "action": "post",
            "encoding": "application/json",
            "description": "Creates an `Asset` object.\n\nThe file will be downloaded from the remote source and re-hosted in Skilljar.\n\n### Example Request\n\n{\n    \"content_url\": \"url://foofoo/video.mp4\",\n    \"asset\": {\n        \"name\": \"string\",\n        \"sync_completion\": true\n    }\n}\n\nValid fields in the `asset` request object:\n* `name` (OPTIONAL, default: built dynamically)\n* `embed_link_url` (OPTIONAL, but must be present if content_url is not)\n* `aspect_ratio` (OPTIONAL, can only be 16:9 or 4:3, default 16:9)\n* `sync_completion` (OPTIONAL, default False)\n\n-----\n\n### Example Response\n\n{\n    \"id\": \"asdfv34d\",\n    \"name\": \"Title\",\n    \"type\": \"Video\",\n    \"embed_link_url\": \"url://url\",\n    \"aspect_ratio\": \"16:9\",\n    \"sync_completion\": true\n}",
            "fields": [
                {
                    "name": "content_url",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content url",
                        "description": ""
                    }
                },
                {
                    "name": "asset",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Asset",
                        "description": ""
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/assets/{id}",
            "action": "get",
            "description": "Retrieves details for an asset associated with your organization.\n### Example Response\n\n{\n    \"id\": \"asdfv34d\",\n    \"name\": \"Title\",\n    \"type\": \"Video\",\n    \"embed_link_url\": \"url://url\",\n    \"aspect_ratio\": \"16:9\",\n    \"sync_completion\": true\n}\n\n* download_url is a signed url that will be valid for 1 hour after generation.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "courses": {
        "list": {
            "_type": "link",
            "url": "/v1/courses",
            "action": "get",
            "description": "Returns a paginated list of `Course` objects associated with your organization.\n\n### Example Response\n\n{\n    \"count\": 2079,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"376culderht1r\",\n            \"enforce_sequential_navigation\": false,\n            \"long_description_html\": \"<p>cats/p>\",\n            \"short_description\": \"I am not a bird.\",\n            \"title\": \"Cat Stuff\",\n            \"labels\": [\"Cat\", \"Bird\"]\n        }\n    ]\n}",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/courses",
            "action": "post",
            "encoding": "application/json",
            "description": "Creates a `Course` object.\n\n### Example Request\n\n{\n    \"enforce_sequential_navigation\":false,\n    \"long_description_html\":\"This is a <b>description</b>\",\n    \"short_description\":\"Short Description\",\n    \"title\":\"This is a title\",\n    \"labels\":[\"Car Talk\",\"Happy Days\"]\n}\n\n-----\n\n### Example Response\n\n{\n    \"id\": \"i8rjpc87e5vp\",\n    \"enforce_sequential_navigation\": false,\n    \"long_description_html\": \"This is a <b>description</b>\",\n    \"short_description\": \"Short Description\",\n    \"title\": \"This is a title\",\n    \"labels\": [\"Car Talk\",\"Happy Days\"]\n}",
            "fields": [
                {
                    "name": "enforce_sequential_navigation",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Enforce sequential navigation",
                        "description": "Enforce sequential navigation"
                    }
                },
                {
                    "name": "long_description_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Long description html",
                        "description": "The long description as HTML content"
                    }
                },
                {
                    "name": "short_description",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Short description",
                        "description": "The short description of the course"
                    }
                },
                {
                    "name": "title",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Title",
                        "description": "The title of the course"
                    }
                },
                {
                    "name": "labels",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Labels",
                        "description": "A comma separated list of labels ex: [\"label1\", \"label2\"]"
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/courses/{id}",
            "action": "get",
            "description": "Course ViewSet",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/courses/{id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update Course details. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "enforce_sequential_navigation",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Enforce sequential navigation",
                        "description": "Enforce sequential navigation"
                    }
                },
                {
                    "name": "long_description_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Long description html",
                        "description": "The long description as HTML content"
                    }
                },
                {
                    "name": "short_description",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Short description",
                        "description": "The short description of the course"
                    }
                },
                {
                    "name": "title",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Title",
                        "description": "The title of the course"
                    }
                },
                {
                    "name": "labels",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Labels",
                        "description": "A comma separated list of labels ex: [\"label1\", \"label2\"]"
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/courses/{id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Course ViewSet",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "enforce_sequential_navigation",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Enforce sequential navigation",
                        "description": "Enforce sequential navigation"
                    }
                },
                {
                    "name": "long_description_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Long description html",
                        "description": "The long description as HTML content"
                    }
                },
                {
                    "name": "short_description",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Short description",
                        "description": "The short description of the course"
                    }
                },
                {
                    "name": "title",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Title",
                        "description": "The title of the course"
                    }
                },
                {
                    "name": "labels",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Labels",
                        "description": "A comma separated list of labels ex: [\"label1\", \"label2\"]"
                    }
                }
            ]
        }
    },
    "domains": {
        "access-code-pools": {
            "access-codes": {
                "list": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}/access-codes",
                    "action": "get",
                    "description": "List access codes in a pool.  Returns a paginated list (1000 results per page) of access codes.\n\nExample Response:\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcde12345\",\n                \"code\": \"examplecode\",\n                \"active\": true,\n                \"max_uses\": 3,\n                \"use_count\": 2,\n                \"duration\": null,\n                \"duration_unit\": \"MONTHS\"\n            }\n        ]\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_pool_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        },
                        {
                            "name": "page_size",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page size",
                                "description": "Number of results to return per page."
                            }
                        }
                    ]
                },
                "create": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}/access-codes",
                    "action": "post",
                    "encoding": "application/json",
                    "description": "Add an access code to a pool.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_pool_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "code",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Code",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        },
                        {
                            "name": "max_uses",
                            "location": "form",
                            "schema": {
                                "_type": "integer",
                                "title": "Max uses",
                                "description": ""
                            }
                        },
                        {
                            "name": "duration",
                            "location": "form",
                            "schema": {
                                "_type": "integer",
                                "title": "Duration",
                                "description": ""
                            }
                        },
                        {
                            "name": "duration_unit",
                            "location": "form",
                            "schema": {
                                "_type": "enum",
                                "title": "Duration unit",
                                "description": "",
                                "enum": [
                                    "MONTHS",
                                    "DAYS"
                                ]
                            }
                        }
                    ]
                },
                "read": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}/access-codes/{access_code_id}",
                    "action": "get",
                    "description": "Retrieve access code details.\n\nExample Response:\n\n    {\n        \"code\": \"examplecode\",\n        \"active\": true,\n        \"max_uses\": 3,\n        \"use_count\": 2,\n        \"duration\": null,\n        \"duration_unit\": \"Months\"\n        \"users\": [\n            {\n                \"id\": \"abcdef12345\",\n                \"email\": \"janedoe@example.com\",\n                \"first_name\": \"Jane\",\n                \"last_name\": \"Doe\"\n            },\n            {\n                \"id\": \"bcdeg23456\",\n                \"email\": \"jamesdoe@example.com\",\n                \"first_name\": \"James\",\n                \"last_name\": \"Doe\"\n            },\n        ]\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_pool_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                },
                "update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}/access-codes/{access_code_id}",
                    "action": "put",
                    "encoding": "application/json",
                    "description": "Update access code. PUT and PATCH are identical - both do partial updates.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_pool_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "code",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Code",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        },
                        {
                            "name": "max_uses",
                            "location": "form",
                            "schema": {
                                "_type": "integer",
                                "title": "Max uses",
                                "description": ""
                            }
                        },
                        {
                            "name": "duration",
                            "location": "form",
                            "schema": {
                                "_type": "integer",
                                "title": "Duration",
                                "description": ""
                            }
                        },
                        {
                            "name": "duration_unit",
                            "location": "form",
                            "schema": {
                                "_type": "enum",
                                "title": "Duration unit",
                                "description": "",
                                "enum": [
                                    "MONTHS",
                                    "DAYS"
                                ]
                            }
                        }
                    ]
                },
                "partial_update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}/access-codes/{access_code_id}",
                    "action": "patch",
                    "encoding": "application/json",
                    "description": "Update access code. PUT and PATCH are identical - both do partial updates.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_pool_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "code",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Code",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        },
                        {
                            "name": "max_uses",
                            "location": "form",
                            "schema": {
                                "_type": "integer",
                                "title": "Max uses",
                                "description": ""
                            }
                        },
                        {
                            "name": "duration",
                            "location": "form",
                            "schema": {
                                "_type": "integer",
                                "title": "Duration",
                                "description": ""
                            }
                        },
                        {
                            "name": "duration_unit",
                            "location": "form",
                            "schema": {
                                "_type": "enum",
                                "title": "Duration unit",
                                "description": "",
                                "enum": [
                                    "MONTHS",
                                    "DAYS"
                                ]
                            }
                        }
                    ]
                },
                "delete": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}/access-codes/{access_code_id}",
                    "action": "delete",
                    "description": "Delete access code.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_pool_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "access_code_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "list": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/access-code-pools",
                "action": "get",
                "description": "List access code pools for a domain.  Returns a paginated list (100 results per page) of access code pools.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "name",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter returned access code pools by name"
                        }
                    }
                ]
            },
            "create": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/access-code-pools",
                "action": "post",
                "encoding": "application/json",
                "description": "Create an empty pool of domain access codes.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "name",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Name",
                            "description": "Name of the access code pool.  This may have been auto-generated when creating individual codes in the dashboard."
                        }
                    },
                    {
                        "name": "active",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Active",
                            "description": ""
                        }
                    },
                    {
                        "name": "start_date",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Start date",
                            "description": ""
                        }
                    },
                    {
                        "name": "end_date",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "End date",
                            "description": ""
                        }
                    },
                    {
                        "name": "expire_linked_to_domain_membership",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Expire linked to domain membership",
                            "description": "When this is true and an end_date is set, a user who registers with a code from this pool will lose access to the domain on the end_date."
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}",
                "action": "get",
                "description": "Retrieve access code pool details.\n\nExample Response:\n\n    {\n        \"id\": \"abcde1234\",\n        \"name\": \"example-pool\",\n        \"active\": true,\n        \"start_date\": 2016-01-29T00:22:00.590250Z,\n        \"end_date\": null,\n        \"expire_linked_to_domain_membership\": false,\n        \"channel\": \"api\",\n        \"code_count\": 1\n    }",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            },
            "update": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}",
                "action": "put",
                "encoding": "application/json",
                "description": "Update access code pool. PUT and PATCH are identical - both do partial updates.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "name",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Name",
                            "description": "Name of the access code pool.  This may have been auto-generated when creating individual codes in the dashboard."
                        }
                    },
                    {
                        "name": "active",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Active",
                            "description": ""
                        }
                    },
                    {
                        "name": "start_date",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Start date",
                            "description": ""
                        }
                    },
                    {
                        "name": "end_date",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "End date",
                            "description": ""
                        }
                    },
                    {
                        "name": "expire_linked_to_domain_membership",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Expire linked to domain membership",
                            "description": "When this is true and an end_date is set, a user who registers with a code from this pool will lose access to the domain on the end_date."
                        }
                    }
                ]
            },
            "partial_update": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}",
                "action": "patch",
                "encoding": "application/json",
                "description": "Update access code pool. PUT and PATCH are identical - both do partial updates.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "name",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Name",
                            "description": "Name of the access code pool.  This may have been auto-generated when creating individual codes in the dashboard."
                        }
                    },
                    {
                        "name": "active",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Active",
                            "description": ""
                        }
                    },
                    {
                        "name": "start_date",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Start date",
                            "description": ""
                        }
                    },
                    {
                        "name": "end_date",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "End date",
                            "description": ""
                        }
                    },
                    {
                        "name": "expire_linked_to_domain_membership",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Expire linked to domain membership",
                            "description": "When this is true and an end_date is set, a user who registers with a code from this pool will lose access to the domain on the end_date."
                        }
                    }
                ]
            },
            "delete": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/access-code-pools/{access_code_pool_id}",
                "action": "delete",
                "description": "Delete access code pool. This will delete all access codes in the pool.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "course-series": {
            "published-courses": {
                "list": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/course-series/{course_series_id}/published-courses",
                    "action": "get",
                    "description": "List published courses in a course series",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "course_series_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        }
                    ]
                }
            },
            "list": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/course-series",
                "action": "get",
                "description": "List course series on a domain.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/course-series/{course_series_id}",
                "action": "get",
                "description": "Retrieve course series details.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "course_series_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "plan": {
            "plan-enrollments": {
                "list": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/plan/{plan_id}/plan-enrollments",
                    "action": "get",
                    "description": "List enrollments for a Plan.  A user may have multiple plan enrollments, and will have access to a plan\nif at least one of the enrollments is active and not expired.  If an enrollment was created in association with\na purchase, or registration through the course platform UI, the purchase details are included in the response.\nReturns a paginated list (1000 results per page) of enrollments.\n\n\nExample Response:\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcdefg123456\",\n                \"user\": {\n                    \"id\": \"bcdefga123456\",\n                    \"email\": \"jane@doe.com\",\n                    \"first_name\": \"Jane\",\n                    \"last_name\": \"Doe\",\n                },\n                \"enrolled_at\": \"2015-01-29T00:22:00.590250Z\",\n                \"expires_at\": null,\n                \"active\": true,\n                \"purchase\": {\n                    \"order_id\": \"\",\n                    \"offer_price\": {\n                        \"amount\": \"100.00\",\n                        \"currency_code\": \"USD\"\n                    },\n                    \"purchase_price\": {\n                        \"amount\": \"50.00\",\n                        \"currency_code\": \"USD\"\n                    },\n                    \"quantity\": 1,\n                    \"purchase_state\": \"SUCCESS\",\n                    \"payment_processor\": \"STRIPE\",\n                    \"purchase_id\": \"xxxxxxxxxxxx\",\n                    \"purchased_at\": \"2020-08-19T14:12:25.736506Z\",\n                    \"tax_price_cents\": 0\n                }\n            }\n        ]\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        },
                        {
                            "name": "page_size",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page size",
                                "description": "Number of results to return per page."
                            }
                        }
                    ]
                },
                "create": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/plan/{plan_id}/plan-enrollments",
                    "action": "post",
                    "encoding": "application/json",
                    "description": "Enroll a user in a Plan.  This operation is idempotent on the user.id & enrolled_at combination.\nPOSTing multiple times to this endpoint will NOT create a new enrollment for an existing user.id & enrolled_at\ncombination. However, each call will create a new enrollment if either the user.id or enrolled_at parameter does\nnot match an existing enrollment.\n\npurchase_state = 'CREATED', 'PENDING', 'SUCCESS', 'FAILED', 'REFUNDED', 'CANCELLED', or 'FLAGGED'\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"user\": {\n            \"id\": \"abcde12345\",\n        },\n        \"enrolled_at\" : \"2018-03-12T10:12:45Z\",\n        \"expires_at\" : \"2018-05-12T10:12:45Z\",\n        \"active\": true,\n        \"purchase\": {\n            \"purchase_state\": \"SUCCESS\",\n            \"purchase_price\": {\n                \"amount\": \"5.00\",\n                \"currency_code\": \"USD\"\n            },\n            \"purchased_at\": \"2018-02-12T10:12:45Z\",\n            \"tax_price_cents\": 100\n        }\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user",
                            "required": true,
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "User",
                                "description": ""
                            }
                        },
                        {
                            "name": "enrolled_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Enrolled at",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        },
                        {
                            "name": "purchase",
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "Purchase",
                                "description": ""
                            }
                        }
                    ]
                },
                "read": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/plan/{plan_id}/plan-enrollments/{plan_enrollment_id}",
                    "action": "get",
                    "description": "Get Plan enrollment details.  If an enrollment was created in association with a purchase,\nor registration through the course platform UI, the purchase details are included in the response.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                },
                "update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/plan/{plan_id}/plan-enrollments/{plan_enrollment_id}",
                    "action": "put",
                    "encoding": "application/json",
                    "description": "Update enrollment details. PUT and PATCH are identical - both do partial updates.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        }
                    ]
                },
                "partial_update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/plan/{plan_id}/plan-enrollments/{plan_enrollment_id}",
                    "action": "patch",
                    "encoding": "application/json",
                    "description": "Update enrollment details. PUT and PATCH are identical - both do partial updates.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "plan_enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "list": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/plan",
                "action": "get",
                "description": "Returns a list of Plans in a domain. Returns a paginated list (100 results per page) of Plans.\n\n\nExample Response:\n{\n    \"count\": 1,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"abcdefg123456\",\n            \"plan\": {\n                \"id\": \"cdefghi345678\",\n                \"title\": \"Example Plan Title\",\n            },\n            \"plan_url\": \"http://learn.example.com/plan/example-plan-title\",\n            \"offer\": {\n                \"id\": \"bcdefgh234567\",\n                \"registration_open\": true,\n                \"registration_url\": \"http://learn.example.com/checkout/bcdefgh234567\",\n                \"price\": {\n                    \"amount\": \"20.00\",\n                    \"currency_code\": \"USD\"\n                }\n            }\n        }\n    ]\n}",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/plan/{plan_id}",
                "action": "get",
                "description": "Retrieve Plan details.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "plan_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "published-courses": {
            "enrollments": {
                "list": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-courses/{published_course_id}/enrollments",
                    "action": "get",
                    "description": "List enrollments for a PublishedCourse.  A user may have multiple enrollments, and will have access to a course\nif at least one of the enrollments is active and not expired.  If an enrollment was created in association with\na purchase, or registration through the course platform UI, the purchase details are included in the response.\nReturns a paginated list (1000 results per page) of enrollments.\n\nExample Response:\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcdefg123456\",\n                \"user\": {\n                    \"id\": \"bcdefga123456\",\n                    \"email\": \"jane@doe.com\",\n                    \"first_name\": \"Jane\",\n                    \"last_name\": \"Doe\",\n                },\n                \"enrolled_at\": \"2015-01-29T00:22:00.590250Z\",\n                \"expires_at\": null,\n                \"active\": true,\n                \"purchase\": {\n                    \"order_id\": \"\",\n                    \"offer_price\": {\n                        \"amount\": \"100.00\",\n                        \"currency_code\": \"USD\"\n                    },\n                    \"purchase_price\": {\n                        \"amount\": \"50.00\",\n                        \"currency_code\": \"USD\"\n                    },\n                    \"quantity\": 1,\n                    \"purchase_state\": \"SUCCESS\",\n                    \"payment_processor\": \"STRIPE\",\n                    \"purchase_id\": \"xxxxxxxxxxxx\",\n                    \"purchased_at\": \"2021-07-02T18:17:30.640768Z\",\n                    \"tax_price_cents\": 0\n                }\n            }\n        ]\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        },
                        {
                            "name": "page_size",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page size",
                                "description": "Number of results to return per page."
                            }
                        }
                    ]
                },
                "create": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-courses/{published_course_id}/enrollments",
                    "action": "post",
                    "encoding": "application/json",
                    "description": "Enroll a user in a PublishedCourse.  This operation is idempotent on the user.id & enrolled_at combination.\nPOSTing multiple times to this endpoint will NOT create a new enrollment for an existing user.id & enrolled_at\ncombination. However, each call will create a new enrollment if either the user.id or enrolled_at parameter does\nnot match an existing enrollment.\n\npurchase_state = 'CREATED', 'PENDING', 'SUCCESS', 'FAILED', 'REFUNDED', 'CANCELLED', or 'FLAGGED'\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"user\": {\n            \"id\": \"abcde12345\",\n        },\n        \"enrolled_at\" : \"2018-03-12T10:12:45Z\",\n        \"expires_at\" : \"2018-05-12T10:12:45Z\",\n        \"active\": true,\n        \"purchase\": {\n            \"purchase_state\": \"SUCCESS\",\n            \"purchase_price\": {\n                \"amount\": \"5.00\",\n                \"currency_code\": \"USD\"\n            },\n            \"purchased_at\": \"2018-02-12T10:12:45Z\",\n            \"tax_price_cents\": 100\n        }\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user",
                            "required": true,
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "User",
                                "description": ""
                            }
                        },
                        {
                            "name": "enrolled_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Enrolled at",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        },
                        {
                            "name": "purchase",
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "Purchase",
                                "description": ""
                            }
                        }
                    ]
                },
                "read": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-courses/{published_course_id}/enrollments/{enrollment_id}",
                    "action": "get",
                    "description": "Get enrollment details.  If an enrollment was created in association with a purchase,\nor registration through the course platform UI, the purchase details are included in the response.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                },
                "update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-courses/{published_course_id}/enrollments/{enrollment_id}",
                    "action": "put",
                    "encoding": "application/json",
                    "description": "Update enrollment details. PUT and PATCH are identical - both do partial updates.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        }
                    ]
                },
                "partial_update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-courses/{published_course_id}/enrollments/{enrollment_id}",
                    "action": "patch",
                    "encoding": "application/json",
                    "description": "Update enrollment details. PUT and PATCH are identical - both do partial updates.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "list": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/published-courses",
                "action": "get",
                "description": "List courses published to a domain.  Returns a paginated list (100 results per page) of published courses.\n\nExample Response:\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcdefg123456\",\n                \"course\": {\n                    \"id\": \"cdefghi345678\",\n                    \"title\": \"Example Title\"\n                },\n                \"slug\": \"example-course\",\n                \"course_url\": \"http://learn.example.com/example-course\",\n                \"hidden\": false,\n                \"registration_required\": true,\n                \"registration_starts_at\": \"2017-11-28T08:00:00Z\",\n                \"registration_ends_at\": \"2018-09-30T06:00:00Z\",\n                \"timezone\": \"US/Pacific\",\n                \"offer\": {\n                    \"id\": \"bcdefgh234567\",\n                    \"registration_open\": true,\n                    \"registration_url\": \"http://learn.example.com/checkout/bcdefgh234567\",\n                    \"price\": {\n                        \"amount\": \"100.00\",\n                        \"currency_code\": \"USD\"\n                    }\n                }\n            }\n        ]\n    }",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "include_searchable_content",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "If set to True, the response also includes the following fields ('lesson_list', 'tags', 'short_description', 'long_description_html', 'search_keywords')"
                        }
                    },
                    {
                        "name": "search",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "URL encoded string, return the results and the order as if a catalog search"
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/published-courses/{published_course_id}",
                "action": "get",
                "description": "Retrieve course details.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "published_course_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "include_searchable_content",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "If set to True, the response also includes the following fields ('lesson_list', 'tags', 'short_description', 'long_description_html', 'search_keywords')"
                        }
                    }
                ]
            }
        },
        "published-paths": {
            "published-path-enrollments": {
                "list": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-paths/{published_path_id}/published-path-enrollments",
                    "action": "get",
                    "description": "List enrollments for a Published Path.  A user may have multiple published path enrollments, and will have access to a path\nif at least one of the enrollments is active and not expired.  If an enrollment was created in association with\na purchase, or registration through the course platform UI, the purchase details are included in the response.\nReturns a paginated list (1000 results per page) of enrollments.\n\nExample Response:\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcdefg123456\",\n                \"user\": {\n                    \"id\": \"bcdefga123456\",\n                    \"email\": \"jane@doe.com\",\n                    \"first_name\": \"Jane\",\n                    \"last_name\": \"Doe\",\n                },\n                \"enrolled_at\": \"2015-01-29T00:22:00.590250Z\",\n                \"expires_at\": null,\n                \"active\": true,\n                \"purchase\": {\n                    \"order_id\": \"\",\n                    \"offer_price\": {\n                        \"amount\": \"100.00\",\n                        \"currency_code\": \"USD\"\n                    },\n                    \"purchase_price\": {\n                        \"amount\": \"50.00\",\n                        \"currency_code\": \"USD\"\n                    },\n                    \"quantity\": 1,\n                    \"purchase_state\": \"SUCCESS\",\n                    \"payment_processor\": \"STRIPE\",\n                    \"purchase_id\": \"xxxxxxxxxxxx\",\n                    \"purchased_at\": \"2021-07-02T18:17:30.640768Z\",\n                    \"tax_price_cents\": 0\n                }\n            }\n        ]\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        },
                        {
                            "name": "page_size",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page size",
                                "description": "Number of results to return per page."
                            }
                        }
                    ]
                },
                "create": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-paths/{published_path_id}/published-path-enrollments",
                    "action": "post",
                    "encoding": "application/json",
                    "description": "Enroll a user in a PublishedPath.  This operation is idempotent on the user.id & enrolled_at combination.\nPOSTing multiple times to this endpoint will NOT create a new enrollment for an existing user.id & enrolled_at\ncombination. However, each call will create a new enrollment if either the user.id or enrolled_at parameter does\nnot match an existing enrollment.\n\npurchase_state = 'CREATED', 'PENDING', 'SUCCESS', 'FAILED', 'REFUNDED', 'CANCELLED', or 'FLAGGED'\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"user\": {\n            \"id\": \"abcde12345\",\n        },\n        \"enrolled_at\" : \"2018-03-12T10:12:45Z\",\n        \"expires_at\" : \"2018-05-12T10:12:45Z\",\n        \"active\": true,\n        \"purchase\": {\n            \"purchase_state\": \"SUCCESS\",\n            \"purchase_price\": {\n                \"amount\": \"5.00\",\n                \"currency_code\": \"USD\"\n            },\n            \"purchased_at\": \"2018-02-12T10:12:45Z\",\n            \"tax_price_cents\": 100\n        }\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user",
                            "required": true,
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "User",
                                "description": ""
                            }
                        },
                        {
                            "name": "enrolled_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Enrolled at",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        },
                        {
                            "name": "purchase",
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "Purchase",
                                "description": ""
                            }
                        }
                    ]
                },
                "read": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-paths/{published_path_id}/published-path-enrollments/{published_path_enrollment_id}",
                    "action": "get",
                    "description": "Get Published Path enrollment details.  If an enrollment was created in association with a purchase,\nor registration through the course platform UI, the purchase details are included in the response.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                },
                "update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-paths/{published_path_id}/published-path-enrollments/{published_path_enrollment_id}",
                    "action": "put",
                    "encoding": "application/json",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        }
                    ]
                },
                "partial_update": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/published-paths/{published_path_id}/published-path-enrollments/{published_path_enrollment_id}",
                    "action": "patch",
                    "encoding": "application/json",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_path_enrollment_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "expires_at",
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Expires at",
                                "description": ""
                            }
                        },
                        {
                            "name": "active",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Active",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "list": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/published-paths",
                "action": "get",
                "description": "Returns a list of Published Paths published to a domain. Returns a paginated list (100 results per page) of Published Paths.\n\n\nExample Response:\n{\n    \"count\": 1,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"abcdefg123456\",\n            \"path\": {\n                \"id\": \"cdefghi345678\",\n                \"title\": \"Example Path Title\",\n                \"path_item_count\": 0\n            },\n            \"path_url\": \"http://learn.example.com/path/example-path-title\",\n            \"offer\": {\n                \"id\": \"bcdefgh234567\",\n                \"registration_open\": true,\n                \"registration_url\": \"http://learn.example.com/checkout/bcdefgh234567\",\n                \"price\": {\n                    \"amount\": \"20.00\",\n                    \"currency_code\": \"USD\"\n                }\n            }\n        }\n    ]\n}",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "include_searchable_content",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "If set to True, the response also includes the following fields ('path_item_list', 'title', 'short_description', 'long_description_html', 'search_keywords' 'tags', 'hidden')"
                        }
                    },
                    {
                        "name": "search",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "URL encoded string, return the results and the order as if a catalog search. Note - This does not search within the path_item_list."
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/published-paths/{id}",
                "action": "get",
                "description": "Retrieve Published Path details.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "include_searchable_content",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "If set to True, the response also includes the following fields ('path_item_list', 'title', 'short_description', 'long_description_html', 'search_keywords' 'tags', 'hidden')"
                        }
                    },
                    {
                        "name": "search",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "URL encoded string, return the results and the order as if a catalog search. Note - This does not search within the path_item_list."
                        }
                    }
                ]
            }
        },
        "signup-fields": {
            "list": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/signup-fields",
                "action": "get",
                "description": "List signup fields for a domain.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            }
        },
        "users": {
            "invites": {
                "list": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/users/{user_id}/invites",
                    "action": "get",
                    "description": "List all invites for a user on this domain",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        }
                    ]
                },
                "create": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/users/{user_id}/invites",
                    "action": "post",
                    "encoding": "application/json",
                    "description": "Create domain user invite. This will send the user an invitation via email unless send_email is set to False.\nUser must have already been added to the domain.\n---",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "send_email",
                            "location": "form",
                            "schema": {
                                "_type": "boolean",
                                "title": "Send email",
                                "description": "Whether or not to send the user an email inviting them to the domain. Defaults to True"
                            }
                        }
                    ]
                },
                "read": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/users/{user_id}/invites/{domain_user_invite_id}",
                    "action": "get",
                    "description": "Get domain user invite details",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "domain_user_invite_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "signup-fields": {
                "list": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/users/{user_id}/signup-fields",
                    "action": "get",
                    "description": "List a user's signup fields.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        }
                    ]
                },
                "create": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/users/{user_id}/signup-fields",
                    "action": "post",
                    "encoding": "application/json",
                    "description": "Create or update a user's signup field value.\n\nIf the user does not have a current value assigned to the\nPOSTed signup field, this endpoint will create a new signup field value for the user.  If the user already\nhas a value associated with the signup field, it will be updated to the POSTed value.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"signup_field\": {\n            \"id\": \"abcd1234\"\n        },\n        \"value\": \"My Signupfield Value\"\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "signup_field",
                            "required": true,
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "Signup field",
                                "description": ""
                            }
                        },
                        {
                            "name": "value",
                            "required": true,
                            "location": "form",
                            "schema": {
                                "_type": "string",
                                "title": "Value",
                                "description": ""
                            }
                        }
                    ]
                },
                "read": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/users/{user_id}/signup-fields/{signup_field_id}",
                    "action": "get",
                    "description": "View a user's signup field value.",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "signup_field_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "signup-fields-bulk": {
                "create": {
                    "_type": "link",
                    "url": "/v1/domains/{domain_name}/users/{user_id}/signup-fields-bulk",
                    "action": "post",
                    "encoding": "application/json",
                    "description": "Create or update multiple signup field values for a user.\n\nIf the user does not have a current value assigned to any of the domain signup fields,\nthis endpoint will create a new signup field value for the user.\n\nIf the user already has a value associated with the signup field, it will be updated to the new value.\n\n#### Request Body\n\n    {\n        \"signup_fields\": [\n            {\"id\": \"4mjoj729j1my\", \"value\": \"NEW VALUE\"},\n            {\"id\": \"2dm0wghioq6rl\", \"value\": \"ANOTHER VALUE\"}\n        ]\n    }\n\n#### Response\n\nOn success, the service will return a `201 Created` with the `Location` header set.\n\nThe Path specified in the `Location` header can be used to retrieve a paginated list of all signup field values\nfor the user.\n\nThe response body will include all new and updated signup fields values.\nUnchanged values will not be included in this response.\n\n    {\n        \"signup_fields\"\": [\n          {\n            \"signup_field\": {\n              \"id\": \"4mjoj729j1my\",\n              \"label\": \"Job Title\"\n              },\n            \"value\": \"NEW VALUE\"\n            },\n            {\n            \"signup_field\": {\n              \"id\": \"2dm0wghioq6rl\",\n              \"label\": \"who is it\"\n              },\n            \"value\": \"ANOTHER VALUE\"\n            }\n        ]\n    }",
                    "fields": [
                        {
                            "name": "domain_name",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "signup_fields",
                            "required": true,
                            "location": "form",
                            "schema": {
                                "_type": "array",
                                "title": "Signup fields",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "list": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/users",
                "action": "get",
                "description": "List users for a domain.  Returns a paginated list (1000 results per page) of domain user details.\n\nExample Response:\n\n    {\n        \"count\": 2,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"user\": {\n                    \"id\": \"opqrstu345678\",\n                    \"email\": \"joe@example.com\",\n                    \"first_name\": \"Joe\",\n                    \"last_name\": \"User\"\n                },\n                \"active\": true,\n                \"marketing_optin\": null,\n                \"enrolled_at\": \"2015-01-29T00:22:00.590250Z\",\n                \"expires_at\": null,\n                \"access_code\": null\n            },\n            {\n                \"user\": {\n                    \"id\": \"cdefghi567890\",\n                    \"email\": \"jane@example.com\",\n                    \"first_name\": \"Jane\",\n                    \"last_name\": \"Doe\"\n                },\n                \"active\": false,\n                \"marketing_optin\": null,\n                \"enrolled_at\": \"2015-02-15T00:43:10.123456Z\",\n                \"expires_at\": null,\n                \"access_code\": {\n                    \"id\": \"defghij678901\",\n                    \"code\": \"opensesame\",\n                    \"pool\": {\n                        \"id\": \"efghijk789012\",\n                        \"name\": \"Genie Codes\"\n                    }\n                }\n            }\n        ]\n    }",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "page_size",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page size",
                            "description": "Number of results to return per page."
                        }
                    },
                    {
                        "name": "user__email",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by email address"
                        }
                    },
                    {
                        "name": "user__first_name",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by first name - case sensitive"
                        }
                    },
                    {
                        "name": "user__last_name",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by last name - case sensitive"
                        }
                    },
                    {
                        "name": "active",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by active (true or false)"
                        }
                    },
                    {
                        "name": "access_code__code",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by access code used - case sensitive"
                        }
                    },
                    {
                        "name": "access_code__id",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by id of access code used - not case sensitive"
                        }
                    },
                    {
                        "name": "access_code__pool__id",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by id of access code pool used - not case sensitive"
                        }
                    },
                    {
                        "name": "access_code",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Use a value of \"null\" to see domain users who accessed the domain without an access code. No other values are accepted for this query."
                        }
                    },
                    {
                        "name": "signup_field_id",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by a sign up field ID"
                        }
                    },
                    {
                        "name": "signup_field_label",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by a sign up field Label - case sensitive"
                        }
                    },
                    {
                        "name": "signup_field_value",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "Filter domain users by a sign up field Value - case sensitive"
                        }
                    },
                    {
                        "name": "include_signup_field_data",
                        "location": "query",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": "If set to true, the response also includes the following data for each user (\"signup_fields\")"
                        }
                    }
                ]
            },
            "create": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/users",
                "action": "post",
                "encoding": "application/json",
                "description": "Add a user to a domain.  Users must have unique email addresses.  You may POST an existing user (existing\nemail address) to the domain, and the call will still return successfully with the existing user details.\nIf you POST a new user email to the domain, the call will create a new user within the system.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"user\": {\n            \"email\": \"bob@example.com\",\n            \"first_name\": \"Bob\",\n            \"last_name\": \"User\"\n        }\n    }\n\nExample Response:\n\n    {\n        \"user\": {\n            \"id\": \"qrstuvw321098\",\n            \"email\": \"bob@example.com\",\n            \"first_name\": \"Bob\",\n            \"last_name\": \"User\"\n        },\n        \"active\": true,\n        \"marketing_optin\": null,\n        \"enrolled_at\": \"2015-01-29T00:22:00.590250Z\",\n        \"expires_at\": null,\n        \"access_code\": null,\n        \"login_token\": \"qrstuvw321098-3xn-a1b23cd456dfg7890hijk\"\n    }",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "user",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "object",
                            "title": "User",
                            "description": "User details"
                        }
                    },
                    {
                        "name": "active",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Active",
                            "description": "Only active users have access to a private domain"
                        }
                    },
                    {
                        "name": "marketing_optin",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Marketing optin",
                            "description": "Indicates user has accepted or rejected the marketing optin message.  Null indicates no marketing option message was shown to user"
                        }
                    },
                    {
                        "name": "expires_at",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Expires at",
                            "description": "ISO 8601 formatted datetime string indicating when the access to the domain will expire - ignored on public domains"
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/users/{user_id}",
                "action": "get",
                "description": "Get details about a user on a domain.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            },
            "update": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/users/{user_id}",
                "action": "put",
                "encoding": "application/json",
                "description": "Update domain user.\n\nOnly active and expires_at may be updated.  Access\ncodes may also be removed by setting the entire access_code to null.\n\nPUT and PATCH are identical - both do partial updates.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "active",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Active",
                            "description": ""
                        }
                    },
                    {
                        "name": "expires_at",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Expires at",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code",
                        "location": "form",
                        "schema": {
                            "_type": "object",
                            "title": "Access code",
                            "description": "Information about the access code entered by the user, if they used one to join a private domain"
                        }
                    }
                ]
            },
            "partial_update": {
                "_type": "link",
                "url": "/v1/domains/{domain_name}/users/{user_id}",
                "action": "patch",
                "encoding": "application/json",
                "description": "Update domain user.\n\nOnly active and expires_at may be updated.  Access\ncodes may also be removed by setting the entire access_code to null.\n\nPUT and PATCH are identical - both do partial updates.",
                "fields": [
                    {
                        "name": "domain_name",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "active",
                        "location": "form",
                        "schema": {
                            "_type": "boolean",
                            "title": "Active",
                            "description": ""
                        }
                    },
                    {
                        "name": "expires_at",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Expires at",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code",
                        "location": "form",
                        "schema": {
                            "_type": "object",
                            "title": "Access code",
                            "description": "Information about the access code entered by the user, if they used one to join a private domain"
                        }
                    }
                ]
            }
        },
        "list": {
            "_type": "link",
            "url": "/v1/domains",
            "action": "get",
            "description": "List domains.  Returns a paginated response (100 results per page) of domains.\n\nExample Response:\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcdefg123456\",\n                \"name\": \"example.com\",\n                \"catalog_title\": \"<h1 style=\\\"font-weight: 400; font-size: 28px;\\\">All Courses</h1>\",\n                \"access\": \"PUBLIC\",\n                \"access_code_message_html\": \"\",\n                \"marketing_message\": \"\"\n            }\n        ]\n    }",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/domains/{domain_name}",
            "action": "get",
            "description": "Get domain details.\n\nExample Response:\n\n    {\n        \"id\": \"abcdefg123456\",\n        \"name\": \"example.com\",\n        \"catalog_title\": \"<h1 style=\\\"font-weight: 400; font-size: 28px;\\\">All Courses</h1>\",\n        \"private\": true,\n        \"access\": \"PUBLIC\",\n        \"access_code_message_html\": \"\",\n        \"marketing_message\": \"\"\n    }",
            "fields": [
                {
                    "name": "domain_name",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/domains/{domain_name}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update domain details. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "domain_name",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "catalog_title",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Catalog title",
                        "description": "HTML content displayed at the top of the catalog page"
                    }
                },
                {
                    "name": "access",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Access",
                        "description": "Domain access settings",
                        "enum": [
                            "PUBLIC",
                            "PRIVATE",
                            "PRIVATE_CODE"
                        ]
                    }
                },
                {
                    "name": "access_code_message_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Access code message html",
                        "description": ""
                    }
                },
                {
                    "name": "marketing_message",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Marketing message",
                        "description": "Private domain marketing opt-in message, shown with checkbox on the signup page"
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/domains/{domain_name}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update domain details. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "domain_name",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "catalog_title",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Catalog title",
                        "description": "HTML content displayed at the top of the catalog page"
                    }
                },
                {
                    "name": "access",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Access",
                        "description": "Domain access settings",
                        "enum": [
                            "PUBLIC",
                            "PRIVATE",
                            "PRIVATE_CODE"
                        ]
                    }
                },
                {
                    "name": "access_code_message_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Access code message html",
                        "description": ""
                    }
                },
                {
                    "name": "marketing_message",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Marketing message",
                        "description": "Private domain marketing opt-in message, shown with checkbox on the signup page"
                    }
                }
            ]
        }
    },
    "group-categories": {
        "list": {
            "_type": "link",
            "url": "/v1/group-categories",
            "action": "get",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/group-categories/{group_category_id}",
            "action": "get",
            "fields": [
                {
                    "name": "group_category_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "groups": {
        "access-code-pools": {
            "list": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/access-code-pools",
                "action": "get",
                "description": "List access code pools for a group.  Returns a paginated list (1000 results per page) of access code pool details.",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "page_size",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page size",
                            "description": "Number of results to return per page."
                        }
                    }
                ]
            },
            "create": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/access-code-pools",
                "action": "post",
                "encoding": "application/json",
                "description": "Add an access code pool to a group.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"access_code_pool\": {\n            \"id\": \"abcde12345\"\n        }\n    }",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code_pool",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "object",
                            "title": "Access code pool",
                            "description": ""
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/access-code-pools/{access_code_pool_id}",
                "action": "get",
                "description": "Get details about an access code pool in a group.",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            },
            "delete": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/access-code-pools/{access_code_pool_id}",
                "action": "delete",
                "description": "Remove an access code pool from a group.",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "access_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "users": {
            "list": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/users",
                "action": "get",
                "description": "List users in a group.  Returns a paginated list (1000 results per page) of group user details.\n\nExample Response:\n\n    {\n        \"count\": 2,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"user\": {\n                    \"id\": \"opqrstu345678\",\n                    \"email\": \"joe@example.com\",\n                    \"first_name\": \"Joe\",\n                    \"last_name\": \"User\"\n                },\n                \"created_at\": \"2015-02-19T19:20:24.671362Z\"\n            },\n            {\n                \"user\": {\n                    \"id\": \"cdefghi567890\",\n                    \"email\": \"jane@example.com\",\n                    \"first_name\": \"Jane\",\n                    \"last_name\": \"Doe\"\n                },\n                \"created_at\": \"2015-02-18T10:37:48.543927Z\"\n            }\n        ]\n    }",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "page_size",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page size",
                            "description": "Number of results to return per page."
                        }
                    }
                ]
            },
            "create": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/users",
                "action": "post",
                "encoding": "application/json",
                "description": "Add a user to a group.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"user\": {\n            \"id\": \"abcde12345\"\n        }\n    }",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "user",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "object",
                            "title": "User",
                            "description": "User details"
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/users/{user_id}",
                "action": "get",
                "description": "Get details about a user in a group.",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            },
            "delete": {
                "_type": "link",
                "url": "/v1/groups/{group_id}/users/{user_id}",
                "action": "delete",
                "description": "Remove a user from a group.",
                "fields": [
                    {
                        "name": "group_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "list": {
            "_type": "link",
            "url": "/v1/groups",
            "action": "get",
            "description": "List groups.  Returns a paginated list (1000 results per page) of groups.\n\nname -- filter groups by exact match on group name",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "name",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter groups by exact match on group name"
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/groups",
            "action": "post",
            "encoding": "application/json",
            "description": "Creates a new `Group`.\n\n### Example Request\n\n    {\n        \"name\": \"Cool People\",\n        \"discount_percent\": 10,\n        \"sign_up_field_rule\": {\n            \"enforce\": true,\n            \"require_match_all\": false,\n            \"options\": [\n                {\"id\": \"<signup_field_option_obfuscated_id>\"}\n             ]\n        }\n    }\n\n#### Properties of the `sign_up_field_rule` request field\n\n* `enforced`: When false, these rules will not be applied during user signup\n* `require_match_all`: When set to `true`, users must match all sign up field options.\n    When set to `false`, any sign up field match will grant group membership.\n* `options`: a list of {\"id\": \"<signup_field_option_id>\"} pairs that matching users should have assigned.\n\n\n-----\n\n### Example Response\n\n    {\n        \"id\": \"17stq4h0ssozk\",\n        \"name\": \"Cool People\",\n        \"user_count\": 0,\n        \"discount_percent\": 10,\n        \"group_category_id\": null,\n        \"sign_up_field_rule\": {\n            \"enforce\": true,\n            \"require_match_all\": false,\n            \"options\": [ ]\n        }\n    }",
            "fields": [
                {
                    "name": "name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": "Unique name of the group"
                    }
                },
                {
                    "name": "discount_percent",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Discount percent",
                        "description": "A percentage based discount that will apply to all purchasable objects/courses"
                    }
                },
                {
                    "name": "group_category_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Group category id",
                        "description": ""
                    }
                },
                {
                    "name": "sign_up_field_rule",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Sign up field rule",
                        "description": "Signup field rule configuration.  Users with matching signup values will be automatic assigned to this group."
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/groups/{group_id}",
            "action": "get",
            "description": "Get group details.",
            "fields": [
                {
                    "name": "group_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/groups/{group_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update group details. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "group_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": "Unique name of the group"
                    }
                },
                {
                    "name": "discount_percent",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Discount percent",
                        "description": "A percentage based discount that will apply to all purchasable objects/courses"
                    }
                },
                {
                    "name": "group_category_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Group category id",
                        "description": ""
                    }
                },
                {
                    "name": "sign_up_field_rule",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Sign up field rule",
                        "description": "Signup field rule configuration.  Users with matching signup values will be automatic assigned to this group."
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/groups/{group_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update group details. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "group_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "name",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": "Unique name of the group"
                    }
                },
                {
                    "name": "discount_percent",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Discount percent",
                        "description": "A percentage based discount that will apply to all purchasable objects/courses"
                    }
                },
                {
                    "name": "group_category_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Group category id",
                        "description": ""
                    }
                },
                {
                    "name": "sign_up_field_rule",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Sign up field rule",
                        "description": "Signup field rule configuration.  Users with matching signup values will be automatic assigned to this group."
                    }
                }
            ]
        },
        "delete": {
            "_type": "link",
            "url": "/v1/groups/{group_id}",
            "action": "delete",
            "description": "Delete group.  Completely removes the Group and all GroupUsers. Users and DomainUsers are preserved. This\noperation cannot be undone.",
            "fields": [
                {
                    "name": "group_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "ilt-instructors": {
        "list": {
            "_type": "link",
            "url": "/v1/ilt-instructors",
            "action": "get",
            "description": "List ILT instructors. Returns a paginated list based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "email",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter instructors by exact match of an email. (optional)"
                    }
                },
                {
                    "name": "provider",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter instructors by exact match of a provider. (optional)"
                    }
                }
            ]
        }
    },
    "ilt-multi-session-events": {
        "list": {
            "_type": "link",
            "url": "/v1/ilt-multi-session-events",
            "action": "get",
            "description": "List ILT multi-session events.\n\nReturns a paginated list based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/ilt-multi-session-events",
            "action": "post",
            "encoding": "application/json",
            "description": "Create an ILT multi-session event.\n\nExample body:\n\n    {\n        \"lesson\": \"pwgfw0liwwi4\",\n        \"display_name\": \"event_display_name\",\n        \"seats_total\": 10\n    }",
            "fields": [
                {
                    "name": "lesson",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Lesson",
                        "description": "Live training lesson id for the multi-session event"
                    }
                },
                {
                    "name": "display_name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Display name",
                        "description": "Name to be displayed for the multi-session event"
                    }
                },
                {
                    "name": "seats_total",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Seats total",
                        "description": "How many total seats are available"
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/ilt-multi-session-events/{id}",
            "action": "get",
            "description": "Get details about an ILT multi-session event.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/ilt-multi-session-events/{id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update an ILT multi-session event.\n\nExample body:\n\n    {\n        \"lesson\": \"pwgfw0liwwi4\",\n        \"display_name\": \"event_display_name\",\n        \"seats_total\": 10\n    }",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "lesson",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Lesson",
                        "description": "Live training lesson id for the multi-session event"
                    }
                },
                {
                    "name": "display_name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Display name",
                        "description": "Name to be displayed for the multi-session event"
                    }
                },
                {
                    "name": "seats_total",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Seats total",
                        "description": "How many total seats are available"
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/ilt-multi-session-events/{id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Viewset for Public api for IltMultiSessionEvent",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "lesson",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Lesson",
                        "description": "Live training lesson id for the multi-session event"
                    }
                },
                {
                    "name": "display_name",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Display name",
                        "description": "Name to be displayed for the multi-session event"
                    }
                },
                {
                    "name": "seats_total",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Seats total",
                        "description": "How many total seats are available"
                    }
                }
            ]
        }
    },
    "ilt-sessions": {
        "list": {
            "_type": "link",
            "url": "/v1/ilt-sessions",
            "action": "get",
            "description": "List ILT sessions. Returns a paginated list.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/ilt-sessions",
            "action": "post",
            "encoding": "application/json",
            "description": "Create an ILT session.",
            "fields": [
                {
                    "name": "instructor_email",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Instructor email",
                        "description": "Instructor email, can be provided either as <code>instructor@example.com</code> or <code>Instructor Name &lt;instructor@example.com&gt;</code> for events without a provider."
                    }
                },
                {
                    "name": "provider",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Provider",
                        "description": "The session provider. Can be one of <code>calendar</code>, <code>goto.meeting</code>, <code>goto.training</code>, <code>goto.webinar</code>, <code>goto.webcast</code>, <code>webex.meeting</code>, <code>webex.webinar</code>, <code>webex.training</code>, <code>zoom.meeting</code>, <code>zoom.webinar</code>. Defaults to <code>calendar</code>.",
                        "enum": [
                            "calendar",
                            "goto.meeting",
                            "goto.training",
                            "goto.webinar",
                            "goto.webcast",
                            "webex.meeting",
                            "webex.webinar",
                            "webex.training",
                            "zoom.meeting",
                            "zoom.webinar"
                        ]
                    }
                },
                {
                    "name": "description",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Description",
                        "description": "HTML description of the event"
                    }
                },
                {
                    "name": "seats_total",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Seats total",
                        "description": "The maximum number of event registrants, empty if disabled. This cannot be set for sessions belonging to a multi-session event."
                    }
                },
                {
                    "name": "post_registration_instructions",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Post registration instructions",
                        "description": "HTML shown to the user after registering"
                    }
                },
                {
                    "name": "multi_session_event",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Multi session event",
                        "description": "The MultiSessionEvent that this ViltSessionEvent belongs to. It is required to set either this or <code>lesson</code>."
                    }
                },
                {
                    "name": "lesson",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Lesson",
                        "description": "The Lesson that this ViltSessionEvent belongs to. It is required to set either this or <code>multi_session_event</code>."
                    }
                },
                {
                    "name": "location",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Location",
                        "description": "The location where the event will be held. This cannot be set for non-calendar sessions."
                    }
                },
                {
                    "name": "starts_at",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Starts at",
                        "description": "ISO 8601 formatted datetime string indicating when the start of the event is scheduled"
                    }
                },
                {
                    "name": "ends_at",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Ends at",
                        "description": "ISO 8601 formatted datetime string indicating when the end of the event is scheduled"
                    }
                },
                {
                    "name": "display_name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Event name",
                        "description": "The title of the event"
                    }
                },
                {
                    "name": "event_link",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Event link",
                        "description": "URL allowing users to join the event. This cannot be set for non-calendar sessions."
                    }
                },
                {
                    "name": "timezone",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Timezone",
                        "description": "ISO 8601 formatted timezone of the event",
                        "enum": [
                            "Africa/Abidjan",
                            "Africa/Accra",
                            "Africa/Addis_Ababa",
                            "Africa/Algiers",
                            "Africa/Asmara",
                            "Africa/Bamako",
                            "Africa/Bangui",
                            "Africa/Banjul",
                            "Africa/Bissau",
                            "Africa/Blantyre",
                            "Africa/Brazzaville",
                            "Africa/Bujumbura",
                            "Africa/Cairo",
                            "Africa/Casablanca",
                            "Africa/Ceuta",
                            "Africa/Conakry",
                            "Africa/Dakar",
                            "Africa/Dar_es_Salaam",
                            "Africa/Djibouti",
                            "Africa/Douala",
                            "Africa/El_Aaiun",
                            "Africa/Freetown",
                            "Africa/Gaborone",
                            "Africa/Harare",
                            "Africa/Johannesburg",
                            "Africa/Juba",
                            "Africa/Kampala",
                            "Africa/Khartoum",
                            "Africa/Kigali",
                            "Africa/Kinshasa",
                            "Africa/Lagos",
                            "Africa/Libreville",
                            "Africa/Lome",
                            "Africa/Luanda",
                            "Africa/Lubumbashi",
                            "Africa/Lusaka",
                            "Africa/Malabo",
                            "Africa/Maputo",
                            "Africa/Maseru",
                            "Africa/Mbabane",
                            "Africa/Mogadishu",
                            "Africa/Monrovia",
                            "Africa/Nairobi",
                            "Africa/Ndjamena",
                            "Africa/Niamey",
                            "Africa/Nouakchott",
                            "Africa/Ouagadougou",
                            "Africa/Porto-Novo",
                            "Africa/Sao_Tome",
                            "Africa/Tripoli",
                            "Africa/Tunis",
                            "Africa/Windhoek",
                            "America/Adak",
                            "America/Anchorage",
                            "America/Anguilla",
                            "America/Antigua",
                            "America/Araguaina",
                            "America/Argentina/Buenos_Aires",
                            "America/Argentina/Catamarca",
                            "America/Argentina/Cordoba",
                            "America/Argentina/Jujuy",
                            "America/Argentina/La_Rioja",
                            "America/Argentina/Mendoza",
                            "America/Argentina/Rio_Gallegos",
                            "America/Argentina/Salta",
                            "America/Argentina/San_Juan",
                            "America/Argentina/San_Luis",
                            "America/Argentina/Tucuman",
                            "America/Argentina/Ushuaia",
                            "America/Aruba",
                            "America/Asuncion",
                            "America/Atikokan",
                            "America/Bahia",
                            "America/Bahia_Banderas",
                            "America/Barbados",
                            "America/Belem",
                            "America/Belize",
                            "America/Blanc-Sablon",
                            "America/Boa_Vista",
                            "America/Bogota",
                            "America/Boise",
                            "America/Cambridge_Bay",
                            "America/Campo_Grande",
                            "America/Cancun",
                            "America/Caracas",
                            "America/Cayenne",
                            "America/Cayman",
                            "America/Chicago",
                            "America/Chihuahua",
                            "America/Ciudad_Juarez",
                            "America/Costa_Rica",
                            "America/Creston",
                            "America/Cuiaba",
                            "America/Curacao",
                            "America/Danmarkshavn",
                            "America/Dawson",
                            "America/Dawson_Creek",
                            "America/Denver",
                            "America/Detroit",
                            "America/Dominica",
                            "America/Edmonton",
                            "America/Eirunepe",
                            "America/El_Salvador",
                            "America/Fort_Nelson",
                            "America/Fortaleza",
                            "America/Glace_Bay",
                            "America/Goose_Bay",
                            "America/Grand_Turk",
                            "America/Grenada",
                            "America/Guadeloupe",
                            "America/Guatemala",
                            "America/Guayaquil",
                            "America/Guyana",
                            "America/Halifax",
                            "America/Havana",
                            "America/Hermosillo",
                            "America/Indiana/Indianapolis",
                            "America/Indiana/Knox",
                            "America/Indiana/Marengo",
                            "America/Indiana/Petersburg",
                            "America/Indiana/Tell_City",
                            "America/Indiana/Vevay",
                            "America/Indiana/Vincennes",
                            "America/Indiana/Winamac",
                            "America/Inuvik",
                            "America/Iqaluit",
                            "America/Jamaica",
                            "America/Juneau",
                            "America/Kentucky/Louisville",
                            "America/Kentucky/Monticello",
                            "America/Kralendijk",
                            "America/La_Paz",
                            "America/Lima",
                            "America/Los_Angeles",
                            "America/Lower_Princes",
                            "America/Maceio",
                            "America/Managua",
                            "America/Manaus",
                            "America/Marigot",
                            "America/Martinique",
                            "America/Matamoros",
                            "America/Mazatlan",
                            "America/Menominee",
                            "America/Merida",
                            "America/Metlakatla",
                            "America/Mexico_City",
                            "America/Miquelon",
                            "America/Moncton",
                            "America/Monterrey",
                            "America/Montevideo",
                            "America/Montserrat",
                            "America/Nassau",
                            "America/New_York",
                            "America/Nome",
                            "America/Noronha",
                            "America/North_Dakota/Beulah",
                            "America/North_Dakota/Center",
                            "America/North_Dakota/New_Salem",
                            "America/Nuuk",
                            "America/Ojinaga",
                            "America/Panama",
                            "America/Paramaribo",
                            "America/Phoenix",
                            "America/Port-au-Prince",
                            "America/Port_of_Spain",
                            "America/Porto_Velho",
                            "America/Puerto_Rico",
                            "America/Punta_Arenas",
                            "America/Rankin_Inlet",
                            "America/Recife",
                            "America/Regina",
                            "America/Resolute",
                            "America/Rio_Branco",
                            "America/Santarem",
                            "America/Santiago",
                            "America/Santo_Domingo",
                            "America/Sao_Paulo",
                            "America/Scoresbysund",
                            "America/Sitka",
                            "America/St_Barthelemy",
                            "America/St_Johns",
                            "America/St_Kitts",
                            "America/St_Lucia",
                            "America/St_Thomas",
                            "America/St_Vincent",
                            "America/Swift_Current",
                            "America/Tegucigalpa",
                            "America/Thule",
                            "America/Tijuana",
                            "America/Toronto",
                            "America/Tortola",
                            "America/Vancouver",
                            "America/Whitehorse",
                            "America/Winnipeg",
                            "America/Yakutat",
                            "Antarctica/Casey",
                            "Antarctica/Davis",
                            "Antarctica/DumontDUrville",
                            "Antarctica/Macquarie",
                            "Antarctica/Mawson",
                            "Antarctica/McMurdo",
                            "Antarctica/Palmer",
                            "Antarctica/Rothera",
                            "Antarctica/Syowa",
                            "Antarctica/Troll",
                            "Antarctica/Vostok",
                            "Arctic/Longyearbyen",
                            "Asia/Aden",
                            "Asia/Almaty",
                            "Asia/Amman",
                            "Asia/Anadyr",
                            "Asia/Aqtau",
                            "Asia/Aqtobe",
                            "Asia/Ashgabat",
                            "Asia/Atyrau",
                            "Asia/Baghdad",
                            "Asia/Bahrain",
                            "Asia/Baku",
                            "Asia/Bangkok",
                            "Asia/Barnaul",
                            "Asia/Beirut",
                            "Asia/Bishkek",
                            "Asia/Brunei",
                            "Asia/Chita",
                            "Asia/Colombo",
                            "Asia/Damascus",
                            "Asia/Dhaka",
                            "Asia/Dili",
                            "Asia/Dubai",
                            "Asia/Dushanbe",
                            "Asia/Famagusta",
                            "Asia/Gaza",
                            "Asia/Hebron",
                            "Asia/Ho_Chi_Minh",
                            "Asia/Hong_Kong",
                            "Asia/Hovd",
                            "Asia/Irkutsk",
                            "Asia/Jakarta",
                            "Asia/Jayapura",
                            "Asia/Jerusalem",
                            "Asia/Kabul",
                            "Asia/Kamchatka",
                            "Asia/Karachi",
                            "Asia/Kathmandu",
                            "Asia/Khandyga",
                            "Asia/Kolkata",
                            "Asia/Krasnoyarsk",
                            "Asia/Kuala_Lumpur",
                            "Asia/Kuching",
                            "Asia/Kuwait",
                            "Asia/Macau",
                            "Asia/Magadan",
                            "Asia/Makassar",
                            "Asia/Manila",
                            "Asia/Muscat",
                            "Asia/Nicosia",
                            "Asia/Novokuznetsk",
                            "Asia/Novosibirsk",
                            "Asia/Omsk",
                            "Asia/Oral",
                            "Asia/Phnom_Penh",
                            "Asia/Pontianak",
                            "Asia/Pyongyang",
                            "Asia/Qatar",
                            "Asia/Qostanay",
                            "Asia/Qyzylorda",
                            "Asia/Riyadh",
                            "Asia/Sakhalin",
                            "Asia/Samarkand",
                            "Asia/Seoul",
                            "Asia/Shanghai",
                            "Asia/Singapore",
                            "Asia/Srednekolymsk",
                            "Asia/Taipei",
                            "Asia/Tashkent",
                            "Asia/Tbilisi",
                            "Asia/Tehran",
                            "Asia/Thimphu",
                            "Asia/Tokyo",
                            "Asia/Tomsk",
                            "Asia/Ulaanbaatar",
                            "Asia/Urumqi",
                            "Asia/Ust-Nera",
                            "Asia/Vientiane",
                            "Asia/Vladivostok",
                            "Asia/Yakutsk",
                            "Asia/Yangon",
                            "Asia/Yekaterinburg",
                            "Asia/Yerevan",
                            "Atlantic/Azores",
                            "Atlantic/Bermuda",
                            "Atlantic/Canary",
                            "Atlantic/Cape_Verde",
                            "Atlantic/Faroe",
                            "Atlantic/Madeira",
                            "Atlantic/Reykjavik",
                            "Atlantic/South_Georgia",
                            "Atlantic/St_Helena",
                            "Atlantic/Stanley",
                            "Australia/Adelaide",
                            "Australia/Brisbane",
                            "Australia/Broken_Hill",
                            "Australia/Darwin",
                            "Australia/Eucla",
                            "Australia/Hobart",
                            "Australia/Lindeman",
                            "Australia/Lord_Howe",
                            "Australia/Melbourne",
                            "Australia/Perth",
                            "Australia/Sydney",
                            "Canada/Atlantic",
                            "Canada/Central",
                            "Canada/Eastern",
                            "Canada/Mountain",
                            "Canada/Newfoundland",
                            "Canada/Pacific",
                            "Europe/Amsterdam",
                            "Europe/Andorra",
                            "Europe/Astrakhan",
                            "Europe/Athens",
                            "Europe/Belgrade",
                            "Europe/Berlin",
                            "Europe/Bratislava",
                            "Europe/Brussels",
                            "Europe/Bucharest",
                            "Europe/Budapest",
                            "Europe/Busingen",
                            "Europe/Chisinau",
                            "Europe/Copenhagen",
                            "Europe/Dublin",
                            "Europe/Gibraltar",
                            "Europe/Guernsey",
                            "Europe/Helsinki",
                            "Europe/Isle_of_Man",
                            "Europe/Istanbul",
                            "Europe/Jersey",
                            "Europe/Kaliningrad",
                            "Europe/Kirov",
                            "Europe/Kyiv",
                            "Europe/Lisbon",
                            "Europe/Ljubljana",
                            "Europe/London",
                            "Europe/Luxembourg",
                            "Europe/Madrid",
                            "Europe/Malta",
                            "Europe/Mariehamn",
                            "Europe/Minsk",
                            "Europe/Monaco",
                            "Europe/Moscow",
                            "Europe/Oslo",
                            "Europe/Paris",
                            "Europe/Podgorica",
                            "Europe/Prague",
                            "Europe/Riga",
                            "Europe/Rome",
                            "Europe/Samara",
                            "Europe/San_Marino",
                            "Europe/Sarajevo",
                            "Europe/Saratov",
                            "Europe/Simferopol",
                            "Europe/Skopje",
                            "Europe/Sofia",
                            "Europe/Stockholm",
                            "Europe/Tallinn",
                            "Europe/Tirane",
                            "Europe/Ulyanovsk",
                            "Europe/Vaduz",
                            "Europe/Vatican",
                            "Europe/Vienna",
                            "Europe/Vilnius",
                            "Europe/Volgograd",
                            "Europe/Warsaw",
                            "Europe/Zagreb",
                            "Europe/Zurich",
                            "GMT",
                            "Indian/Antananarivo",
                            "Indian/Chagos",
                            "Indian/Christmas",
                            "Indian/Cocos",
                            "Indian/Comoro",
                            "Indian/Kerguelen",
                            "Indian/Mahe",
                            "Indian/Maldives",
                            "Indian/Mauritius",
                            "Indian/Mayotte",
                            "Indian/Reunion",
                            "Pacific/Apia",
                            "Pacific/Auckland",
                            "Pacific/Bougainville",
                            "Pacific/Chatham",
                            "Pacific/Chuuk",
                            "Pacific/Easter",
                            "Pacific/Efate",
                            "Pacific/Fakaofo",
                            "Pacific/Fiji",
                            "Pacific/Funafuti",
                            "Pacific/Galapagos",
                            "Pacific/Gambier",
                            "Pacific/Guadalcanal",
                            "Pacific/Guam",
                            "Pacific/Honolulu",
                            "Pacific/Kanton",
                            "Pacific/Kiritimati",
                            "Pacific/Kosrae",
                            "Pacific/Kwajalein",
                            "Pacific/Majuro",
                            "Pacific/Marquesas",
                            "Pacific/Midway",
                            "Pacific/Nauru",
                            "Pacific/Niue",
                            "Pacific/Norfolk",
                            "Pacific/Noumea",
                            "Pacific/Pago_Pago",
                            "Pacific/Palau",
                            "Pacific/Pitcairn",
                            "Pacific/Pohnpei",
                            "Pacific/Port_Moresby",
                            "Pacific/Rarotonga",
                            "Pacific/Saipan",
                            "Pacific/Tahiti",
                            "Pacific/Tarawa",
                            "Pacific/Tongatapu",
                            "Pacific/Wake",
                            "Pacific/Wallis",
                            "US/Alaska",
                            "US/Arizona",
                            "US/Central",
                            "US/Eastern",
                            "US/Hawaii",
                            "US/Mountain",
                            "US/Pacific",
                            "UTC"
                        ]
                    }
                },
                {
                    "name": "tags",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Tags",
                        "description": "Comma-separated list of tags. Cannot be set on sessions attached to a multi-session event."
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/ilt-sessions/{id}",
            "action": "get",
            "description": "Get details about an ILT session.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/ilt-sessions/{id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update an ILT session.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "instructor_email",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Instructor email",
                        "description": "Instructor email, can be provided either as <code>instructor@example.com</code> or <code>Instructor Name &lt;instructor@example.com&gt;</code> for events without a provider."
                    }
                },
                {
                    "name": "provider",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Provider",
                        "description": "The session provider. Can be one of <code>calendar</code>, <code>goto.meeting</code>, <code>goto.training</code>, <code>goto.webinar</code>, <code>goto.webcast</code>, <code>webex.meeting</code>, <code>webex.webinar</code>, <code>webex.training</code>, <code>zoom.meeting</code>, <code>zoom.webinar</code>. Defaults to <code>calendar</code>.",
                        "enum": [
                            "calendar",
                            "goto.meeting",
                            "goto.training",
                            "goto.webinar",
                            "goto.webcast",
                            "webex.meeting",
                            "webex.webinar",
                            "webex.training",
                            "zoom.meeting",
                            "zoom.webinar"
                        ]
                    }
                },
                {
                    "name": "description",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Description",
                        "description": "HTML description of the event"
                    }
                },
                {
                    "name": "seats_total",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Seats total",
                        "description": "The maximum number of event registrants, empty if disabled. This cannot be set for sessions belonging to a multi-session event."
                    }
                },
                {
                    "name": "post_registration_instructions",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Post registration instructions",
                        "description": "HTML shown to the user after registering"
                    }
                },
                {
                    "name": "multi_session_event",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Multi session event",
                        "description": "The MultiSessionEvent that this ViltSessionEvent belongs to. It is required to set either this or <code>lesson</code>."
                    }
                },
                {
                    "name": "lesson",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Lesson",
                        "description": "The Lesson that this ViltSessionEvent belongs to. It is required to set either this or <code>multi_session_event</code>."
                    }
                },
                {
                    "name": "location",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Location",
                        "description": "The location where the event will be held. This cannot be set for non-calendar sessions."
                    }
                },
                {
                    "name": "starts_at",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Starts at",
                        "description": "ISO 8601 formatted datetime string indicating when the start of the event is scheduled"
                    }
                },
                {
                    "name": "ends_at",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Ends at",
                        "description": "ISO 8601 formatted datetime string indicating when the end of the event is scheduled"
                    }
                },
                {
                    "name": "display_name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Event name",
                        "description": "The title of the event"
                    }
                },
                {
                    "name": "event_link",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Event link",
                        "description": "URL allowing users to join the event. This cannot be set for non-calendar sessions."
                    }
                },
                {
                    "name": "timezone",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Timezone",
                        "description": "ISO 8601 formatted timezone of the event",
                        "enum": [
                            "Africa/Abidjan",
                            "Africa/Accra",
                            "Africa/Addis_Ababa",
                            "Africa/Algiers",
                            "Africa/Asmara",
                            "Africa/Bamako",
                            "Africa/Bangui",
                            "Africa/Banjul",
                            "Africa/Bissau",
                            "Africa/Blantyre",
                            "Africa/Brazzaville",
                            "Africa/Bujumbura",
                            "Africa/Cairo",
                            "Africa/Casablanca",
                            "Africa/Ceuta",
                            "Africa/Conakry",
                            "Africa/Dakar",
                            "Africa/Dar_es_Salaam",
                            "Africa/Djibouti",
                            "Africa/Douala",
                            "Africa/El_Aaiun",
                            "Africa/Freetown",
                            "Africa/Gaborone",
                            "Africa/Harare",
                            "Africa/Johannesburg",
                            "Africa/Juba",
                            "Africa/Kampala",
                            "Africa/Khartoum",
                            "Africa/Kigali",
                            "Africa/Kinshasa",
                            "Africa/Lagos",
                            "Africa/Libreville",
                            "Africa/Lome",
                            "Africa/Luanda",
                            "Africa/Lubumbashi",
                            "Africa/Lusaka",
                            "Africa/Malabo",
                            "Africa/Maputo",
                            "Africa/Maseru",
                            "Africa/Mbabane",
                            "Africa/Mogadishu",
                            "Africa/Monrovia",
                            "Africa/Nairobi",
                            "Africa/Ndjamena",
                            "Africa/Niamey",
                            "Africa/Nouakchott",
                            "Africa/Ouagadougou",
                            "Africa/Porto-Novo",
                            "Africa/Sao_Tome",
                            "Africa/Tripoli",
                            "Africa/Tunis",
                            "Africa/Windhoek",
                            "America/Adak",
                            "America/Anchorage",
                            "America/Anguilla",
                            "America/Antigua",
                            "America/Araguaina",
                            "America/Argentina/Buenos_Aires",
                            "America/Argentina/Catamarca",
                            "America/Argentina/Cordoba",
                            "America/Argentina/Jujuy",
                            "America/Argentina/La_Rioja",
                            "America/Argentina/Mendoza",
                            "America/Argentina/Rio_Gallegos",
                            "America/Argentina/Salta",
                            "America/Argentina/San_Juan",
                            "America/Argentina/San_Luis",
                            "America/Argentina/Tucuman",
                            "America/Argentina/Ushuaia",
                            "America/Aruba",
                            "America/Asuncion",
                            "America/Atikokan",
                            "America/Bahia",
                            "America/Bahia_Banderas",
                            "America/Barbados",
                            "America/Belem",
                            "America/Belize",
                            "America/Blanc-Sablon",
                            "America/Boa_Vista",
                            "America/Bogota",
                            "America/Boise",
                            "America/Cambridge_Bay",
                            "America/Campo_Grande",
                            "America/Cancun",
                            "America/Caracas",
                            "America/Cayenne",
                            "America/Cayman",
                            "America/Chicago",
                            "America/Chihuahua",
                            "America/Ciudad_Juarez",
                            "America/Costa_Rica",
                            "America/Creston",
                            "America/Cuiaba",
                            "America/Curacao",
                            "America/Danmarkshavn",
                            "America/Dawson",
                            "America/Dawson_Creek",
                            "America/Denver",
                            "America/Detroit",
                            "America/Dominica",
                            "America/Edmonton",
                            "America/Eirunepe",
                            "America/El_Salvador",
                            "America/Fort_Nelson",
                            "America/Fortaleza",
                            "America/Glace_Bay",
                            "America/Goose_Bay",
                            "America/Grand_Turk",
                            "America/Grenada",
                            "America/Guadeloupe",
                            "America/Guatemala",
                            "America/Guayaquil",
                            "America/Guyana",
                            "America/Halifax",
                            "America/Havana",
                            "America/Hermosillo",
                            "America/Indiana/Indianapolis",
                            "America/Indiana/Knox",
                            "America/Indiana/Marengo",
                            "America/Indiana/Petersburg",
                            "America/Indiana/Tell_City",
                            "America/Indiana/Vevay",
                            "America/Indiana/Vincennes",
                            "America/Indiana/Winamac",
                            "America/Inuvik",
                            "America/Iqaluit",
                            "America/Jamaica",
                            "America/Juneau",
                            "America/Kentucky/Louisville",
                            "America/Kentucky/Monticello",
                            "America/Kralendijk",
                            "America/La_Paz",
                            "America/Lima",
                            "America/Los_Angeles",
                            "America/Lower_Princes",
                            "America/Maceio",
                            "America/Managua",
                            "America/Manaus",
                            "America/Marigot",
                            "America/Martinique",
                            "America/Matamoros",
                            "America/Mazatlan",
                            "America/Menominee",
                            "America/Merida",
                            "America/Metlakatla",
                            "America/Mexico_City",
                            "America/Miquelon",
                            "America/Moncton",
                            "America/Monterrey",
                            "America/Montevideo",
                            "America/Montserrat",
                            "America/Nassau",
                            "America/New_York",
                            "America/Nome",
                            "America/Noronha",
                            "America/North_Dakota/Beulah",
                            "America/North_Dakota/Center",
                            "America/North_Dakota/New_Salem",
                            "America/Nuuk",
                            "America/Ojinaga",
                            "America/Panama",
                            "America/Paramaribo",
                            "America/Phoenix",
                            "America/Port-au-Prince",
                            "America/Port_of_Spain",
                            "America/Porto_Velho",
                            "America/Puerto_Rico",
                            "America/Punta_Arenas",
                            "America/Rankin_Inlet",
                            "America/Recife",
                            "America/Regina",
                            "America/Resolute",
                            "America/Rio_Branco",
                            "America/Santarem",
                            "America/Santiago",
                            "America/Santo_Domingo",
                            "America/Sao_Paulo",
                            "America/Scoresbysund",
                            "America/Sitka",
                            "America/St_Barthelemy",
                            "America/St_Johns",
                            "America/St_Kitts",
                            "America/St_Lucia",
                            "America/St_Thomas",
                            "America/St_Vincent",
                            "America/Swift_Current",
                            "America/Tegucigalpa",
                            "America/Thule",
                            "America/Tijuana",
                            "America/Toronto",
                            "America/Tortola",
                            "America/Vancouver",
                            "America/Whitehorse",
                            "America/Winnipeg",
                            "America/Yakutat",
                            "Antarctica/Casey",
                            "Antarctica/Davis",
                            "Antarctica/DumontDUrville",
                            "Antarctica/Macquarie",
                            "Antarctica/Mawson",
                            "Antarctica/McMurdo",
                            "Antarctica/Palmer",
                            "Antarctica/Rothera",
                            "Antarctica/Syowa",
                            "Antarctica/Troll",
                            "Antarctica/Vostok",
                            "Arctic/Longyearbyen",
                            "Asia/Aden",
                            "Asia/Almaty",
                            "Asia/Amman",
                            "Asia/Anadyr",
                            "Asia/Aqtau",
                            "Asia/Aqtobe",
                            "Asia/Ashgabat",
                            "Asia/Atyrau",
                            "Asia/Baghdad",
                            "Asia/Bahrain",
                            "Asia/Baku",
                            "Asia/Bangkok",
                            "Asia/Barnaul",
                            "Asia/Beirut",
                            "Asia/Bishkek",
                            "Asia/Brunei",
                            "Asia/Chita",
                            "Asia/Colombo",
                            "Asia/Damascus",
                            "Asia/Dhaka",
                            "Asia/Dili",
                            "Asia/Dubai",
                            "Asia/Dushanbe",
                            "Asia/Famagusta",
                            "Asia/Gaza",
                            "Asia/Hebron",
                            "Asia/Ho_Chi_Minh",
                            "Asia/Hong_Kong",
                            "Asia/Hovd",
                            "Asia/Irkutsk",
                            "Asia/Jakarta",
                            "Asia/Jayapura",
                            "Asia/Jerusalem",
                            "Asia/Kabul",
                            "Asia/Kamchatka",
                            "Asia/Karachi",
                            "Asia/Kathmandu",
                            "Asia/Khandyga",
                            "Asia/Kolkata",
                            "Asia/Krasnoyarsk",
                            "Asia/Kuala_Lumpur",
                            "Asia/Kuching",
                            "Asia/Kuwait",
                            "Asia/Macau",
                            "Asia/Magadan",
                            "Asia/Makassar",
                            "Asia/Manila",
                            "Asia/Muscat",
                            "Asia/Nicosia",
                            "Asia/Novokuznetsk",
                            "Asia/Novosibirsk",
                            "Asia/Omsk",
                            "Asia/Oral",
                            "Asia/Phnom_Penh",
                            "Asia/Pontianak",
                            "Asia/Pyongyang",
                            "Asia/Qatar",
                            "Asia/Qostanay",
                            "Asia/Qyzylorda",
                            "Asia/Riyadh",
                            "Asia/Sakhalin",
                            "Asia/Samarkand",
                            "Asia/Seoul",
                            "Asia/Shanghai",
                            "Asia/Singapore",
                            "Asia/Srednekolymsk",
                            "Asia/Taipei",
                            "Asia/Tashkent",
                            "Asia/Tbilisi",
                            "Asia/Tehran",
                            "Asia/Thimphu",
                            "Asia/Tokyo",
                            "Asia/Tomsk",
                            "Asia/Ulaanbaatar",
                            "Asia/Urumqi",
                            "Asia/Ust-Nera",
                            "Asia/Vientiane",
                            "Asia/Vladivostok",
                            "Asia/Yakutsk",
                            "Asia/Yangon",
                            "Asia/Yekaterinburg",
                            "Asia/Yerevan",
                            "Atlantic/Azores",
                            "Atlantic/Bermuda",
                            "Atlantic/Canary",
                            "Atlantic/Cape_Verde",
                            "Atlantic/Faroe",
                            "Atlantic/Madeira",
                            "Atlantic/Reykjavik",
                            "Atlantic/South_Georgia",
                            "Atlantic/St_Helena",
                            "Atlantic/Stanley",
                            "Australia/Adelaide",
                            "Australia/Brisbane",
                            "Australia/Broken_Hill",
                            "Australia/Darwin",
                            "Australia/Eucla",
                            "Australia/Hobart",
                            "Australia/Lindeman",
                            "Australia/Lord_Howe",
                            "Australia/Melbourne",
                            "Australia/Perth",
                            "Australia/Sydney",
                            "Canada/Atlantic",
                            "Canada/Central",
                            "Canada/Eastern",
                            "Canada/Mountain",
                            "Canada/Newfoundland",
                            "Canada/Pacific",
                            "Europe/Amsterdam",
                            "Europe/Andorra",
                            "Europe/Astrakhan",
                            "Europe/Athens",
                            "Europe/Belgrade",
                            "Europe/Berlin",
                            "Europe/Bratislava",
                            "Europe/Brussels",
                            "Europe/Bucharest",
                            "Europe/Budapest",
                            "Europe/Busingen",
                            "Europe/Chisinau",
                            "Europe/Copenhagen",
                            "Europe/Dublin",
                            "Europe/Gibraltar",
                            "Europe/Guernsey",
                            "Europe/Helsinki",
                            "Europe/Isle_of_Man",
                            "Europe/Istanbul",
                            "Europe/Jersey",
                            "Europe/Kaliningrad",
                            "Europe/Kirov",
                            "Europe/Kyiv",
                            "Europe/Lisbon",
                            "Europe/Ljubljana",
                            "Europe/London",
                            "Europe/Luxembourg",
                            "Europe/Madrid",
                            "Europe/Malta",
                            "Europe/Mariehamn",
                            "Europe/Minsk",
                            "Europe/Monaco",
                            "Europe/Moscow",
                            "Europe/Oslo",
                            "Europe/Paris",
                            "Europe/Podgorica",
                            "Europe/Prague",
                            "Europe/Riga",
                            "Europe/Rome",
                            "Europe/Samara",
                            "Europe/San_Marino",
                            "Europe/Sarajevo",
                            "Europe/Saratov",
                            "Europe/Simferopol",
                            "Europe/Skopje",
                            "Europe/Sofia",
                            "Europe/Stockholm",
                            "Europe/Tallinn",
                            "Europe/Tirane",
                            "Europe/Ulyanovsk",
                            "Europe/Vaduz",
                            "Europe/Vatican",
                            "Europe/Vienna",
                            "Europe/Vilnius",
                            "Europe/Volgograd",
                            "Europe/Warsaw",
                            "Europe/Zagreb",
                            "Europe/Zurich",
                            "GMT",
                            "Indian/Antananarivo",
                            "Indian/Chagos",
                            "Indian/Christmas",
                            "Indian/Cocos",
                            "Indian/Comoro",
                            "Indian/Kerguelen",
                            "Indian/Mahe",
                            "Indian/Maldives",
                            "Indian/Mauritius",
                            "Indian/Mayotte",
                            "Indian/Reunion",
                            "Pacific/Apia",
                            "Pacific/Auckland",
                            "Pacific/Bougainville",
                            "Pacific/Chatham",
                            "Pacific/Chuuk",
                            "Pacific/Easter",
                            "Pacific/Efate",
                            "Pacific/Fakaofo",
                            "Pacific/Fiji",
                            "Pacific/Funafuti",
                            "Pacific/Galapagos",
                            "Pacific/Gambier",
                            "Pacific/Guadalcanal",
                            "Pacific/Guam",
                            "Pacific/Honolulu",
                            "Pacific/Kanton",
                            "Pacific/Kiritimati",
                            "Pacific/Kosrae",
                            "Pacific/Kwajalein",
                            "Pacific/Majuro",
                            "Pacific/Marquesas",
                            "Pacific/Midway",
                            "Pacific/Nauru",
                            "Pacific/Niue",
                            "Pacific/Norfolk",
                            "Pacific/Noumea",
                            "Pacific/Pago_Pago",
                            "Pacific/Palau",
                            "Pacific/Pitcairn",
                            "Pacific/Pohnpei",
                            "Pacific/Port_Moresby",
                            "Pacific/Rarotonga",
                            "Pacific/Saipan",
                            "Pacific/Tahiti",
                            "Pacific/Tarawa",
                            "Pacific/Tongatapu",
                            "Pacific/Wake",
                            "Pacific/Wallis",
                            "US/Alaska",
                            "US/Arizona",
                            "US/Central",
                            "US/Eastern",
                            "US/Hawaii",
                            "US/Mountain",
                            "US/Pacific",
                            "UTC"
                        ]
                    }
                },
                {
                    "name": "tags",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Tags",
                        "description": "Comma-separated list of tags. Cannot be set on sessions attached to a multi-session event."
                    }
                }
            ]
        }
    },
    "lesson-progress": {
        "read": {
            "_type": "link",
            "url": "/v1/lesson-progress/{lesson_progress_id}",
            "action": "get",
            "description": "Get lesson progress details.",
            "fields": [
                {
                    "name": "lesson_progress_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/lesson-progress/{lesson_progress_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update for lesson progress.  PUT and PATCH are identical - both do partial updates. Setting finished_at\nindicates that the student has finished the content. This will also mark the lesson complete unless the lesson\nrequires validation, such as a review of proctoring. To un-complete the lesson, set completed_at to null.",
            "fields": [
                {
                    "name": "lesson_progress_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "finished_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Finished at",
                        "description": "ISO 8601 formatted datetime string indicating when the user finished the lesson content. Setting this field will also mark the lesson complete unless the lesson requires validation, such as a review of proctoring."
                    }
                },
                {
                    "name": "completed_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Completed at",
                        "description": "ISO 8601 formatted datetime string indicating when the user completed the lesson.  If null, the user has not completed the lesson."
                    }
                },
                {
                    "name": "success_status",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Success status",
                        "description": "'PASSED', 'FAILED' or null",
                        "enum": [
                            "PASSED",
                            "FAILED"
                        ]
                    }
                },
                {
                    "name": "score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Score",
                        "description": "Score received"
                    }
                },
                {
                    "name": "max_score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max score",
                        "description": "Max possible score"
                    }
                },
                {
                    "name": "custom_data",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Custom data",
                        "description": ""
                    }
                },
                {
                    "name": "validation_status",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Validation status",
                        "description": "'PASSED', 'FAILED' or null",
                        "enum": [
                            "PASSED",
                            "FAILED"
                        ]
                    }
                },
                {
                    "name": "validation_data",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Validation data",
                        "description": "JSON formatted. Ignored if the lesson does not require validation."
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/lesson-progress/{lesson_progress_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Partial update for lesson progress.  PUT and PATCH are identical - both do partial updates. Setting finished_at\nindicates that the student has finished the content. This will also mark the lesson complete unless the lesson\nrequires validation, such as a review of proctoring. To un-complete the lesson, set completed_at to null.",
            "fields": [
                {
                    "name": "lesson_progress_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "finished_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Finished at",
                        "description": "ISO 8601 formatted datetime string indicating when the user finished the lesson content. Setting this field will also mark the lesson complete unless the lesson requires validation, such as a review of proctoring."
                    }
                },
                {
                    "name": "completed_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Completed at",
                        "description": "ISO 8601 formatted datetime string indicating when the user completed the lesson.  If null, the user has not completed the lesson."
                    }
                },
                {
                    "name": "success_status",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Success status",
                        "description": "'PASSED', 'FAILED' or null",
                        "enum": [
                            "PASSED",
                            "FAILED"
                        ]
                    }
                },
                {
                    "name": "score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Score",
                        "description": "Score received"
                    }
                },
                {
                    "name": "max_score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max score",
                        "description": "Max possible score"
                    }
                },
                {
                    "name": "custom_data",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Custom data",
                        "description": ""
                    }
                },
                {
                    "name": "validation_status",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Validation status",
                        "description": "'PASSED', 'FAILED' or null",
                        "enum": [
                            "PASSED",
                            "FAILED"
                        ]
                    }
                },
                {
                    "name": "validation_data",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Validation data",
                        "description": "JSON formatted. Ignored if the lesson does not require validation."
                    }
                }
            ]
        }
    },
    "lessons": {
        "content-items": {
            "list": {
                "_type": "link",
                "url": "/v1/lessons/{lesson_id}/content-items",
                "action": "get",
                "description": "List method for the viewset",
                "fields": [
                    {
                        "name": "lesson_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "page_size",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page size",
                            "description": "Number of results to return per page."
                        }
                    }
                ]
            },
            "create": {
                "_type": "link",
                "url": "/v1/lessons/{lesson_id}/content-items",
                "action": "post",
                "encoding": "application/json",
                "description": "LessonContentItemViewSet",
                "fields": [
                    {
                        "name": "lesson_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_asset_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content asset id",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_html",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content html",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_quiz_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content quiz id",
                            "description": ""
                        }
                    },
                    {
                        "name": "header",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Header",
                            "description": ""
                        }
                    },
                    {
                        "name": "lesson_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Lesson id",
                            "description": ""
                        }
                    },
                    {
                        "name": "order",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "integer",
                            "title": "Order",
                            "description": ""
                        }
                    },
                    {
                        "name": "type",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "enum",
                            "title": "Type",
                            "description": "",
                            "enum": [
                                "ASSET",
                                "HTML",
                                "QUIZ"
                            ]
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/lessons/{lesson_id}/content-items/{id}",
                "action": "get",
                "description": "LessonContentItemViewSet",
                "fields": [
                    {
                        "name": "lesson_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            },
            "update": {
                "_type": "link",
                "url": "/v1/lessons/{lesson_id}/content-items/{id}",
                "action": "put",
                "encoding": "application/json",
                "description": "LessonContentItemViewSet",
                "fields": [
                    {
                        "name": "lesson_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_asset_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content asset id",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_html",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content html",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_quiz_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content quiz id",
                            "description": ""
                        }
                    },
                    {
                        "name": "header",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Header",
                            "description": ""
                        }
                    },
                    {
                        "name": "lesson_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Lesson id",
                            "description": ""
                        }
                    },
                    {
                        "name": "order",
                        "location": "form",
                        "schema": {
                            "_type": "integer",
                            "title": "Order",
                            "description": ""
                        }
                    },
                    {
                        "name": "type",
                        "location": "form",
                        "schema": {
                            "_type": "enum",
                            "title": "Type",
                            "description": "",
                            "enum": [
                                "ASSET",
                                "HTML",
                                "QUIZ"
                            ]
                        }
                    }
                ]
            },
            "partial_update": {
                "_type": "link",
                "url": "/v1/lessons/{lesson_id}/content-items/{id}",
                "action": "patch",
                "encoding": "application/json",
                "description": "LessonContentItemViewSet",
                "fields": [
                    {
                        "name": "lesson_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_asset_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content asset id",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_html",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content html",
                            "description": ""
                        }
                    },
                    {
                        "name": "content_quiz_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Content quiz id",
                            "description": ""
                        }
                    },
                    {
                        "name": "header",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Header",
                            "description": ""
                        }
                    },
                    {
                        "name": "lesson_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Lesson id",
                            "description": ""
                        }
                    },
                    {
                        "name": "order",
                        "location": "form",
                        "schema": {
                            "_type": "integer",
                            "title": "Order",
                            "description": ""
                        }
                    },
                    {
                        "name": "type",
                        "location": "form",
                        "schema": {
                            "_type": "enum",
                            "title": "Type",
                            "description": "",
                            "enum": [
                                "ASSET",
                                "HTML",
                                "QUIZ"
                            ]
                        }
                    }
                ]
            }
        },
        "list": {
            "_type": "link",
            "url": "/v1/lessons",
            "action": "get",
            "description": "List lessons within a specific course.\n\nExample response: \n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcdefg123456\",\n                \"content_asset_id\": null,\n                \"content_html\": \"\",\n                \"content_quiz_id\": null,\n                \"content_web_package_id\": null,\n                \"course_id\": \"cdefghi345678\",\n                \"description_html\": \"\",\n                \"display_fullscreen\": false,\n                \"optional\": false,\n                \"order\": 10,\n                \"search_keywords\": \"\",\n                \"time_seconds\": null,\n                \"title\": \"Example Lesson\",\n                \"tooltip_html\": \"\",\n                \"type\": \"HTML\"\n            }\n        ]\n    }",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "course_id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/lessons",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a new Lesson in a Course.",
            "fields": [
                {
                    "name": "content_asset_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content asset id",
                        "description": "Known as content_asset_id within the documentation"
                    }
                },
                {
                    "name": "content_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content html",
                        "description": ""
                    }
                },
                {
                    "name": "content_quiz_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content quiz id",
                        "description": "Known as content_quiz_id within the documentation"
                    }
                },
                {
                    "name": "content_web_package_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content web package id",
                        "description": "Known as content_web_package_id within the documentation"
                    }
                },
                {
                    "name": "course_id",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Course id",
                        "description": "Known as course_id within the documentation"
                    }
                },
                {
                    "name": "description_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Description html",
                        "description": ""
                    }
                },
                {
                    "name": "display_fullscreen",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Display fullscreen",
                        "description": ""
                    }
                },
                {
                    "name": "optional",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Optional",
                        "description": ""
                    }
                },
                {
                    "name": "order",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Order",
                        "description": ""
                    }
                },
                {
                    "name": "search_keywords",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Search keywords",
                        "description": ""
                    }
                },
                {
                    "name": "time_seconds",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Time seconds",
                        "description": ""
                    }
                },
                {
                    "name": "title",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Title",
                        "description": ""
                    }
                },
                {
                    "name": "tooltip_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Tooltip html",
                        "description": ""
                    }
                },
                {
                    "name": "type",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Type",
                        "description": "",
                        "enum": [
                            "ASSET",
                            "HTML",
                            "WEB_PACKAGE",
                            "QUIZ",
                            "VILT",
                            "MODULAR",
                            "SECTION"
                        ]
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/lessons/{id}",
            "action": "get",
            "description": "Get Lesson details.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "course_id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/lessons/{id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update lesson details. PUT and PATCH are identical - both do partial updates",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "content_asset_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content asset id",
                        "description": "Known as content_asset_id within the documentation"
                    }
                },
                {
                    "name": "content_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content html",
                        "description": ""
                    }
                },
                {
                    "name": "content_quiz_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content quiz id",
                        "description": "Known as content_quiz_id within the documentation"
                    }
                },
                {
                    "name": "content_web_package_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content web package id",
                        "description": "Known as content_web_package_id within the documentation"
                    }
                },
                {
                    "name": "course_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Course id",
                        "description": "Known as course_id within the documentation"
                    }
                },
                {
                    "name": "description_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Description html",
                        "description": ""
                    }
                },
                {
                    "name": "display_fullscreen",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Display fullscreen",
                        "description": ""
                    }
                },
                {
                    "name": "optional",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Optional",
                        "description": ""
                    }
                },
                {
                    "name": "order",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Order",
                        "description": ""
                    }
                },
                {
                    "name": "search_keywords",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Search keywords",
                        "description": ""
                    }
                },
                {
                    "name": "time_seconds",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Time seconds",
                        "description": ""
                    }
                },
                {
                    "name": "title",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Title",
                        "description": ""
                    }
                },
                {
                    "name": "tooltip_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Tooltip html",
                        "description": ""
                    }
                },
                {
                    "name": "type",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Type",
                        "description": "",
                        "enum": [
                            "ASSET",
                            "HTML",
                            "WEB_PACKAGE",
                            "QUIZ",
                            "VILT",
                            "MODULAR",
                            "SECTION"
                        ]
                    }
                },
                {
                    "name": "course_id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/lessons/{id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update lesson details. PUT and PATCH are identical - both do partial updates",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "content_asset_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content asset id",
                        "description": "Known as content_asset_id within the documentation"
                    }
                },
                {
                    "name": "content_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content html",
                        "description": ""
                    }
                },
                {
                    "name": "content_quiz_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content quiz id",
                        "description": "Known as content_quiz_id within the documentation"
                    }
                },
                {
                    "name": "content_web_package_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content web package id",
                        "description": "Known as content_web_package_id within the documentation"
                    }
                },
                {
                    "name": "course_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Course id",
                        "description": "Known as course_id within the documentation"
                    }
                },
                {
                    "name": "description_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Description html",
                        "description": ""
                    }
                },
                {
                    "name": "display_fullscreen",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Display fullscreen",
                        "description": ""
                    }
                },
                {
                    "name": "optional",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Optional",
                        "description": ""
                    }
                },
                {
                    "name": "order",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Order",
                        "description": ""
                    }
                },
                {
                    "name": "search_keywords",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Search keywords",
                        "description": ""
                    }
                },
                {
                    "name": "time_seconds",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Time seconds",
                        "description": ""
                    }
                },
                {
                    "name": "title",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Title",
                        "description": ""
                    }
                },
                {
                    "name": "tooltip_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Tooltip html",
                        "description": ""
                    }
                },
                {
                    "name": "type",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Type",
                        "description": "",
                        "enum": [
                            "ASSET",
                            "HTML",
                            "WEB_PACKAGE",
                            "QUIZ",
                            "VILT",
                            "MODULAR",
                            "SECTION"
                        ]
                    }
                },
                {
                    "name": "course_id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "offers": {
        "list": {
            "_type": "link",
            "url": "/v1/offers",
            "action": "get",
            "description": "List Offers.  Returns a paginated list (1000 results per page) based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/offers/{offer_id}",
            "action": "get",
            "description": "Get Offer details",
            "fields": [
                {
                    "name": "offer_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "paths": {
        "path-items": {
            "list": {
                "_type": "link",
                "url": "/v1/paths/{path_id}/path-items",
                "action": "get",
                "description": "Returns a list of Path Item objects\n\nExample Response:\n{\n    \"count\": 1,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        {\n            \"id\": \"qwerty1234\",\n            \"slug\": \"test-path-1\",\n            \"course\": {\n                \"id\": \"abcdefg1234\",\n                \"title\": \"Test Path Course 1\",\n                \"lesson_count\": 3,\n                \"required_lesson_count\": 3\n            }\n        }\n    ]\n}",
                "fields": [
                    {
                        "name": "path_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/paths/{path_id}/path-items/{id}",
                "action": "get",
                "description": "Returns a single Path Item object and its details",
                "fields": [
                    {
                        "name": "path_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "list": {
            "_type": "link",
            "url": "/v1/paths",
            "action": "get",
            "description": "List Paths. Returns a paginated list (100 results per page) based upon the filters supplied.\n\nExample Response:\n{\n    \"count\": 1,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        \"path\": {\n            \"id\": \"cdefghi345678\",\n            \"title\": \"Example Path Title\",\n            \"path_item_count\": 0\n        }\n    ]\n}",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/paths/{id}",
            "action": "get",
            "description": "Get Path details.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "ping": {
        "list": {
            "_type": "link",
            "url": "/v1/ping",
            "action": "get",
            "description": "Ping the API endpoint.  HTTP 2xx responses indicate a successful authentication with the Skilljar API endpoint."
        }
    },
    "progresstokens": {
        "update": {
            "_type": "link",
            "url": "/v1/progresstokens/{progress_token_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update the progress based on the given progress token. May update the corresponding lesson progress for\nthe user, and update course status if this action completes the course.",
            "fields": [
                {
                    "name": "progress_token_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "completed_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Completed at",
                        "description": "ISO 8601 formatted datetime string indicating when the user completed the task"
                    }
                },
                {
                    "name": "success_status",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Success status",
                        "description": "",
                        "enum": [
                            "PASSED",
                            "FAILED"
                        ]
                    }
                },
                {
                    "name": "score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Score",
                        "description": "Score received"
                    }
                },
                {
                    "name": "max_score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max score",
                        "description": "Max possible score"
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/progresstokens/{progress_token_id}",
            "action": "patch",
            "encoding": "application/json",
            "fields": [
                {
                    "name": "progress_token_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "completed_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Completed at",
                        "description": "ISO 8601 formatted datetime string indicating when the user completed the task"
                    }
                },
                {
                    "name": "success_status",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Success status",
                        "description": "",
                        "enum": [
                            "PASSED",
                            "FAILED"
                        ]
                    }
                },
                {
                    "name": "score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Score",
                        "description": "Score received"
                    }
                },
                {
                    "name": "max_score",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max score",
                        "description": "Max possible score"
                    }
                }
            ]
        }
    },
    "promo-code-pools": {
        "offers": {
            "list": {
                "_type": "link",
                "url": "/v1/promo-code-pools/{promo_code_pool_id}/offers",
                "action": "get",
                "description": "List PromoCodePoolOffers.  Returns a paginated list (1000 results per page) based upon the filters supplied.",
                "fields": [
                    {
                        "name": "promo_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    },
                    {
                        "name": "page_size",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page size",
                            "description": "Number of results to return per page."
                        }
                    }
                ]
            },
            "create": {
                "_type": "link",
                "url": "/v1/promo-code-pools/{promo_code_pool_id}/offers",
                "action": "post",
                "encoding": "application/json",
                "description": "Attach an Offer to a PromoCodePool. There is a limit of 500 offers that can be added to a PromoCodePool per transaction.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"id\": \"abcde12345\"\n    }\n\n    Or\n\n    [\n        {\"id\": \"bcdef23456\"},\n        {\"id\": \"cdefg34567\"},\n        {\"id\": \"defgh45678\"},\n        {\"id\": \"efghi56789\"}\n    ]",
                "fields": [
                    {
                        "name": "promo_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Id",
                            "description": "Offer ID you wish to attach to a PromoCodePool"
                        }
                    }
                ]
            },
            "delete": {
                "_type": "link",
                "url": "/v1/promo-code-pools/{promo_code_pool_id}/offers/{offer_id}",
                "action": "delete",
                "description": "Removes an Offer from a PromoCodePool. Does not delete the Offer or PromoCodePool",
                "fields": [
                    {
                        "name": "promo_code_pool_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "offer_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "list": {
            "_type": "link",
            "url": "/v1/promo-code-pools",
            "action": "get",
            "description": "List PromoCodePools.  Returns a paginated list (1000 results per page) based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "offer_id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by the id of a Offer"
                    }
                },
                {
                    "name": "name",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by PromoCodePool name"
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/promo-code-pools",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a PromoCodePool\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"name\": \"promo-code-pool-name-1\",\n        \"active\": true,\n        \"discount_type\": \"PERCENT_OFF\",\n        \"percent_off\": 100,\n        \"single_use_per_user\": false,\n        \"starts_at\": \"2018-03-16T16:45:55.946094Z\",\n        \"expires_at\": \"2018-10-16T16:45:55.946094Z\",\n    }\n\n    Or\n\n    {\n        \"name\": \"promo-code-pool-name-1\",\n        \"active\": true,\n        \"discount_type\": \"PRICE_OVERRIDE\",\n        \"price_cents\": 5000,\n        \"single_use_per_user\": false,\n        \"starts_at\": \"2018-03-16T16:45:55.946094Z\",\n        \"expires_at\": \"2018-10-16T16:45:55.946094Z\",\n    }",
            "fields": [
                {
                    "name": "name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                },
                {
                    "name": "starts_at",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Starts at",
                        "description": "ISO 8601 formatted datetime string indicating the start of the promo code pool"
                    }
                },
                {
                    "name": "expires_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Expires at",
                        "description": "ISO 8601 formatted datetime string indicating the expiration of the promo code pool"
                    }
                },
                {
                    "name": "expire_content",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Expire content",
                        "description": ""
                    }
                },
                {
                    "name": "discount_type",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Discount type",
                        "description": "",
                        "enum": [
                            "PRICE_OVERRIDE",
                            "PERCENT_OFF"
                        ]
                    }
                },
                {
                    "name": "price_cents",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Price cents",
                        "description": ""
                    }
                },
                {
                    "name": "percent_off",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Percent off",
                        "description": ""
                    }
                },
                {
                    "name": "single_use_per_user",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Single use per user",
                        "description": ""
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/promo-code-pools/{promo_code_pool_id}",
            "action": "get",
            "description": "Get PromoCodePool details",
            "fields": [
                {
                    "name": "promo_code_pool_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/promo-code-pools/{promo_code_pool_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update for promo-code-pools.",
            "fields": [
                {
                    "name": "promo_code_pool_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                },
                {
                    "name": "starts_at",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Starts at",
                        "description": ""
                    }
                },
                {
                    "name": "expires_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Expires at",
                        "description": "ISO 8601 formatted datetime string indicating the expiration of the promo code pool"
                    }
                },
                {
                    "name": "expire_content",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Expire content",
                        "description": ""
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/promo-code-pools/{promo_code_pool_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update for promo-code-pools. PUT and PATCH are identical - both do partial updates",
            "fields": [
                {
                    "name": "promo_code_pool_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "name",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                },
                {
                    "name": "starts_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Starts at",
                        "description": ""
                    }
                },
                {
                    "name": "expires_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Expires at",
                        "description": "ISO 8601 formatted datetime string indicating the expiration of the promo code pool"
                    }
                },
                {
                    "name": "expire_content",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Expire content",
                        "description": ""
                    }
                }
            ]
        },
        "delete": {
            "_type": "link",
            "url": "/v1/promo-code-pools/{promo_code_pool_id}",
            "action": "delete",
            "description": "Deletes a PromoCodePool record. As a result, the associated PromoCode will also be deleted.\nAny purchases that used the previously associated PromoCode will now be updated to have a null value for code_used.\nThis action cannot be undone.",
            "fields": [
                {
                    "name": "promo_code_pool_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "promo-codes": {
        "list": {
            "_type": "link",
            "url": "/v1/promo-codes",
            "action": "get",
            "description": "List PromoCodes.  Returns a paginated list (1000 results per page) based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "promo_code_pool_id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by the id of a Offer"
                    }
                },
                {
                    "name": "code",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by the code used - case sensitive"
                    }
                },
                {
                    "name": "active",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by active (true or false)"
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/promo-codes",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a PromoCode.\nA PromoCodePool must exist before attempting to post to this endpoint.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"code\": \"6hhzj2ea-v5j3ak3d\",\n        \"max_uses\": 30,\n        \"active\": true,\n        \"promo_code_pool_id\": \"9uips0sdja\",\n    }",
            "fields": [
                {
                    "name": "code",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Code",
                        "description": ""
                    }
                },
                {
                    "name": "max_uses",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max uses",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                },
                {
                    "name": "promo_code_pool_id",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Promo code pool id",
                        "description": ""
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/promo-codes/{promo_code_id}",
            "action": "get",
            "description": "Get PromoCode details",
            "fields": [
                {
                    "name": "promo_code_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/promo-codes/{promo_code_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update for promo-codes. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "promo_code_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "code",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Code",
                        "description": ""
                    }
                },
                {
                    "name": "max_uses",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max uses",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/promo-codes/{promo_code_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update for promo-codes. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "promo_code_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "code",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Code",
                        "description": ""
                    }
                },
                {
                    "name": "max_uses",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max uses",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                }
            ]
        },
        "delete": {
            "_type": "link",
            "url": "/v1/promo-codes/{promo_code_id}",
            "action": "delete",
            "description": "Deletes a PromoCode record. This action cannot be undone.",
            "fields": [
                {
                    "name": "promo_code_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "purchases": {
        "read": {
            "_type": "link",
            "url": "/v1/purchases/{purchase_id}",
            "action": "get",
            "encoding": "application/JSON",
            "description": "Get purchase details.",
            "fields": [
                {
                    "name": "purchase_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "purchase_id",
                        "description": "ID of a Purchase object"
                    }
                },
                {
                    "name": "id",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "id",
                        "description": "(Internal) ID of the Purchase object"
                    }
                },
                {
                    "name": "user",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "user",
                        "description": "User object that made the Purchase object"
                    }
                },
                {
                    "name": "status_msg",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "status_msg",
                        "description": "Status message if the payment for the Purchase failed"
                    }
                },
                {
                    "name": "purchased_at",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "purchased_at",
                        "description": "Date the Purchase object was created"
                    }
                },
                {
                    "name": "refunded_at",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "refunded_at",
                        "description": "Date (if) the Purchase objected was refunded"
                    }
                },
                {
                    "name": "refund_cents",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "refund_cents",
                        "description": "Amount (if) the Purchase objected was refunded"
                    }
                },
                {
                    "name": "payment_processor",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "payment_processor",
                        "description": "Payment processor used"
                    }
                },
                {
                    "name": "order_id",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "order_id",
                        "description": "A unique order ID for the Purchase"
                    }
                },
                {
                    "name": "price_cents",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "price_cents",
                        "description": "Price (in cents) of the Purchase made"
                    }
                },
                {
                    "name": "quantity",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "quantity",
                        "description": "Amount of items purchased"
                    }
                },
                {
                    "name": "offer_id",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "offer_id",
                        "description": "(Internal) ID of the Offer purchased"
                    }
                },
                {
                    "name": "offer_sku",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "offer_sku",
                        "description": "(Internal) SKU of the Offer purchased"
                    }
                },
                {
                    "name": "offer_description",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "offer_description",
                        "description": "Description of the Offer purchased"
                    }
                },
                {
                    "name": "offer_price_cents",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "offer_price_cents",
                        "description": "Price (in cents) of the Offer purchased"
                    }
                },
                {
                    "name": "promo_code_price_cents",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "promo_code_price_cents",
                        "description": "Price (in cents) of the PromoCode used"
                    }
                },
                {
                    "name": "promo_code_percent_off",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "promo_code_percent_off",
                        "description": "Percentage the PromoCode discounted"
                    }
                },
                {
                    "name": "promo_code_quantity",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "promo_code_quantity",
                        "description": "Amount of PromoCodes used"
                    }
                },
                {
                    "name": "tax_price_cents",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "tax_price_cents",
                        "description": "Price (in cents) of local tax on the Purchase"
                    }
                },
                {
                    "name": "payment_processor_order_id",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "payment_processor_order_id",
                        "description": "ID for the payment processor used"
                    }
                },
                {
                    "name": "payment_processor_response_data",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "payment_processor_response_data",
                        "description": "Response from the payment processor used"
                    }
                },
                {
                    "name": "currency_code",
                    "location": "response_object",
                    "schema": {
                        "_type": "string",
                        "title": "currency_code",
                        "description": "Type of currency used for the Purchase"
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/purchases/{purchase_id}",
            "action": "put",
            "encoding": "application/JSON",
            "description": "Update purchase details. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "purchase_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "state",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "State",
                        "description": "'PENDING', 'SUCCESS', 'FAILED', 'REFUNDED', or 'CANCELLED'",
                        "enum": [
                            "PENDING",
                            "SUCCESS",
                            "FAILED",
                            "REFUNDED",
                            "CANCELLED"
                        ]
                    }
                },
                {
                    "name": "refunded_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Refunded at",
                        "description": ""
                    }
                },
                {
                    "name": "refund_cents",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Refund cents",
                        "description": ""
                    }
                },
                {
                    "name": "price_cents",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Price cents",
                        "description": ""
                    }
                },
                {
                    "name": "tax_price_cents",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Tax price cents",
                        "description": ""
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/purchases/{purchase_id}",
            "action": "patch",
            "encoding": "application/JSON",
            "description": "Update purchase details. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "purchase_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "state",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "State",
                        "description": "'PENDING', 'SUCCESS', 'FAILED', 'REFUNDED', or 'CANCELLED'",
                        "enum": [
                            "PENDING",
                            "SUCCESS",
                            "FAILED",
                            "REFUNDED",
                            "CANCELLED"
                        ]
                    }
                },
                {
                    "name": "refunded_at",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Refunded at",
                        "description": ""
                    }
                },
                {
                    "name": "refund_cents",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Refund cents",
                        "description": ""
                    }
                },
                {
                    "name": "price_cents",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Price cents",
                        "description": ""
                    }
                },
                {
                    "name": "tax_price_cents",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Tax price cents",
                        "description": ""
                    }
                }
            ]
        },
        "fulfill": {
            "_type": "link",
            "url": "/v1/purchases/{purchase_id}/fulfill",
            "action": "post",
            "encoding": "application/JSON",
            "description": "Fulfill specific purchase. Updates the purchase state, and if \"SUCCESS\", fulfills the purchase,\ncreating any necessary course or domain registrations.",
            "fields": [
                {
                    "name": "purchase_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "state",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "State",
                        "description": "'SUCCESS', 'FAILED', or 'CANCELLED'",
                        "enum": [
                            "SUCCESS",
                            "FAILED",
                            "CANCELLED"
                        ]
                    }
                },
                {
                    "name": "error_msg",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Error msg",
                        "description": "Optional: This error message will be presented to the user after they return to Skilljar, and will be set as the status_msg on the Purchase"
                    }
                },
                {
                    "name": "payment_processor_order_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Payment processor order id",
                        "description": "Optional: The id of the transaction within the payment processor system, for reference only"
                    }
                },
                {
                    "name": "payment_processor_response_data",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Payment processor response data",
                        "description": "Optional: Purchase metadata. For reference only. JSON format is recommended"
                    }
                }
            ]
        }
    },
    "question-banks": {
        "list": {
            "_type": "link",
            "url": "/v1/question-banks",
            "action": "get",
            "description": "List all question banks. Returns a paginated list (defaults to 1000 results per page).",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/question-banks",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a question bank.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"name\": \"Question Bank 1\"\n    }",
            "fields": [
                {
                    "name": "name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": "The name of the question bank."
                    }
                }
            ]
        }
    },
    "quiz-questions": {
        "create": {
            "_type": "link",
            "url": "/v1/quiz-questions",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a quiz question.\n\nEither an existing quiz or question bank must be passed to this endpoint.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"quiz\": \"xxxxxxxxxx\",\n        \"html\": \"<p>What is the answer to life, the universe, and everything?</p>\",\n        \"type\": \"MULTIPLE_CHOICE\",\n        \"answers\": [\n            {\"answer_text\": \"42\", \"correct\": true},\n            {\"answer_text\": \"33\", \"correct\": false}\n        ]\n    }",
            "fields": [
                {
                    "name": "quiz",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Quiz",
                        "description": "The quiz that this question belongs to. It is required to set either this or <code>quiz_question_bank</code>."
                    }
                },
                {
                    "name": "quiz_question_bank",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Quiz question bank",
                        "description": "The question bank that this question belongs to. It is required to set either this or <code>quiz</code>."
                    }
                },
                {
                    "name": "html",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Html",
                        "description": "The HTML content of the question."
                    }
                },
                {
                    "name": "type",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Type",
                        "description": "The type of question to create. Can be: MULTIPLE_CHOICE, MULTIPLE_ANSWER, FILL_IN_THE_BLANK, FREEFORM.",
                        "enum": [
                            "MULTIPLE_CHOICE",
                            "MULTIPLE_ANSWER",
                            "FILL_IN_THE_BLANK",
                            "FREEFORM"
                        ]
                    }
                },
                {
                    "name": "requires_manual_grading",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Requires manual grading",
                        "description": "If checked for any question on the quiz, student responses for the corresponding quiz must be manually graded by a dashboard user."
                    }
                },
                {
                    "name": "case_sensitive",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Case sensitive",
                        "description": "If true, student responses must match the case of the answer to be correct. This only impacts FILL_IN_THE_BLANK questions."
                    }
                },
                {
                    "name": "correct_answer_feedback_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Correct answer feedback html",
                        "description": "The feedback to display if the student answers the question correctly."
                    }
                },
                {
                    "name": "incorrect_answer_feedback_html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Incorrect answer feedback html",
                        "description": "The feedback to display if the student answers the question incorrectly."
                    }
                },
                {
                    "name": "answers",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Answers",
                        "description": "The answers for the question. This is required for MULTIPLE_CHOICE, MULTIPLE_ANSWER, and FILL_IN_THE_BLANK questions.<br><br>Example:<pre><code>[\n\t{\"answer_text\": \"Correct answer\", \"correct\": true},\n\t{\"answer_text\": \"Incorrect answer\", \"correct\": false},\n\t{\"answer_text\": \"Second incorrect answer\", \"correct\": false}\n]</pre></code>"
                    }
                }
            ]
        }
    },
    "quizzes": {
        "list": {
            "_type": "link",
            "url": "/v1/quizzes",
            "action": "get",
            "description": "List all quizzes. Returns a paginated list (defaults to 1000 results per page).",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "name",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter Quizzes by quiz name - Case sensitive and exact match"
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/quizzes",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a quiz.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"name\": \"Quiz 1\",\n        \"html\": \"<p>This quiz covers the content from <b>lessons 1, 2, and 3</b>.</p>\",\n        \"passing_percentage_correct\": 75,\n        \"show_results_on_failure\": true,\n        \"max_attempts\": 3,\n        \"randomize_questions\": true\n    }",
            "fields": [
                {
                    "name": "name",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Name",
                        "description": "The name of the quiz."
                    }
                },
                {
                    "name": "html",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Html",
                        "description": "The HTML content of the quiz."
                    }
                },
                {
                    "name": "passing_percentage_correct",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Passing percentage correct",
                        "description": "Percentage needed to mark quiz as passing."
                    }
                },
                {
                    "name": "show_results_on_failure",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Show results on failure",
                        "description": "If set, students who fail the quiz will be able to see the answers they submitted as well as the correct / incorrect status and feedback for each question. Correct answers will not be displayed.  (Students who pass the quiz are shown correct / incorrect status, feedback, and correct answers by default.)"
                    }
                },
                {
                    "name": "max_attempts",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Max attempts",
                        "description": "By default (0), there is no limit to how many times a student may take the quiz."
                    }
                },
                {
                    "name": "require_correct_response",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Require correct response",
                        "description": "If set, the student must answer each question correctly in order to proceed to the next question. When set, there is no limit to the number of attempts to answer the question correctly."
                    }
                },
                {
                    "name": "randomize_questions",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Randomize questions",
                        "description": "If set, the student will receive questions in a random order."
                    }
                },
                {
                    "name": "limit_question_count",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Limit question count",
                        "description": "By default (0), the student will have to answer every question below. Otherwise, they will receive this many questions selected at random."
                    }
                },
                {
                    "name": "randomize_answers",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Randomize answers",
                        "description": "If set, the student will receive question answers in a random order (this applies to every question on the quiz)."
                    }
                },
                {
                    "name": "time_limit_seconds",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Time limit seconds",
                        "description": "Set a time limit on the quiz. If left blank, students will have unlimited time to complete the quiz."
                    }
                },
                {
                    "name": "show_question_feedback",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Show question feedback",
                        "description": "If set, students will be able to receive feedback for correct / incorrect answers on their quiz for automatically graded questions (multiple choice, multiple answer, and fill in the blank questions.) If unchecked, all feedback entered previously will be deleted."
                    }
                }
            ]
        }
    },
    "training-credit-codes": {
        "list": {
            "_type": "link",
            "url": "/v1/training-credit-codes",
            "action": "get",
            "description": "List Training-Credit Codes.  Returns a paginated list (1000 results per page) based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "tracking_identifier",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by tracking_identifier"
                    }
                },
                {
                    "name": "training_credit_code",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by training credit code name"
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/training-credit-codes",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a training credit code.",
            "fields": [
                {
                    "name": "training_credit_code",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Training credit code",
                        "description": "String used by Learners to apply Training Credit balance on the course platform and purchase Training content."
                    }
                },
                {
                    "name": "credits_total",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Credits total",
                        "description": "Total number of credits stored on this code."
                    }
                },
                {
                    "name": "expiration_date",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Expiration date",
                        "description": "ISO 8601 formatted datetime string indicating the expiration of the training credit code"
                    }
                },
                {
                    "name": "expire_content",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Expire content",
                        "description": "If true, when this code is used, learners will lose access to content when the code expires."
                    }
                },
                {
                    "name": "tracking_identifier",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Tracking identifier",
                        "description": "Custom string for teams to identify codes in Financial/reporting tools. Is not used by Skilljar."
                    }
                },
                {
                    "name": "available_to_all_students",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Available to all students",
                        "description": "Set to \"true\" if all learners should be able to use this credit code."
                    }
                },
                {
                    "name": "student_groups",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Student groups",
                        "description": "Required if the above option is \"false\". Use this format to include student_group ids: [\"2d4EXAMPLE0ea32j\", \"2d4EXAMPLE20esh5y\"]"
                    }
                },
                {
                    "name": "available_for_all_offers",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Available for all offers",
                        "description": "Set to \"true\" if this credit code should be available for all existing and future offers that have credit value."
                    }
                },
                {
                    "name": "offers",
                    "location": "form",
                    "schema": {
                        "_type": "array",
                        "title": "Offers",
                        "description": "Required if the above option is \"false\". Use this format to include offer_ids: [\"2d4EXAMPLE0ea32j\", \"2d4EXAMPLE20esh5y\"]"
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/training-credit-codes/{training_credit_code_id}",
            "action": "get",
            "description": "Get single tcc details.",
            "fields": [
                {
                    "name": "training_credit_code_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/training-credit-codes/{training_credit_code_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update a training credit code.",
            "fields": [
                {
                    "name": "training_credit_code_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "credits_total",
                    "location": "form",
                    "schema": {
                        "_type": "integer",
                        "title": "Credits total",
                        "description": ""
                    }
                },
                {
                    "name": "expiration_date",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Expiration date",
                        "description": "ISO 8601 formatted datetime string indicating the expiration of the training credit code"
                    }
                },
                {
                    "name": "expire_content",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Expire content",
                        "description": "If true, when this code is used, learners will lose access to content when the code expires."
                    }
                },
                {
                    "name": "tracking_identifier",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Tracking identifier",
                        "description": "Custom string for teams to identify codes in Financial/reporting tools. Is not used by Skilljar."
                    }
                },
                {
                    "name": "available_to_all_students",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Available to all students",
                        "description": "Set to \"true\" if all learners should be able to use this credit code."
                    }
                },
                {
                    "name": "student_groups",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Student groups",
                        "description": "Required if the above option is \"false\". Use this format to add or remove student_group ids - Add resolves first, then Remove: { \"add\": [\"2d4EXAMPLE0ea32j\", \"2d4EXAMPLE20esh5y\"], \"remove\": [\"9k4EXAMPLE20h5ysK\"] }"
                    }
                },
                {
                    "name": "available_for_all_offers",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Available for all offers",
                        "description": "Set to \"true\" if this credit code should be available for all existing and future offers that have credit value."
                    }
                },
                {
                    "name": "offers",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Offers",
                        "description": "Required if the above option is \"false\". Use this format to add or remove offer_ids - Add resolves first, then Remove: { \"add\": [\"2d4EXAMPLE0ea32j\", \"2d4EXAMPLE20esh5y\"], \"remove\": [\"9k4EXAMPLE20h5ysK\"] }"
                    }
                }
            ]
        }
    },
    "users": {
        "groups": {
            "list": {
                "_type": "link",
                "url": "/v1/users/{user_id}/groups",
                "action": "get",
                "description": "List groups of which a user is a member.",
                "fields": [
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            }
        },
        "plan-enrollments": {
            "list": {
                "_type": "link",
                "url": "/v1/users/{user_id}/plan-enrollments",
                "action": "get",
                "description": "List Plan enrollments for a user. Returns a paginated list (1000 results per page) of plan enrollment details for a user.",
                "fields": [
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            }
        },
        "published-courses": {
            "lessons": {
                "list": {
                    "_type": "link",
                    "url": "/v1/users/{user_id}/published-courses/{published_course_id}/lessons",
                    "action": "get",
                    "description": "List lessons with progress details for a user in a particular course.  Returns a paginated list (100 results\nper page) of lesson progress details for a user.",
                    "fields": [
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "page",
                            "location": "query",
                            "schema": {
                                "_type": "integer",
                                "title": "Page",
                                "description": "A page number within the paginated result set."
                            }
                        }
                    ]
                },
                "read": {
                    "_type": "link",
                    "url": "/v1/users/{user_id}/published-courses/{published_course_id}/lessons/{lesson_id}",
                    "action": "get",
                    "description": "Get lesson progress details for a user.",
                    "fields": [
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "lesson_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        }
                    ]
                },
                "update": {
                    "_type": "link",
                    "url": "/v1/users/{user_id}/published-courses/{published_course_id}/lessons/{lesson_id}",
                    "action": "put",
                    "encoding": "application/json",
                    "description": "Update lesson progress for a user.  PUT and PATCH are identical - both do partial updates.  To mark a lesson as complete, you\nonly need to set the completed_at within the lesson progress.\n\nFor example:\n\n    {\n        \"lesson_progress\": {\n            \"completed_at\": \"2015-06-03T01:02:03.012345Z\"\n        }\n    }",
                    "fields": [
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "lesson_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "lesson_progress",
                            "required": true,
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "Lesson progress",
                                "description": ""
                            }
                        }
                    ]
                },
                "partial_update": {
                    "_type": "link",
                    "url": "/v1/users/{user_id}/published-courses/{published_course_id}/lessons/{lesson_id}",
                    "action": "patch",
                    "encoding": "application/json",
                    "description": "Partial update lesson progress for a user.  PUT and PATCH are identical - both do partial updates.  To mark a lesson as complete,\nyou only need to set the completed_at within the lesson progress.\n\nFor example:\n\n    {\n        \"lesson_progress\": {\n            \"completed_at\": \"2015-06-03T01:02:03.012345Z\"\n        }\n    }",
                    "fields": [
                        {
                            "name": "user_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "published_course_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "lesson_id",
                            "required": true,
                            "location": "path",
                            "schema": {
                                "_type": "string",
                                "title": "",
                                "description": ""
                            }
                        },
                        {
                            "name": "lesson_progress",
                            "location": "form",
                            "schema": {
                                "_type": "object",
                                "title": "Lesson progress",
                                "description": ""
                            }
                        }
                    ]
                }
            },
            "list": {
                "_type": "link",
                "url": "/v1/users/{user_id}/published-courses",
                "action": "get",
                "description": "List published courses with progress details for a user.  Returns a paginated list (1000 results per page) of\ncourse progress details for a user.",
                "fields": [
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            },
            "read": {
                "_type": "link",
                "url": "/v1/users/{user_id}/published-courses/{published_course_id}",
                "action": "get",
                "description": "Get course progress details for a user.",
                "fields": [
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "published_course_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            },
            "update": {
                "_type": "link",
                "url": "/v1/users/{user_id}/published-courses/{published_course_id}",
                "action": "put",
                "encoding": "application/json",
                "description": "Update course progress for a user.  PUT and PATCH are identical - both do partial updates.  To mark a course as complete, you\nonly need to set the completed_at within the course progress.\n\nFor example:\n\n    {\n        \"course_progress\": {\n            \"completed_at\": \"2015-06-03T01:02:03.012345Z\",\n            \"success_status\": \"PASSED\"\n        }\n    }",
                "fields": [
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "published_course_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "published_course_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Published course id",
                            "description": "ID of the PublishedCourse"
                        }
                    },
                    {
                        "name": "course_progress",
                        "required": true,
                        "location": "form",
                        "schema": {
                            "_type": "object",
                            "title": "Course progress",
                            "description": ""
                        }
                    }
                ]
            },
            "partial_update": {
                "_type": "link",
                "url": "/v1/users/{user_id}/published-courses/{published_course_id}",
                "action": "patch",
                "encoding": "application/json",
                "description": "Partial update course progress for a user.  PUT and PATCH are identical - both do partial updates.  To mark a course as complete,\nyou only need to set the completed_at within the course progress.\n\nFor example:\n\n    {\n        \"course_progress\": {\n            \"completed_at\": \"2015-06-03T01:02:03.012345Z\",\n            \"success_status\": \"PASSED\"\n        }\n    }",
                "fields": [
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "published_course_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "published_course_id",
                        "location": "form",
                        "schema": {
                            "_type": "string",
                            "title": "Published course id",
                            "description": "ID of the PublishedCourse"
                        }
                    },
                    {
                        "name": "course_progress",
                        "location": "form",
                        "schema": {
                            "_type": "object",
                            "title": "Course progress",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "published-path-enrollments": {
            "list": {
                "_type": "link",
                "url": "/v1/users/{user_id}/published-path-enrollments",
                "action": "get",
                "description": "List Learning Path enrollments for a user. Returns a paginated list (1000 results per page)\nof Path and Path Progress details for a user.",
                "fields": [
                    {
                        "name": "user_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    },
                    {
                        "name": "page",
                        "location": "query",
                        "schema": {
                            "_type": "integer",
                            "title": "Page",
                            "description": "A page number within the paginated result set."
                        }
                    }
                ]
            }
        },
        "list": {
            "_type": "link",
            "url": "/v1/users",
            "action": "get",
            "description": "List users who have registered on at least one domain.  Returns a paginated list (1000 results per page) of\nusers.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "email",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter users by email address"
                    }
                },
                {
                    "name": "first_name",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter users by first name - case sensitive"
                    }
                },
                {
                    "name": "last_name",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter users by last name - case sensitive"
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/users/{user_id}",
            "action": "get",
            "description": "Get user's course registration overview.",
            "fields": [
                {
                    "name": "user_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/users/{user_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update for user details. Only name and email address may be changed. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "user_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "email",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Email address",
                        "description": "Email address"
                    }
                },
                {
                    "name": "first_name",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "First name",
                        "description": "First name"
                    }
                },
                {
                    "name": "last_name",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Last name",
                        "description": "Last name"
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/users/{user_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Partial update for user details. Only name and email address may be changed.\nPUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "user_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "email",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Email address",
                        "description": "Email address"
                    }
                },
                {
                    "name": "first_name",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "First name",
                        "description": "First name"
                    }
                },
                {
                    "name": "last_name",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Last name",
                        "description": "Last name"
                    }
                }
            ]
        },
        "anonymize": {
            "_type": "link",
            "url": "/v1/users/{user_id}/anonymize",
            "action": "post",
            "description": "Obfuscate all data that could be used to identify the user, either directly, or indirectly.\n\nThis will permanently update the user, deleting sensitive information and preventing\nfuture usage of the platform. This action is not reversible.",
            "fields": [
                {
                    "name": "user_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "vilt-session-events": {
        "list": {
            "_type": "link",
            "url": "/v1/vilt-session-events",
            "action": "get",
            "description": "List ViltSessionEvents.  Returns a paginated list based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "session__lesson__course__id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter ViltSessionEvents by exact match of a Course ID"
                    }
                },
                {
                    "name": "session__lesson__id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter ViltSessionEvents by exact match of a Lesson ID"
                    }
                },
                {
                    "name": "starts_at__gte",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter where a ViltSessionEvent is greater than or equal to the starts at value. Datetime format"
                    }
                },
                {
                    "name": "ends_at__lte",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter where a ViltSessionEvent is less than or equal to the ends at value. Datetime format"
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/vilt-session-events/{vilt_session_event_id}",
            "action": "get",
            "description": "Get ViltSessionEvent details",
            "fields": [
                {
                    "name": "vilt_session_event_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "vilt-session-registrations": {
        "list": {
            "_type": "link",
            "url": "/v1/vilt-session-registrations",
            "action": "get",
            "description": "List ViltSessionRegistrations.  Returns a paginated list (1000 results per page) based upon the filters supplied.",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                },
                {
                    "name": "session__id",
                    "location": "query",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": "Filter results by the id of a ViltSession"
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/vilt-session-registrations",
            "action": "post",
            "encoding": "application/json",
            "description": "Register a user to a vilt_session.\nAn enrollment for this user must exist before attempting to post to this endpoint.\n\nExample POST body (if POSTing JSON rather than form-encoded parameters):\n\n    {\n        \"vilt_session\": {\n            \"id\": \"jaso89ajs\",\n        },\n        \"enrollment_id\": \"9uips0sdja\"\n    }",
            "fields": [
                {
                    "name": "vilt_session",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Vilt session",
                        "description": ""
                    }
                },
                {
                    "name": "enrollment_id",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Enrollment id",
                        "description": ""
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/vilt-session-registrations/{vilt_session_registration_id}",
            "action": "get",
            "description": "Get ViltSessionRegistration details",
            "fields": [
                {
                    "name": "vilt_session_registration_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/vilt-session-registrations/{vilt_session_registration_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update for vilt-session-registrations. Only attendance may be changed. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "vilt_session_registration_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "attended",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Attended",
                        "description": ""
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/vilt-session-registrations/{vilt_session_registration_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update for vilt-session-registrations. Only attendance may be changed. PUT and PATCH are identical - both do partial updates.",
            "fields": [
                {
                    "name": "vilt_session_registration_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "attended",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Attended",
                        "description": ""
                    }
                }
            ]
        },
        "delete": {
            "_type": "link",
            "url": "/v1/vilt-session-registrations/{vilt_session_registration_id}",
            "action": "delete",
            "description": "Deletes a ViltSessionRegistration record, marks student as unattended for the ViltSessionEvent. This action cannot be undone.",
            "fields": [
                {
                    "name": "vilt_session_registration_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    },
    "web-packages": {
        "list": {
            "_type": "link",
            "url": "/v1/web-packages",
            "action": "get",
            "description": "Returns a paginated list of `WebPackage` objects associated with your organization.\n\n### Example Response\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"13k7y5yndi8er\",\n                \"type\": \"SCORM\",\n                \"redirect_on_completion\": true,\n                \"state\": \"READY\",\n                \"sync_completion\": false,\n                \"title\": \"Now That's What I Call Learning! Volume 23\"\n            }\n    }",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                },
                {
                    "name": "page_size",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page size",
                        "description": "Number of results to return per page."
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/web-packages",
            "action": "post",
            "encoding": "application/json",
            "description": "Creates a `WebPackage` object from a remotely hosted zip file.\n\nThe file will be downloaded from the remote source and re-hosted in Skilljar.\n\n### Example Request\n\n    {\n        \"content_url\": \"https://www.skilljar.com/example_scorm.zip\",\n        \"web_package\": {\n            \"title\": \"Now That's What I Call Learning! Volume 23\",\n            \"redirect_on_completion\": true,\n            \"sync_on_completion\": false\n        }\n    }\n\nValid fields in the `web_package` request object:\n\n* `title` (REQUIRED):  This title will be overridden once the web package is processed.\n* `redirect_on_completion` (OPTIONAL, default: `true`)\n* `sync_on_completion`: (OPTIONAL, default: `false`)\n\n-----\n\n### Example Response\n\n    {\n        \"id\": \"13k7y5yndi8er\",\n        \"type\": \"SCORM\",\n        \"redirect_on_completion\": true,\n        \"state\": \"PROCESSING\",\n        \"sync_completion\": false,\n        \"title\": \"Now That's What I Call Learning! Volume 23\"\n    }\n\nCreation responses are still processing and don't include the `type` or `download_url` fields.",
            "fields": [
                {
                    "name": "content_url",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Content url",
                        "description": ""
                    }
                },
                {
                    "name": "web_package",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Web package",
                        "description": ""
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/web-packages/{id}",
            "action": "get",
            "description": "Retrieves details for a web package associated with your organization.\n\n### Example Response\n\n    {\n        \"id\": \"13k7y5yndi8er\",\n        \"type\": \"SCORM\",\n        \"download_url\": \"https://[...]\",\n        \"redirect_on_completion\": true,\n        \"state\": \"READY\",\n        \"sync_completion\": false,\n        \"title\": \"Now That's What I Call Learning! Volume 23\"\n    }\n\n* download_url is a signed url that will be valid for 1 hour after generation.",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "lessons": {
            "_type": "link",
            "url": "/v1/web-packages/{id}/lessons",
            "action": "put",
            "encoding": "application/json",
            "description": "Updates all lesson objects (excluding lesson content items) associated with the addressed `WebPackage`\n\n### Example Request\n\n    {\n        \"web_package_id\": \"asdf1234jk\",\n    }",
            "fields": [
                {
                    "name": "id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "web_package_id",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Web package id",
                        "description": "WebPackage that will replace the other in its lessons"
                    }
                }
            ]
        }
    },
    "webhooks": {
        "ping": {
            "create": {
                "_type": "link",
                "url": "/v1/webhooks/{webhook_id}/ping",
                "action": "post",
                "description": "Sends an HTTP POST event of type=PING to the webhook.  Failure will not deactivate the webhook, and it does not\nretry.",
                "fields": [
                    {
                        "name": "webhook_id",
                        "required": true,
                        "location": "path",
                        "schema": {
                            "_type": "string",
                            "title": "",
                            "description": ""
                        }
                    }
                ]
            }
        },
        "sample-course-completion": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-course-completion",
                "action": "get",
                "description": "Returns a single-item list of sample course completion events. The sample event returned by this API is either the\nmost recent COURSE_COMPLETION event, or a sample event with sample data if there are no course completions.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-course-enrollment": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-course-enrollment",
                "action": "get",
                "description": "Returns a single-item list of sample course enrollment events. The sample event returned by this API is either the\nmost recent COURSE_ENROLLMENT event, or a sample event with sample data if there are no course enrollments.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-dashboard-task-created": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-dashboard-task-created",
                "action": "get",
                "description": "Returns a single-item list of sample Dashboard Task created events. The sample event returned by this API is either the\nmost recent DASHBOARD_TASK_CREATED event, or a sample event with sample data if there are no dashboard tasks.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-domain-enrollment": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-domain-enrollment",
                "action": "get",
                "description": "Returns a single-item list of sample domain enrollment events. The sample event returned by this API is either the\nmost recent DOMAIN_ENROLLMENT event (if the most recent domain membership has signup info that corresponds with\ncurrent active signup fields), or a sample event with sample data if there are no domain memberships.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-lesson-completion": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-lesson-completion",
                "action": "get",
                "description": "Returns a single-item list of sample lesson completion events. The sample event returned by this API is either the\nmost recent LESSON_COMPLETION event, or a sample event with sample data if there are no lesson completions.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-path-completion": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-path-completion",
                "action": "get",
                "description": "Returns a single-item list of sample path completion events. The sample event returned by this API is either the\nmost recent PATH_COMPLETION event, or a sample event with sample data if there are no path completions.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-path-enrollment": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-path-enrollment",
                "action": "get",
                "description": "Returns a single-item list of sample path enrollment events. The sample event returned by this API is either the\nmost recent PATH_ENROLLMENT event, or a sample event with sample data if there are no path enrollments.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-purchase-fulfillment": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-purchase-fulfillment",
                "action": "get",
                "description": "Returns a single-item list of sample purchase fulfillment events. The sample event returned by this API is either the\nmost recent PURCHASE_FULFILLMENT event, or a sample event with sample data if there are no purchase fulfillment events.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-quiz-completion": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-quiz-completion",
                "action": "get",
                "description": "Returns a single-item list of sample quiz completion events. The sample event returned by this API is either the\nmost recent QUIZ_COMPLETION event, or a sample event with sample data if there are no quiz completions.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "sample-vilt-registration": {
            "list": {
                "_type": "link",
                "url": "/v1/webhooks/sample-vilt-registration",
                "action": "get",
                "description": "Returns a single-item list of sample VILT event registration events. The sample event returned by this API is either the\nmost recent VILT_EVENT_REGISTRATION event, or a sample event with sample data if there are no VILT event registration.\n\nThis API is used internally to generate sample data; the body of an actual webhook notification will be a single\nJSON event that is NOT contained within a list."
            }
        },
        "list": {
            "_type": "link",
            "url": "/v1/webhooks",
            "action": "get",
            "description": "List webhooks.  Returns a paginated response (100 results per page) of webhooks.\n\nExample Response:\n\n    {\n        \"count\": 1,\n        \"next\": null,\n        \"previous\": null,\n        \"results\": [\n            {\n                \"id\": \"abcd1234\",\n                \"target_url\": \"http://example.com/skilljar-hook-processor\",\n                \"event_type\": null,\n                \"active\": true,\n                \"deactivate_reason\": null\n            }\n        ]\n    }",
            "fields": [
                {
                    "name": "page",
                    "location": "query",
                    "schema": {
                        "_type": "integer",
                        "title": "Page",
                        "description": "A page number within the paginated result set."
                    }
                }
            ]
        },
        "create": {
            "_type": "link",
            "url": "/v1/webhooks",
            "action": "post",
            "encoding": "application/json",
            "description": "Create a webhook. The Skilljar system will send HTTP POST requests to the given URL when events occur within\nthe platform. If the \"event_type\" field is null, all events will be sent to the given URL. If the field is set,\nonly events matching the type provided will be sent to the given URL. If multiple webhooks qualify for an\nevent and have the same URL, the event will be sent to the URL only once.",
            "fields": [
                {
                    "name": "target_url",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Target url",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                },
                {
                    "name": "event_type",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Event type",
                        "description": "'COURSE_COMPLETION', 'COURSE_ENROLLMENT', 'DOMAIN_ENROLLMENT', 'LESSON_COMPLETION', 'PATH_COMPLETION', 'PATH_ENROLLMENT', 'PURCHASE_FULFILLMENT', 'QUIZ_COMPLETION', 'VILT_EVENT_REGISTRATION', 'DASHBOARD_TASK_CREATED', or null. If null, all events, regardless of type, will be sent to the webhook URL.",
                        "enum": [
                            "COURSE_COMPLETION",
                            "COURSE_ENROLLMENT",
                            "DOMAIN_ENROLLMENT",
                            "LESSON_COMPLETION",
                            "PATH_COMPLETION",
                            "PATH_ENROLLMENT",
                            "PURCHASE_FULFILLMENT",
                            "QUIZ_COMPLETION",
                            "VILT_EVENT_REGISTRATION",
                            "DASHBOARD_TASK_CREATED"
                        ]
                    }
                },
                {
                    "name": "basic_auth_username",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Basic auth username",
                        "description": "When set, this webhook will include the HTTP Basic Authentication \n        header when making a request to the target_url. This will be the username."
                    }
                },
                {
                    "name": "basic_auth_password",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Basic auth password",
                        "description": "When set, this webhook will include the HTTP Basic Authentication \n        header when making a request to the target_url. This will be the password."
                    }
                },
                {
                    "name": "additional_headers",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Additional headers",
                        "description": "Dictionary of string values to include as additional HTTP headers in the webhook request. Key pairs included in this JSON dictionary will be added as individual HTTP headers to all webhook POST requests. Use double quotes for keys and values"
                    }
                }
            ]
        },
        "read": {
            "_type": "link",
            "url": "/v1/webhooks/{webhook_id}",
            "action": "get",
            "description": "Get webhook details.\n\nExample Response:\n\n    {\n        \"id\": \"abcd1234\",\n        \"target_url\": \"http://example.com/skilljar-hook-processor\",\n        \"event_type\": null,\n        \"active\": true,\n        \"deactivate_reason\": null\n    }",
            "fields": [
                {
                    "name": "webhook_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        },
        "update": {
            "_type": "link",
            "url": "/v1/webhooks/{webhook_id}",
            "action": "put",
            "encoding": "application/json",
            "description": "Update webhook details.",
            "fields": [
                {
                    "name": "webhook_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "target_url",
                    "required": true,
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Target url",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                },
                {
                    "name": "event_type",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Event type",
                        "description": "'COURSE_COMPLETION', 'COURSE_ENROLLMENT', 'DOMAIN_ENROLLMENT', 'LESSON_COMPLETION', 'PATH_COMPLETION', 'PATH_ENROLLMENT', 'PURCHASE_FULFILLMENT', 'QUIZ_COMPLETION', 'VILT_EVENT_REGISTRATION', 'DASHBOARD_TASK_CREATED', or null. If null, all events, regardless of type, will be sent to the webhook URL.",
                        "enum": [
                            "COURSE_COMPLETION",
                            "COURSE_ENROLLMENT",
                            "DOMAIN_ENROLLMENT",
                            "LESSON_COMPLETION",
                            "PATH_COMPLETION",
                            "PATH_ENROLLMENT",
                            "PURCHASE_FULFILLMENT",
                            "QUIZ_COMPLETION",
                            "VILT_EVENT_REGISTRATION",
                            "DASHBOARD_TASK_CREATED"
                        ]
                    }
                },
                {
                    "name": "basic_auth_username",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Basic auth username",
                        "description": "When set, this webhook will include the HTTP Basic Authentication \n        header when making a request to the target_url. This will be the username."
                    }
                },
                {
                    "name": "basic_auth_password",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Basic auth password",
                        "description": "When set, this webhook will include the HTTP Basic Authentication \n        header when making a request to the target_url. This will be the password."
                    }
                },
                {
                    "name": "additional_headers",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Additional headers",
                        "description": "Dictionary of string values to include as additional HTTP headers in the webhook request. Key pairs included in this JSON dictionary will be added as individual HTTP headers to all webhook POST requests. Use double quotes for keys and values"
                    }
                }
            ]
        },
        "partial_update": {
            "_type": "link",
            "url": "/v1/webhooks/{webhook_id}",
            "action": "patch",
            "encoding": "application/json",
            "description": "Update webhook details.",
            "fields": [
                {
                    "name": "webhook_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                },
                {
                    "name": "target_url",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Target url",
                        "description": ""
                    }
                },
                {
                    "name": "active",
                    "location": "form",
                    "schema": {
                        "_type": "boolean",
                        "title": "Active",
                        "description": ""
                    }
                },
                {
                    "name": "event_type",
                    "location": "form",
                    "schema": {
                        "_type": "enum",
                        "title": "Event type",
                        "description": "'COURSE_COMPLETION', 'COURSE_ENROLLMENT', 'DOMAIN_ENROLLMENT', 'LESSON_COMPLETION', 'PATH_COMPLETION', 'PATH_ENROLLMENT', 'PURCHASE_FULFILLMENT', 'QUIZ_COMPLETION', 'VILT_EVENT_REGISTRATION', 'DASHBOARD_TASK_CREATED', or null. If null, all events, regardless of type, will be sent to the webhook URL.",
                        "enum": [
                            "COURSE_COMPLETION",
                            "COURSE_ENROLLMENT",
                            "DOMAIN_ENROLLMENT",
                            "LESSON_COMPLETION",
                            "PATH_COMPLETION",
                            "PATH_ENROLLMENT",
                            "PURCHASE_FULFILLMENT",
                            "QUIZ_COMPLETION",
                            "VILT_EVENT_REGISTRATION",
                            "DASHBOARD_TASK_CREATED"
                        ]
                    }
                },
                {
                    "name": "basic_auth_username",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Basic auth username",
                        "description": "When set, this webhook will include the HTTP Basic Authentication \n        header when making a request to the target_url. This will be the username."
                    }
                },
                {
                    "name": "basic_auth_password",
                    "location": "form",
                    "schema": {
                        "_type": "string",
                        "title": "Basic auth password",
                        "description": "When set, this webhook will include the HTTP Basic Authentication \n        header when making a request to the target_url. This will be the password."
                    }
                },
                {
                    "name": "additional_headers",
                    "location": "form",
                    "schema": {
                        "_type": "object",
                        "title": "Additional headers",
                        "description": "Dictionary of string values to include as additional HTTP headers in the webhook request. Key pairs included in this JSON dictionary will be added as individual HTTP headers to all webhook POST requests. Use double quotes for keys and values"
                    }
                }
            ]
        },
        "delete": {
            "_type": "link",
            "url": "/v1/webhooks/{webhook_id}",
            "action": "delete",
            "description": "Delete webhook.",
            "fields": [
                {
                    "name": "webhook_id",
                    "required": true,
                    "location": "path",
                    "schema": {
                        "_type": "string",
                        "title": "",
                        "description": ""
                    }
                }
            ]
        }
    }
}