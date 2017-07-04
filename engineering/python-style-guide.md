# source{d} Python Style Guide

1. Contributing to existing projects - do not change the style.
2. [PEP8](https://www.python.org/dev/peps/pep-0008/) with 99 char line length limit
3. Class methods order: first public, then protected (_), then private (__)
4. Use single or double quotes, but be consistent across the whole project. When a string contains single or double quote characters, however, use the other one to avoid backslashes in the string. ML team use double quotes.
5. Do not use single letter argument names; use X and Y only in sklearn context.
6. docstrings: Sphinx style
