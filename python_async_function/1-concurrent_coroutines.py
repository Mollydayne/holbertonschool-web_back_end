#!/usr/bin/env python3

"""
Asyncio : not a harry potter spell,
module to let Python wait while somthing else is taking time to do
List : module to know what type of data we deal with
wait_random : Function previously implemented in file 0 to create a wait
routine with a random delay
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random

"""
Task 1. Let's execute multiple coroutines at the same time with async
"""


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Function that returns list of the delays in ascending order
    """
    delays = []
    tasks = []

    for i in range(n):
        task = asyncio.create_task(wait_random(max_delay))
        tasks.append(task)

    for finished in asyncio.as_completed(tasks):
        delay = await finished

    for _ in range(1):
        delays.append(delay)

    return delays