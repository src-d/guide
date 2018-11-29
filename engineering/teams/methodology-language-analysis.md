# Methodology for Language Analysis team

Language Analysis (LA) team follows the [common methodology](https://github.com/src-d/guide/blob/master/engineering/methodology.md) shared by
the rest of the teams.
Apart from that, it also uses [Github's project boards](https://help.github.com/articles/about-project-boards/)
to organize the tasks and prioritize them.

Since LA team is responsible for repos in two different organizations
([bblfsh](https://github.com/bblfsh) and [src-d](https://github.com/src-d/)),
it has two different project boards,
a [bblfsh project board](https://github.com/orgs/bblfsh/projects/1)
and a [src-d](https://github.com/orgs/src-d/projects/3) project board.

## Adding issues to the project board

New issues for LA maintained projects can be created in different ways,
which determines how issues should be added to the project board:

* An issue is created during planning, or it's in the backlog.
  The issue should be added to the project during planning.
  It may also be added either to the *To Do* column if the issue
  should be solved during the current sprint or to the *Pending* column if not.
* An issue is created outside planning (by team members, external users, etc.).
  The repo maintainer is responsible of adding the issue to the project,
  and to do the proper bug triage.
  The issue could be added to any relevant column,
  which may be *Pending* if it's not expected to be solved during the sprint.
* A pull request is created.
  The repo maintainer is responsible of adding the issue to the project.
  It should also be added to the *PR* column.

## Moving issues in the project board

The issue status should be kept updated using the different board columns:

* *Pending*. This issue is not expected to be solved in the current sprint.
* *To Do*. This issue should be solved in current sprint,
  but work has not started yet.
  Issues in this column can be prioritized.
* *In Progress*. This issue is in progress. It should be assigned at this point.
* *Blocked*. This issue depends on some other issue or some design decision
  that has not been solved yet.
* *PR*. This is either a pull request, or an issue which is solved by some pull request.
* *Done*. The issue is solved / pull request is merged.
* *Invalid*. The issue / pull request is considered invalid and it's not going to be solved.
* *Old Done*. Invalid or done issues are moved to this column after the sprint review.

*Done* and *Invalid* columns are added for visibility and further discussion
during next sprint planning, if needed.
Once reviewed during planning, they should be moved to *Old Done*.
