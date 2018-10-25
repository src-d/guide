_Table of Contents_

- [Documentation At source{d}](#documentation-at-sourced)
    - [General Best Practices](#general-best-practices)
        - [State A Clear Goal](#state-a-clear-goal)
        - [Define A Scope](#define-a-scope)
        - [Keep It Simple](#keep-it-simple)
        - [Don't Alienate The Reader](#dont-alienate-the-reader)
        - [Keep Accessibility In Mind](#keep-accessibility-in-mind)
        - [Arbitrary Choices And Consistency](#arbitrary-choices-and-consistency)
    - [Documentation Artifacts](#documentation-artifacts)
        - [README.md](#readmemd)
        - [CONTRIBUTING.md](#contributingmd)
        - [Reference Material](#reference-material)
        - [Release Notes](#release-notes)
        - [Guides/Tutorials](#guidestutorials)
        - [Code of Conduct](#code-of-conduct)
        - [Issue Templates](#issue-templates)
        - [Other Pieces Of Documentation](#other-pieces-of-documentation)
    - [Resources](#resources)

# Documentation At source{d}

Our company has been a big believer in Open Source from very early on.
Most of our repositories are visible to anyone in the world.
We agree this is for our own benefit, but public source code is not
enough to support and develop an Open Source community.

The goal of this document is to help source{d} engineers understand
what pieces of documentation they should write for an open source project,
and how they should be written.

The main audience of this document is source{d} engineers, but it might
be a useful resource for many others inside and outside our company.

This document is divided into two sections:

1. The first section covers some best practices for technical writing which
apply to any piece of documentation you might be writing.
1. The second section lists the main documentation artifacts all source{d}
projects should provide.

## General Best Practices

People read documentation in order to achieve a goal.
Whenever you write a new piece you should keep their goal in mind.

For instance, you're currently reading this document.
What is your goal?
Maybe you want to improve the documentation of your own project,
or perhaps you've been told this is an awesome document and your goal
is simply to enjoy reading a beautiful text of astonishing beauty.

On the other hand I know you're a developer, so there's no point explaining
what source code is. That would seem patronizing or a waste of time.

I also know that most of us don't speak English as a first language.
Unnecessarily complicated words or sentences are then obstacles to our communication.

Finally, I know you're a diverse group. Among the readers of this document you'll find people
from everywhere on the gender spectrum, different races, and different sensibilities.
I do not wish to alienate any of them, so I need to be careful with the words I choose.

All of these concrete examples can be boiled down to the following best practices.

### State A Clear Goal

A piece of documentation has a clearly stated goal and audience.

For instance, a `README.md` should be an overview of the project, maybe
including some basic usage instructions. On the other hand `CONTRIBUTING.md`
should cover what contributors care about.

Do not make a first time visitor read through how to contribute a project before
they understand what the project is about.

### Define A Scope

As Carl Sagan [famously said](https://www.youtube.com/watch?v=7s664NsLeFM)
"If you wish to make an apple pie from scratch, you must first invent the universe".
Would you start an apple pie recipe with quantum physics? Hopefully not.

Same goes for documentation. You need to define the scope of concepts that deserve
to be explained in a document. Those considered either too advanced or as prerequisites
should be omitted. You can always link to some other document explaining them.

For instance, if a project uses Go and gRPC feel free to link to the homepages
of those projects. Do not use more than one short sentence to explain what Go
or gRPC are.

### Keep It Simple

Short sentences win. Avoid having overly complex sentences.
It might seem weird at first. You might find the resulting text immature.
But keeping your sentences short helps the readers, and that should trump everything else.

Following the same logic, avoid overly complicated words.

As a rule of thumb, sentences longer than a printed line are probably too long.

### Don't Alienate The Reader

Avoid gendered pronouns. "He or she" should be rewritten as "they".
There is no reason for your document to make assumptions on the reader's identity.

Avoid sexist connotations.
For instance, "mom-proof" implies women are not technical. Tell that to Grace Hopper.
You can read more about sexist language and how to avoid it
[here](https://www.hamilton.edu/academics/centers/writing/writing-resources/avoiding-sexist-language).

Avoid ableist language. Avoid words like "crazy" or "insane".
More on ableist language [here](https://www.copyediting.com/disabling-ableist-language/#.Wk6yeFQ-dE4).

In general, if someone would find what you wrote offensive it's time to change it.
There's no excuse to offend anyone in a technical document.

### Keep Accessibility In Mind

It is probably impossible to write documentation that is fully accessible to every single person in the world.
This doesn't mean we should not strive for documentation that is as accessible as possible.

Many readers might have different degrees of visual impairments.
While using images avoid attaching meaning to colors that are traditionally hard to distinguish.
You can read more on what color combinations to avoid [here](http://blog.usabilla.com/how-to-design-for-color-blindness/).

For more extreme cases the user will not be able to see the image at all.
Take that into account and try to add captions explaining the image where possible.
At least make usage of the `alt` attributes on HTML and markdown.

### Arbitrary Choices And Consistency

Last but not least, there's a list of choices that have been made with consistency in mind.

- Use American English spelling (e.g. color instead of colour).
- Use the [Oxford comma](https://en.wikipedia.org/wiki/Serial_comma).
- Capitalize Each Word In Titles And Section Headers.
- Do not capitalize `source{d}`, no matter if it's at the beginning of a sentence, or part of a title.

There's probably more arbitrary choices we've made and haven't documented yet.
When updating a document respect the style of the document, prioritizing consistency over correctness.

## Documentation Artifacts

Now that we've covered how to write, let's talk about what to write.
This section lists the pieces of documentation we care about at source{d}.

### README.md

The `README.md` file in the root of your repository is the entrypoint to your project.
At this point you still don't know whether the reader is a new-comer, an experienced user,
or the most prolific contributor.

Give an overview of the project goal and its current state.
Is this a demo, a library, or maybe some tool?
Should it be used in production? Is too soon, or maybe too late because it's been deprecated?

Is this code distributed in any other way?
Docker images, aptitude packages, installation scripts, etc. should be mentioned here.

For tools, it is also worth including basic installation instructions.
If the instructions are long they should be part of a different document linked from this one.

This document also serves as the index for all other documentation.
`README.md` can also be found in folders other than the root of the repository.
In that case it should document what the subtree below the folder contains.
This is useful when you have libraries and binaries in a single repository.

A `README.md` template is available [here](documents/README.tmpl.md).

TL;DR:
- Audience: Everyone.
- Content: Description of the project and its current state. Links to other resources.
- Template: [README.tmpl.md](documents/README.tmpl.md)
- Example: https://github.com/twbs/bootstrap/blob/v4-dev/README.md

### CONTRIBUTING.md

This document describes what contributors should know in order to contribute to the project.

This document should contain all the details required for anyone to send a contribution.
It often contains instructions on how to build the project from source code and validate the
source code by running unit and integration tests.

This is also the place where style guides and other code conventions and requirements
should be documented or at least referenced.
Examples of these include code coverage requirements, adopted unit testing frameworks,
and documentation conventions.

A very good example of `CONTRIBUTING.md` is the one from [angular.js](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).

If you're starting from scratch, create a new `CONTRIBUTING.md` file pointing to these
[general contribution guidelines](documents/CONTRIBUTING.md).

Then add any project specific instructions in a different section of your own `CONTRIBUTING.md`.

Feel free to use the following template:

```markdown
# [Project Name] Contribution Guidelines

As all source{d} projects, this project follows the
[source{d} Contributing Guidelines](https://github.com/src-d/guide/blob/master/engineering/documents/CONTRIBUTING.md).

## Additional Contribution Guidelines

In addition to the [source{d} Contributing Guidelines](https://github.com/src-d/guide/blob/master/engineering/documents/CONTRIBUTING.md),
this project follows the following guidelines.

...
```

TL;DR:
- Audience: Contributors.
- Content: Steps necessary to modify the project, verify the changes, and contribute back to the project.
- Template: [CONTRIBUTING.md](documents/CONTRIBUTING.md)
- Example: https://github.com/angular/angular.js/blob/master/README.md

### Reference Material

This is the documentation that users will regularly consult while using your project.
The actual form depends on whether the project is a library or a tool.

For libraries, this document tends to be autogenerated from source code.
Tools like godoc, javadoc, etc. provide an easy way to do this.
For tools, the document will be often handwritten (think about `man` pages).

In both cases, this kinds of document tend to grow quite fast as they provide
detailed information on each feature and the feature's options.
They do not require a sequential structure. Users often search and read a single section.
Therefore it's recommended to have a good table of contents and search features when possible.

TL;DR:
- Audience: Users of the project.
- Content: List of all of the features of the project with full information on arguments, flags, and others.
- Example: https://docs.angularjs.org/api

### Release Notes

Every new release of your project should be versioned following [semantic versioning principles](https://semver.org/).
Each new release should come with release notes. These notes are not a list of every single
PR and issue that have been closed during the release. Instead, the document should explain
what are the most important changes in the release, such as critical bugs, breaking changes,
or new features.

TL;DR:
- Audience: Contributors and users of the project.
- Content: New features, bug fixes, and other relevant changes since the previous version released.
- Example: https://golang.org/doc/go1.9

### Guides/Tutorials

For complex tools it is sometimes useful to write guides showing how to perform some specific use case.
These guides can be short and useful for early beginners, also known as quick starts.
But often we want to show a complex use case, or show how the project interacts with other technologies.
In that case we will write a tutorial, or even a codelab if we want the readers to put the concepts to practice.

All of these documents have a goal in common: teach how to do something.
They follow a step-by-step structure.
Users often read these guides from top to bottom, unlike reference documentation.

TL;DR:
- Audience: New users of the project.
- Content: Detailed guide on how to accomplish something specific using the project.
- Example: https://docs.angularjs.org/tutorial

### Code of Conduct

All projects under the source{d} organization should mention the Code of Conduct available
in https://www.contributor-covenant.org/.

You can simply copy paste this markdown into your `README.md`.

```markdown
# Code of Conduct

All activities under source{d} projects are governed by the [source{d} code of conduct](https://github.com/src-d/guide/blob/master/.github/CODE_OF_CONDUCT.md).
```

TL;DR:
- Audience: Contributors
- Content: Rules governing the contributor community and their interactions with each other.
- Example: https://www.contributor-covenant.org/

### Issue Templates

Following the same philosophy of good documentation, good issue templates help users and
contributors interact more efficiently.

Consider adding a `ISSUE_TEMPLATE.md` file either under the repo root or a direct descent
of it named either `.github` or `docs`.
(More info [here](https://help.github.com/articles/creating-an-issue-template-for-your-repository/)).

Consider using [this template](documents/ISSUE_TEMPLATE.md).

### Other Pieces Of Documentation

Many other pieces of documentation are possible: from design documents to workflow descriptions
or UML diagrams. Whenever you're working on one of these pieces keep in mind your audience
and their own goals when reading the document.

## Resources

- [Google Developer Documentation Style Guide](https://developers.google.com/style/)
- [Avoiding sexist language](https://www.hamilton.edu/academics/centers/writing/writing-resources/avoiding-sexist-language)
- [How to Design for Color Blindness](http://blog.usabilla.com/how-to-design-for-color-blindness/)
- [Disabling Ableist Language](https://www.copyediting.com/disabling-ableist-language/#.Wk6yeFQ-dE4)
- [Semantic Versioning](https://semver.org/)
- [How to add the missing Signed-off-by](https://github.com/src-d/guide/blob/master/developer-community/fix-DCO.md)

