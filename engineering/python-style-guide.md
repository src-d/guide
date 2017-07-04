source{d} Python Style Guide

1. Contributing to existing projects - do not change the style.
2. [PEP8](https://www.python.org/dev/peps/pep-0008/) with 99 char line length limit
3. Indentation: 4 whitespaces
4. Naming: classes: **CamelCase** functions: **lower_underscore_case** arguments: **lower_underscore_case**
5. Class methods order: first public, then protected (_), then private (__)
6. Use single or double quotes, but be consistent across the whole project. ML team use double quotes.
7. Never end function names with double underscore __
8. Do not use single letter argument names; use X and Y only in sklearn context.
9. docstrings: Sphinx style
10. Imports: sorted alphabetically; stdlib, \n, external, \n, internal
11. Do not `from xxx import *`
