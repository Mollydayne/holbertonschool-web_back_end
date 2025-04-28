#!/usr/bin/env python3

"""
Asyncio : not a harry potter spell,
module to let Python wait while somthing else is taking time to do
Random : module to have a random float for delay
List : module to know what type of data we deal with
"""

import asyncio
import random
from typing import List

"""
Task 0. Async Generator
"""


async def async_generator() -> List[float]:
    """
    Function that will loop 10 times and generate a random
    number with 1 second delay
    """
    for i in range(10):
        await asyncio.sleep(1)
        number = random.uniform(0, 10)
        yield number
