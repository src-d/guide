
# Releases FAQ

## How frequently/what prompts a release?

At [maintainer](maintainers.md)'s discretion. But in general, if a bug that is a critical regression from latest release is fixed, a new release should be done ASAP. If, after some time, there are pending changes that are well tested, a release should be performed too.

## What should be provided in terms of files?

For applications, binaries for all supported platforms (at least Linux, our goal is to have Linux, macOS and Windows) posted to GitHub Releases page. Docker image pushed to Docker Hub, if applicable.

## What content should be in release notes?

Release notes should contain something along these lines:

- Optional brief description of a release.
- _Breaking Changes_ section, describing anything that is not backwards compatible.
- _Features_ section.
- _Bug Fixes_ section.
- _Known Issues_ section, with reference to issues that are new in a stable release, known that the time of release, but not fixed yet.

Links to issues or PR should be used as much as possible, as well as acknowledgements to contributors (specially external contributors), preferably in the form of a GitHub user mention.