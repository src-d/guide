# Project Maintainers

## General Guidelines

* Every GitHub repository must have an assigned maintainer.
* Maintainer is specified in a MAINTAINERS file in the top level directory as follows: `Full Name <email> (@github_handle)`
* Maintainers are in charge of:
  * [Release Management](releases.md): tagging, release notes, deciding on versioning, etc.
  * Code Review pull requests.
  * Ensure that issues get handled.
  * Ensure that good practices are followed and that there is consistency among the code base.

## Code Review

* A maintainer should review every PR but can ask for additional reviewers as needed (e.g. someone else is more knowledgeable about a change or has a say as stakeholder) or completely delegate the review.
* In order to request a code review, the maintainer can [add reviewers](https://help.github.com/articles/requesting-a-pull-request-review/) in GitHub UI
* Non-maintainers at source{d} are not expected to do code review on PRs they are not asked to as a general practice.  However, they are allowed to at their discretion if they think it's appropriate on a specific case.
* Desirable deadline for each code review is 1 working day.
* If there is a disagreement among the PR author and multiple reviewers and consensus cannot be reached or [it's not worth to reach](http://bikeshed.org/) the maintainer has the final word.
* A maintainer can merge his own PRs without code review, but it is encouraged to ask for a review  Merging without review, if done, should be reserved to fixing typos or minor maintenance tasks.

## Issues

* Maintainers should review GitHub issues and answer them in less than a working day. An answer might be just a "Thank you, we'll look into it" as minimum.
* If an issue cannot be fixed immediately, it should be added to the backlog so that it gets planned in next sprint.

## Backups

* If a maintainer is missing, the Lead of the team that the project is owned by, or a backup maintainer designated by him will act as maintainer.
