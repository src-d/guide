# Engineering methodology

Date: 2018-01-15

* [Intro](#intro)
* [OKRs](#okrs)
* [The Big Change](#the-big-change)
* [Kanban](#kanban)
  * [Company Kanban](#company-kanban)
  * [Team Kanban](#team-kanban)
    * [How to pick next issues to worked on?](#how-to-pick-next-issues-to-worked-on)
* [Leads Meeting](#leads-meeting)
* [Team Meeting](#team-meeting)
* [Standup](#standup)
* [Demo](#demo)
* [Keeping track of things](#keeping-track-of-things)
* [Definitions](#definitions)
  * [What does TODO mean?](#what-does-todo-mean)
  * [What does Done mean?](#what-does-done-mean)
  * [What does Blocker mean?](#what-does-blocker-mean)

## Intro

These are the notes from:

* 2017-01-09 Scrum of Scrums
* 2017-01-10/11 Workflow discussions

Meetings for the Engineering team leads at source{d}.
It’s the replacement for the [previous workflow](https://github.com/src-d/guide/blob/abe7932e3bc58898e49a5c1c0e3e2cac6d387144/engineering/methodology.md) with SCRUM

## OKRs

Company publishes OKRs every quarter.

2018Q1 OKRs in https://github.com/src-d/guide/blob/general/OKRs/README.md

Each team is expected to publish it’s own OKRs, aligned with the company ones.
Engineering roles are not expected to have individual objectives.

## The Big Change

In 2018Q1 SCRUM is replaced by a simpler, company and team-level Kanban boards,
so that all iterations including planning/work/retrospective do not happen
synchronously at the same weeks for all the teams.

Meetings for high-level sync including product direction, vision, etc are
proactively scheduled by each Team Lead as needed. All Leads have periodical
hands-on meetings with the CTO.


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
TODO        |
In Progress |
Done        |

### Team Kanban

Column           | Description
-----------------|------------
Backlog          | Break-down of the Epics for each product on actual tasks
TODO             | Tasks from backlog that are immediately ready to be acted on. Grooming a backlog to update this column is expected to be done on a daily basis by the Lead. See the Definition of TODO section below.
Development      | Assigned task from TODO that time has been spent up on.
Code Review (PR) | Issues that have PRs and are ready for Code Review.
Deploy/Release   | Things that are implemented/merged, but have not yet been “delivered” to the users. This can be seen as a next release “backlog”. Release itself, although is not trivial and is documented <elsewhere>, is not expected to be handed in a separate issue.
Done             | A task is done, when  a user can use the results of the work though established interface: package manager for libs, online for web services, etc. See the section below [What does TODO mean?](#what-does-todo-mean).

On *"blockers"* - a task can be blocked at any stage of the development, so
there is no separate column and Tag is used instead, to signify if something is
blocked.

More details in [Definition](#definition) section below.

### How to pick next issues to work on?

Each team decides what works best for them. One effective way is picking tasks
from **right to left** in the Kanban board, choosing from those issues that are
neither assigned to someone nor blocked. A single person should not be in charge
of delivering the whole issue from Development to Done. In that way knowledge is
better spread across the whole team.

For this to work properly, issues must be documented so that a person can move on with the issue, reading what has been done.


## Leads Meeting

Same as something called SoS (Scrum of Scrums) before - a weekly meeting on Tuesdays 14:30 the CTO
and all team leads to catch up on ongoing progress.

Each team lead will prepare:

* Review on what has been worked last week
* What are the things we are looking forward to? (re-prioritize things)
* Pitch new ideas from our workflow

Then grooming company’s backlog/epics from [Company Kanban](https://github.com/orgs/src-d/projects/9) is conducted.

## Team Meeting

A Bi-weekly meeting of the CTO with the team lead and optionally with the full
team (to be decided by the lead), in order to comment the status of the
projects. Scheduled with each team individually by CTO.

## Standup

All standups are happening online and asynchronously, per-team in appropriate
`su-*` Slack channels.

## Demo

Demo meeting is a monthly event.

* Idea: let know everybody what's going on (on quite technical level) that's is relevant for other or affect others releases/deployments.
* Product does not need to be deployed, but the demo should be as real as possible.
* Should be concise, respecting other people's time.
* Fixed max time **per-team: 15min (including questions)**. Agree between teams in advance, if more time needed.

## Keeping track of things

Github Projects board will used as a Kanban board.

Teams managing issues across Github Org borders (Applications, Language Analysis) will use the “add card”  trick, described in dear-github/dear-github#209 to  add issues from different org  to the team’s board.

Issues repositories:

* [src-d/issues-general](https://github.com/src-d/issues-general) - should be used more, as place for feedback/requests (i.e website, etc)
* [src-d/issues-infrastructure](https://github.com/src-d/issues-infrastructure) - issues/requests to Infrastructure team must be created here.

# Definitions

Below, we'll define the meaning of each Kanban column.

This is not mere a formality - it’s important to have same things in mind when
moving work from one state to another and what is documented below is a
consensus, that took few hours to build among Engineering leads.

## What does TODO mean?

Something an engineer can immediately take and act up on. If the task is not
possible to start until another (well-known) task is finished first, this task
shall not be in TODO yet.

*Rationale* there are 2 goals we want to keep in mind, while working with Kanban
board:

* as small TODO list on a Kanban as possible and
* tasks, moving fast from end-to-end of kanban board (short Cycle Time)

This definition and goals also imply that leads should grooming backlog on the
daily basis.

> Alternative definition (discussed but discarded): all things that are planned to get done ASAP. This would imply that issues can be added to TODO in a bulk at once, even in case when multiple issues of single project have known dependency on one another. Was discarded on the premise that it would go against the 2 goals, listed above.

## What does Done mean?

General mindset: Done always means that a user, both inside and outside src-d,
is able to use it through well-established interfaces. Detailed definition may
vary per-team.

Few concrete examples, in case of work done on:

* Golang library - it should be possible to use them though the particular version published on gopkg.in
* Scala library - it should be possible to use from Maven/sbt build
* Web site/application - should be accessible through a known (staging/production) environment URL
* etc


## What does Blocker mean?

*General mindset*: blocker means something **unexpected has happened**

Obvious/expected dependencies between sequence of tasks don’t need to be marked
as blocked.

Issues from backlog that can not be done, due to **a known dependency** should
**never** go into the TODO column (thus avoid being blocked). I am not able to
work on it anymore, because it needs something done to move forward.

Things that are not *blockers*:

* change of priority (stop working on something for now)
* a known, planned and expected issue (i.e dependency on another team’s work, that is handled in another issue
