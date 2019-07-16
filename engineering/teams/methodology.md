
# Internal Team methodology

Date: 2018-29-11

* [Intro](#intro)
* [Definitions](#definitions)
  * [What does TODO mean?](#what-does-todo-mean)
  * [What does Done mean?](#what-does-done-mean)
  * [What does Blocker mean?](#what-does-blocker-mean)

## Intro

As guidance to the Leads, this document exposes the agreement about how to apply Kanban for the internal organization of the team. Every team can base their Kanban on this document or create their own version.

Github Projects board will used be as a Kanban board.

Teams managing issues across Github Org borders (Applications, Language Analysis)
will use the “add card”  trick, described in [dear-github/dear-github#209](https://github.com/dear-github/dear-github/issues/209#issuecomment-357692288) to add
issues from different org to the team’s board.

Issues repositories:

* [src-d/issues-general](https://github.com/src-d/issues-general) - should be used for general feedback/requests (e.g., about the website)
* [src-d/issues-infrastructure](https://github.com/src-d/issues-infrastructure) - issues/requests to Infrastructure team must be created here.

# Definitions

Below, we'll define the meaning of each Kanban column.

This is not mere a formality - it’s important to have same things in mind when
moving work from one state to another and what is documented below is a
consensus, that took few hours to build among Engineering leads.

## What does TODO mean?

Something an engineer can immediately take and act upon. If the task is not
possible to start until another (well-known) task is finished first, this task
shall not be in TODO yet.

*Rationale* there are 2 goals we want to keep in mind while working with Kanban
board:

* as small TODO list on a Kanban as possible and
* tasks should move quickly from end-to-end of the Kanban board (short Cycle Time)

This definition and goals also imply that leads should be grooming the backlog on a
daily basis.

> Alternative definition (discussed but discarded): all things that are planned to get done ASAP. This would imply that issues can be added to TODO in a bulk at once, even in case when multiple issues of single project have known dependency on one another. Was discarded on the premise that it would go against the 2 goals, listed above.

## What does Done mean?

General mindset: Done always means that a user, both inside and outside src-d,
is able to use it through well-established interfaces. Detailed definition may
vary per-team.

A few concrete examples:

* Go library: it should be possible to use the library though the particular version published on `gopkg.in`
* Scala library: it should be possible to use the library from a Maven/sbt build
* Website or application: it should be accessible through a known (staging/production) environment URL
* etc


## What does Blocked mean?

*General mindset*: blocked means that the development on some task was stopped because something **unexpected has happened**

Obvious/expected dependencies between sequence of tasks don’t need to be marked
as blocking.

Issues from backlog that cannot be done, due to **a known dependency** should
**never** go into the TODO column (thus avoid being blocked).
Otherwise the work on that issue could not be started anymore, because it needs something done to move forward.

Other things that are not *blockers*:

* change of priority (stop working on something for now)
* a known, planned and expected issue (i.e dependency on another team’s work, that is handled in another issue




## Kanban

The kanban board is a tool used to visualize work and optimize the flow of the work
among the team. ([source](https://www.atlassian.com/agile/kanban#kanban-boards))

The kanban relies upon full transparency of work and real-time communication of
capacity, therefore the kanban board should be seen as the single source of
truth for the team's work.

The kanban columns are defined as follows:

### [Company](https://github.com/orgs/src-d/projects/9) Kanban

Column      | Description
------------|------------
Backlog     | Only contains Epics and user stories.
TODO        | Issues that are able to make progress, but are not being worked on yet.
In Progress | Issues that are actively being worked on.
Done        | Issues that are complete (as described above).

### Team Kanban

Each team uses separate [Github Projects](https://github.com/orgs/src-d/projects/) as a Kanban board.

Teams managing issues across different Github Orgs (i.e Applications, Language Analysis) are using the “add card” trick, described in [dear-github/dear-github#209](https://github.com/dear-github/dear-github/issues/209#issuecomment-357692288), to add issues from a different org.


Column           | Description
-----------------|------------
Backlog          | Break-down of the Epics for each product on actual tasks
TODO             | Tasks from backlog that are immediately ready to be acted on. Grooming a backlog to update this column is expected to be done on a daily basis by the Lead. See the [Definition of TODO](#what-does-todo-mean) section above.
Development      | Assigned task from TODO that is actively being worked on.
Code Review (PR) | Issues that have PRs and are ready for Code Review.
Deploy/Release   | Things that are implemented/merged, but have not yet been “delivered” to the users. This can be seen as a next release “backlog”. Release itself, although is not trivial and is documented <elsewhere>, is not expected to be handed in a separate issue.
Done             | A task is done, and a user can use the results of the work though an established interface: a package manager for libraries, online for web services, etc.

On *"blockers"* - a task can be blocked at any stage of the development, so
there is no separate column and Tag is used instead, to signify if something is
blocked. See the section above [What does Blocked mean?](#what-does-blocked-mean).

More details in [Definition](#definition) section above.

### How to pick next issues to work on?

Each team decides what works best for them. One effective way is picking tasks
from **right to left** in the Kanban board, choosing from those issues that are
neither assigned to someone nor blocked. A single person should not be in charge
of delivering the whole issue from Development to Done. In that way knowledge is
better spread across the whole team.

For this to work properly, every issue should be properly documented so any person can move on with every issue, reading what has been done.
