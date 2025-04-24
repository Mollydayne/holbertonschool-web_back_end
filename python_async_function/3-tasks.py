#!/usr/bin/env python3

"""
Asyncio : not a harry potter spell,
module to let Python wait while somthing else is taking time to do
List : module to know what type of data we deal with
wait_random : Function previously implemented in file 0 to create a wait
routine with a random delay
time module: used to measure time as asked by the exercise
"""

import asyncio
from typing import List
import time
import random

wait_random = __import__('0-basic_async_syntax').wait_random

"""
Task 3. Tasks
"""


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Function that returns asyncio.task
    """
    task = asyncio.create_task(wait_random(max_delay))
    print(f"debug")
    return task
