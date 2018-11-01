# Git workflow

![Image](/engineering/images/git-flow-app.png?raw=true)

# How to add more code to the project

## 1. Create feature branch / hotfix branch
On your fork, create a new branch from the latest upstream master branch
commit of the repository you need to work on.

We do not enforce any particular branch naming policy, but we recommend using prefixes, like `fix`, `feature` or `improvement`, for example.

## 2. Development and Pull Requests
Work on your local repository as you see fit. When the time comes to make the PR, rearrange your commits to improve its readability: squash similar or related changes into individual commits and try to keep the overall commit count at a minimum.

### 2.1 Development on a library repository
In this specific case we want to develop a new version without changing the actual one in the master branch (because if we change the public API we can break projects that depend on us really quickly). To avoid that we will create a new branch named with the next library version, but with the `dev-` prefix (Example: `dev-v4.0.0`). This is intended to "break" semantic versioning, and do not create a version from this branch.

The reason of that is the way versioning works in go. Only the major version is set in the import URL (Example: `import gopkg.in/src-d/go-git.v4/`). Let’s say our master branch is version 4.0.0 and we want to start developing the version 4.1.0; if we create a branch with this name, automatically our v4 import will point to this new branch.

## 3. Code review and requested changes

- PRs will be reviewed by the project maintainer or a designated reviewer. [Read more about maintainers.](maintainers.md)

After a code review, add the requested changes in a new commit. This is useful
because it's possible to check again only the specific changes that the reviewer
requested. When your PR is approved, rearrange all the commits to have a descriptive history of your changes. Also rebase with master branch.

### 3.1 Avoiding cascading delays when submitting PRs that depend on one another
If you want to submit several PRs that depend on one another and you don't want to wait for the revisions of the former to submit the latter, you can, as an exceptional measure, submit them without waiting to rebase them against master, so each of them will depend on the changes of the previous ones.

Always add a comment to the Pull Request indicating that it depends on other PRs
that must be merged first.

To be able to merge this kind of Pull Request you need to know how to use the
`rebase -i` git command:

- (Maintainers only) Merge into master the first PR in the dependency chain.
- Because this PR is merged using squash, you need to rewrite your PR commit
history removing old commits from the previous PR and adding the squashed one from
master. Using `rebase -i` command is an easy task.

# How to create a new version (maintainers only)

## 1. Create a tag
In most of the cases we create a new tag from a master commit using [semantic versioning](http://semver.org/) with the `v` prefix: `v1.0.0`, `v1.0.3`, `v2.0.0-rc1`, and so on.

If we want to create a new major version that breaks the public API, we can create a tag from a specific branch.

If we want to create internal versions that we don't want to publish, we must add the `dev-` prefix to the branch with that version. Example: `dev-v4.1.0`. This avoids the
publishing of a new version, because this branch name does not accomplish [semantic versioning](http://semver.org/).
