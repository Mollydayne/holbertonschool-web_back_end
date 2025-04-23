#!/usr/bin/env python3

"""
Asyncio : not a harry potter spell, module to let Python wait while somthing else is taking time to do
Random : module to have a random float for delay
"""

import asyncio
import random

"""
Task 0. The basics of async
"""


async def wait_random(max_delay: int = 10) -> float:
    """
    Function that waits for a random delay between 0 and max_delay
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
