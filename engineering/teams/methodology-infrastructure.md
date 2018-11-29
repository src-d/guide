# Infra team methodology

## The main repository

Infra main repository is https://github.com/src-d/infrastructure. Since branches are to be shared, never rebase a branch from the main repository, only rebase your own fork's branches.

## The kanban

[Infra team kanban](https://github.com/orgs/src-d/projects/2) is the main tool to work in the team. Its main components and the method to pick issues are described in the [company methodology](https://github.com/src-d/guide/blob/master/engineering/methodology.md#kanban).

* Never forget to assign to yourself the issue you're working in
* Never forget to use the **BLOCKED** label if something is waiting for someone or something

A few notes particular to the infra team follow:

### TODO

Elements aim to be ordered, so they should be picked from top to bottom. This is the only place where items are ordered as this list is curated by the team lead following the needs of the projects.

### Development

Nothing particular here


### PR

An issue sent to PR must contain code and instructions to deploy. Instructions to deploy should be written in the issue, not in the pull request as multiple pull requests can be part of the same issue. A reviewer must take into account both code and deploy instructions.

An issue moved to PR must have been tested prior of that. The amount of testing will be different in each case, but it is expected a deployment working either in the staging or development environments. If that is not possible, the amount of testing done must be explicitly stated in the issue.

Once reviewed, if no further review is needed, the issue will be moved to the deployment column **without being merged**. If further review is needed, then the issue should remain in PR. In order to speed up things, if the reviewer knows the person that should review the issue, mentions should be used. If the reviewer finds that changes should be made to either the code or deployment instructions, the issue will be placed back to Development and reassigned to the original developer (unless long vacations make that impossible).

As a gesture to the reviewer, use separate commits to address different comments and never push force in a branch coming from the main repository.

### Deployment

Unless the deployment hasn't been tested, is especially complicated or the reviewer doesn't feel comfortable at all doing it, the reviewers can deploy the issue themselves.

An updated master must always be merged in the branches with code to deploy. Never rebase a branch that comes from the main repository. Once successfully deployed, branch commits should be squashed in the minimum amount of commits that are helpful. We will consider in the future to do squash merges.

### Done

Nothing particular here

## Infra meetings

To be held every Tuesday. We will review the week's issues.

## Creating issues

Infra work is quite prone to [yak shaving](https://seths.blog/2005/03/dont_shave_that/). At some point we have to compromise to have things done instead of having them done perfectly. Please create issues with things that you have identified and assign them to the project. The lead will eventually place them in Backlog or even in TODO if they're important enough.

Please write proper and detailed issues descriptions that are helpful to whoever will be working in that issue at a later time, but in case of hurry, it is always better to create the issue and fill it at a later time than waiting to have the time to do all that and finally forget about the issue.
