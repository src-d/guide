
# Scala Development Conventions

## Introduction

This guide documents development conventions for Scala at source{d}. Check [general conventions](conventions.md) for language-independent conventions that are also applicable for Scala projects.

## Supported Scala and JVM Versions

Given that most of our Scala projects are related to [Apache Spark](https://spark.apache.org/), our compatibility policy is closely related to it.

* Actively support Java 8. Java 9 on a best-effort basis.
* Support Scala 2.11.

## Build System

* Use [sbt](https://www.scala-sbt.org/).
* Include an sbt wrapper in the top-level directory (e.g. [paulp/sbt-extras](https://github.com/paulp/sbt-extras)).
* Use [sbt-assembly](https://github.com/sbt/sbt-assembly) if fat jars are required.
* You can use [coursier](https://github.com/coursier/coursier) for faster dependency downloading.
* Integrate code coverage and scalastyle check in your sbt build files.

## Publishing

* Artifacts should be published to Maven Central under the `tech.sourced` organization.

## Testing

* Use [scalatest](http://www.scalatest.org/).
* Prefer [FlatSpec](http://www.scalatest.org/user_guide/selecting_a_style) style.
* Add the `Spec` suffix to test file names.

## Logging

* If working with Spark, you might use `org.apache.spark.internal.Logging`.
* [slf4j](https://www.slf4j.org/) otherwise.

## Code Style

We do not have a fully standardized style for our Scala projects. However, they all stay close to [default scalastyle config](http://www.scalastyle.org/scalastyle_config.xml) with either 100 or 120 maximum line length. You may want to use [scalafmt](http://scalameta.org/scalafmt/) for automatic formatting too.

## Best Practices

* [Effective Scala](http://twitter.github.io/effectivescala/) is a good summary of best practices you should follow.

## CLI

* Most of our applications are in the form of Spark jobs meant to be used with `spark-submit`.
* For standalone CLI, you can check [scopt](https://github.com/scopt/scopt) which we have used in some projects and is a good fit.

## Configuration

* If you are creating a Spark application, use environment variables for configuration that might change on the workers (e.g. URI of some backing service that is co-located with workers) and Spark configuration for settings that need to be consistent across all workers for a given job.
