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

task_wait_random = __import__('3-tasks').task_wait_random

"""
Task 4. Tasks
"""


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function that returns list of the delays in ascending order
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for finished in asyncio.as_completed(tasks):
        delay = await finished
        delays.append(delay)

    return delays
