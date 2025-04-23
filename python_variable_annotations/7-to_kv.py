#!/usr/bin/env python3

"""
Need to add typing to handle complx typs
"""

from typing import Union
from typing import Tuple

"""
Task 7. Complex types - string and int/float to tuple
"""


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Function that returns a tuple, first element must be str, then sq of number
    """
    return (k, float(v ** 2))
