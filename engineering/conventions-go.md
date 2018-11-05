
# Go Development Conventions

## Introduction

This guide documents development conventions for Go at source{d}. Check [general conventions](conventions.md) for language-independent conventions that are also applicable for Go projects.

## Supported Go Versions

* Our libraries support latest two stable major versions of Go (e.g. 1.10.x and 1.11.x). Both versions should be included in Travis CI.
  * Some of our libraries may support more versions, specially when there is wide-adoption outside source{d}, (e.g. [go-git](https://github.com/src-d/go-git) which currently supports three.
* Our applications support only latest [stable](https://golang.org/dl/#stable) Go version.

## Dependency Management

* If your project is an application:
  * Use [dep](https://github.com/golang/dep) to manage dependencies.
  * Check in the `vendor` directory into git.
* If your project is a library:
  * Use [gopkg.in](http://labix.org/gopkg.in) to provide versioned imports.

## Build System

* If your project requires fetching or building dependencies, implement that in the `dependencies` rule.
* If binaries can be built, do so in the `packages` rule. Note that [src-d/ci](https://github.com/src-d/ci) provides that rule by default.

## Code Generation

* All generated code should be always processed by `gofmt`.
* Generated code should have a `// Code generated ... DO NOT EDIT.` comment before the package clause, but not attached to it (see [convention](https://github.com/golang/go/issues/13560#issuecomment-288457920)).

## Docker

* If you use alpine-based images, your binaries need to be built with `CGO_ENABLED=0`. [src-d/ci](https://github.com/src-d/ci/) does this by default. If your project uses `cgo`, you will have to use alpine for the build of binaries for Docker.

## Testing

* Use [testify](https://github.com/stretchr/testify).
* Use [suites](https://github.com/stretchr/testify#suite-package) to share setup/teardown code among related tests. When testing multiple methods of the same struct, you generally want to start with a suite. Some cases, such as table-driven tests, are better handled with [subtests](https://blog.golang.org/subtests) though.

## Error handling

* Use [src-d/go-errors](https://github.com/src-d/go-errors).

## Logging

* Use logging in your applications.
* Use [src-d/go-log](https://github.com/src-d/go-log).

## Other libraries

* We use protobuf extensively and [gogo](https://github.com/gogo/protobuf) is our preferred library.

## Best Practices

* Use `gofmt`, `goimports`, `go vet`.
* Follow community well-established best practices: [Effective Go](https://golang.org/doc/effective_go.html) and [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments).
* Sourcerers use additional linters such as [golint](https://github.com/golang/lint) and [megacheck](https://github.com/dominikh/go-tools/tree/master/cmd/megacheck).

### Group code blocks with blank lines

In order to improve readability, we use single blank lines to separate logic blocks of code inside functions.

A blank line is usually added after the end of any control structure, too.

### Naming

* Prefer full names (e.g. `Repository`, not `Repo`).

## CLI

* Put sources for your executable commands in `cmd/<command-name>/`, with the `main` function in `cmd/<command-name>/main.go`.
* We use [go-flags](https://github.com/jessevdk/go-flags) extensively for CLI options parsing.
* Implement commands in a subpackage ([example](https://github.com/src-d/gitbase/blob/master/cmd/gitbase/command/server.go)).

## Configuration

* Use environment variables for configuration.
* You can use the [envconfig](https://github.com/kelseyhightower/envconfig) package to parse the environment into a configuration struct.
