# Licensing Policy

This document describes source{d}'s licensing policy for the open source projects.

All the projects developed or being developed by source{d} should be open source and follow the 
rules presented below.

Templates are available at the end of this document.

## Licence

At the time of creating a new project you can choose between two different licenses:

- [GPL v3.0](https://www.gnu.org/licenses/gpl.html), applied to all projects whose nature is specific to core parts of our stack like language analysis, machine learning, etc. and which are mostly applications and are intended to be consumed through a separate client library owned by us. This allows clean interaction to third-party proprietary code.
_Examples: bblfsh/server, bblfsh/*-driver_

- [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0), this license should be applied to projects which are libraries or tools that are intended to be consumed by third-parties as source code dependencies, which the GPLv3 and variants doesn't allow (if consumers are not GPL).
_Examples: bblfsh/*-client_

- [Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), this license should be applied to projects which are heavy on creative content, have creative content as their key aspect, or are purely editorial content (creative content as in information and knowledge that is not in form of code).
_Examples: src-d/blog, src-d/awesome-machine-learning-on-source-code_

*Variants of GPLv3, such as AGPLv3 or LGPLv3 can be used under request and on a per case basis.*

## Re-license

When a piece of code is copied between two or more source{d} projects covered by different licenses, source{d} employees are entitled to relicense the code as needed among those projects, if all the code was written by source{d} employees. **THIS CANNOT BE DONE WITH 3RD PARTY CODE.**

## Developer Certificate of Origin

All our projects should include a [Developer Certificate of Origin](https://developercertificate.org/) (DCO) document to protect us against any individual contributor revoking our rights to distribute their contribution to any of our projects.

In practice, this means that every commit since the introduction of the DCO, should be signed off by the author, using `git commit -s`. Being irrelevant if the author is a source{d} employee or an individual contributor.

To learn more about DCO please read:

- [Introducing Developer Certificate of Origin](https://blog.chef.io/2016/09/19/introducing-developer-certificate-of-origin/)
- [Developer Certificate of Origin versus Contributor License Agreements](https://julien.ponge.org/blog/developer-certificate-of-origin-versus-contributor-license-agreements/)

## Templates

- [GPL v3.0 License](documents/gpl/LICENSE) Document
- [Apache License 2.0](documents/apache/LICENSE) Document
- [Creative Commons BY-SA 4.0](documents/cc-by-sa/LICENSE) Document
- [Developer Certificate of Origin](documents/DCO) Document
