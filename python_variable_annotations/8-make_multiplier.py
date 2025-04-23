#!/usr/bin/env python3

"""
Need to add typing to handle complx typs
"""

from typing import Callable

"""
Task 8. Complex types - functions
"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Function that returns a float multiply by multiplier
    """
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply
