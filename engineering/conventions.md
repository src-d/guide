
# Development Conventions

* [Introduction](#introduction)
* [Versioning](#versioning)
* [Build System](#build-system)
* [Continuous Integration](#continuous-integration)
* [Publishing](#publishing)
* [Others](#others)
* [Development Environments](#development-environments)

## Introduction

This guide documents development conventions that are language-independent, so they are applicable to every source{d} project.

We have additional conventions for each language:

* [Go](conventions-go.md)
* [Python](conventions-python.md)
* [Scala](conventions-scala.md)

## Versioning

* Use [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).
  * Note that backwards compatibility rules [do not apply to `0.y.z` versions](https://semver.org/#spec-item-4).
* When creating version tags in git, use the `v` prefix (e.g. `v0.5.0`). See our [git guide](git-flow.md) for more information.

## Build System

* All projects have a `Makefile` at the top-level directory.
* Makefile should be compatible with `[GNU make](https://www.gnu.org/software/make/manual/make.html)`.
* [src-d/ci](https://github.com/src-d/ci) should be used in these makefiles to provide integration with our continuous integration systems.

## Continuous Integration

* All open source projects should be integrated with [Travis CI](https://travis-ci.org/) for continuous integration. Check [src-d/ci examples](https://github.com/src-d/ci/tree/master/examples).
* Use [Appveyor](https://www.appveyor.com/) for CI on Windows. We support Windows unless it is not possible at all (e.g. [bblfshd](https://github.com/bblfsh/bblfshd)).
* Drone is used for continuous delivery. If you are working on a web application, read the [continuous delivery guide](continuous-delivery.md) too.

## Publishing

* Binaries should be attached to GitHub Releases. src-d/ci will do this automatically.

## Docker

* Applications should be packaged with Docker.
* Include `Dockerfile` in the top-level directory of the project.
* Use latest [alpine](https://hub.docker.com/_/alpine/) or [busybox](https://hub.docker.com/_/busybox/) whenever it is possible. Use latest [debian](https://hub.docker.com/_/debian/) stable-slim otherwise.
* If needed to reduce image size, use [multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/).

## Others

Refer to the [licensing](licensing.md), [maintainers](maintainers.md) and [documentation](documentation.md) guides for other important information you should know when creating new projects.

## Development Environments

Each sourcerer has his own preferences on editors and IDEs. But if you do not know what to use, [Visual Studio Code](https://code.visualstudio.com/) is a popular choice for Go and Python, and [IntelliJ IDEA](https://www.jetbrains.com/idea/) is the most used for Java and Scala.