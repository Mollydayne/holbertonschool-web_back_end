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

async_comprehension = __import__('1-async_comprehension').async_comprehension

"""
Task 2. Run time for four parallel comprehensions
"""


async def measure_runtime() -> float:
    """
    Measures the total runtime of executing
    async_comprehension four times in parallel
    """
    start_time = time.time()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )

    end_time = time.time()

    return end_time - start_time
