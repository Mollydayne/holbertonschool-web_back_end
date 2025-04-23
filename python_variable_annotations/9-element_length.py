#!/usr/bin/env python3

"""
Need to add typing to handle complx typs
"""

from typing import Iterable
from typing import Tuple
from typing import List
from typing import Sequence


"""
Task 9. Let's duck type an iterable object
"""


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function that returns values with typs
    """
    return [(i, len(i)) for i in lst]
