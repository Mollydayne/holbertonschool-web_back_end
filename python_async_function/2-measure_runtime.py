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

wait_n = __import__('1-concurrent_coroutines').wait_n

"""
Task 2. Measure the runtime
"""


def measure_time(n: int, max_delay: int) -> float:
    """
    Function that returns delay total time / n
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()

    total_time = end - start
    return total_time / n
