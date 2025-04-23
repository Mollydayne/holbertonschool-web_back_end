#!/usr/bin/env python3

"""
Need to add typing to handle duck typing
"""

from typing import Sequence
from typing import Any
from typing import Optional

"""
Task 10. Duck typing - first element of a sequence
"""


def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """
    Function that returns 1st elem of a sequence
    """
    if lst:
        return lst[0]
    else:
        return None
