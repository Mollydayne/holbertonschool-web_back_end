#!/usr/bin/env python3

"""
Need to add typing to handle complx typs
"""

from typing import List
from typing import Union

"""
Task 6. Complex types - mixed list
"""


def sum_mixed_list(mxd_lst: Union[int, float]) -> float:
    """
    Function that returns the sum of a mixed list as floats
    """
    return sum(mxd_lst)
