
# Python Development Conventions

## Introduction

This guide documents development conventions for Python at source{d}. Check [general conventions](conventions.md) for language-independent conventions that are also applicable for Python projects.

## Code Style

1. Contributing to existing projects - do not change the style.
2. [PEP8](https://www.python.org/dev/peps/pep-0008/) with 99 char line length limit.
3. Class methods order: first public, then protected (`_`), then private (`__`)
4. Use double quotes `"`. When a string contains single or double quote characters, however, use the other one to avoid backslashes in the string.
5. Favor `%` to `format()`. Although `format()` is generally considered as a replacement, it is much slower and the other languages stick to the `printf` syntax. As with the double quotes, we therefore reduce the friction with Go switches.
6. Do not use single letter argument names; use X and Y only in sklearn context.
7. Use [Sphinx style](https://devguide.python.org/documenting/#style-guide) for docstrings.
8. Format of TODO and FIXME: `# TODO(mygithubuser): blah-blah-blah`.

## CLI

* Use standard [argparse](https://docs.python.org/3/library/argparse.html).
