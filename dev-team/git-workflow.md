# source{d} Engeneering git Workflow

![Image](/dev-team/srcd-flow.png?raw=true)

----------

#### 1. Create feature branch / hotfix branch
On your fork, create a new branch off the latest upstream master branch
commit of the repository you need to work on.
Naming of branch is arbitrary.

#### 2. Development and commits
Work on your feature / hotfix branch. Be smart when creating commits:
too many commits clutter and clog the git history, making it hard to
follow. Too little commits make commits excessively large and difficult
writing descriptive commit messages.

#### 3. Merge with release branch 
(See 5. for hotfix branches) Merge your feature branch onto the
existing release branch. If conflicts prevent clean merger, rebase your
feature branch against the tipo of the current release branch and solve
conflicts (suggestion: use a git mergetool). If no release branch exists,
create it from latest master commit.

Semantic versioning rules apply for release branch name, name of branch
should be "X.Y": in case of breaking changes, the major version
**must** be increased, else minor version only.

**Only one release branch can exist for each repo at a given time.**

#### 4. Merger with master tag creation
When merging release branch with master branch, delete release branch
and tag merge commit with "X.Y.0". In case of conflicts preventing
merger (e.g. in case of hotfixes having been applied since release
branch creation), rebase against tip of master (suggestion: use a git
mergetool).

#### 5. Hotfixes
When needing to create hotfixes, follow steps 1. and 2. and merge
directly onto master. When doing so, create a tag on the merge commit
increasing 3<sup>rd</sup> level version number of latest tag (e.g.
"X.Y.0" => "X.Y.1"). In case of conflicts preventing merger (e.g. in case
of hotfixes having been applied since current hotfix branch creation),
rebase against tip of master (suggestion: use a git mergetool).
