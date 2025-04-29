#!/usr/bin/env python3
"""
Task 9. Insert a document in Python
"""


def list_all(mongo_collection):
    """
    Funtion to inserts a new document in a collection based on kwargs
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
