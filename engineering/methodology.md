# Engineering methodology

Date: 2018-11-29

* [Intro](#intro)
* [OKRs](#okrs)
* [Backlog and Features-Idea repositories](#backlog-and-features-idea-repositories)
* [Leads Meeting](#leads-meeting)
* [Team Sync Meeting](#team-sync-meeting)
* [Standup](#standup)
* [Demo](#demo)
* [Retrospective Meeting](#retrospective-meeting)

## Intro

This methodology's an evolution of [previous workflows](https://github.com/src-d/guide/blob/abe7932e3bc58898e49a5c1c0e3e2cac6d387144/engineering/methodology.md) and experiences, it is constantly evolving and open to change at any moment.

The current workflow is based on these main concepts:

* OKRs: company/team engineering OKRs are what should drive every single decision taken by the Engineering Team.
* A [Workflow](workflow.md) that defines the process of definition and development of the tasks, from the idea to the release.
* [Backlog](https://github.com/src-d/backlog) and [Features-Idea](https://github.com/src-d/feature-idea/) repositories, where approved user stories and feature ideas are tracked.
* Leads meeting to align all efforts done by the different teams at engineering every week.
* Demo, a company-wide presentation where all the new functionality and important changes are communicated to the company once they are done.
* Retrospective Meeting: a place to improve the methodology.

## OKRs

Every single decision made in the Engineering Team (and company-wide as well),
should be made aligned with the quarter's OKRs.

The company publishes OKRs every quarter at [OKRs](https://github.com/src-d/okrs).
The OKRs for the current quarter are hosted in the README.md file, the past
quarters can be found by their name in the same repository.

The OKRs are introduced and discussed via PRs to a feature branch and
merged once they are reviewed by management.

The Management Team defines the company OKRs and the high level OKRs,  meanwhile
the CTO and the Head of Architecture determine the Engineering Team OKRs
with the help of the rest of the members of the team.

Per-team OKRs are defined and published by the Lead of each team, aligned
with the company ones.

## Backlog and Features-Idea repositories

At source{d} we use git repositories as much as possible, that's why our source
of truth for the user stories and tasks are git repositories on GitHub, even
though those repositories don't contain any code.

The [Features-Idea repository](https://github.com/src-d/feature-idea) is the
place where everyone in the company can suggest new features, projects or
products to the Product Team/Engineering Team, this is done by creating an [issue](https://github.com/src-d/feature-idea/issues/new/choose) in the repository,
then the Product Team and CTO will review this at the Product Sync meeting that
happens once per week.

The [Backlog repository](https://github.com/src-d/backlog) contains the full
backlog for the Engineering Team and Product Team; these issues are managed by
the Head of Product and only they can create new issues there. Each issue in this repository represents an EPIC, and that EPIC should be linked to its Design
Document and its OKR. Every team involved in the development of that EPIC is
responsible for keeping it updated.

...

## Leads Meeting

It's a weekly event, where all Lead Engineers and Product meet to discuss
the current problems, and future developments which are relevant to the other
teams:

* Tasks where cooperation of other teams is required.
* Changes in the project's boundaries affecting other teams.
* Relevant questions regardless of other teams' projects.

If there are new design documents, they will be presented at the end of the Leads Meeting
with a brief explanation and the maintainer is chosen.

Presentation order is:

- Infrastructure
- Language Analysis
- Data Retrieval
- Data Processing
- Applications
- Machine Learning
- Product
- Engineering management (VP of Eng. and CTO)

Minutes will be taken according to this same order, in round robin. The scribe from one week will also make sure to ping the scribe for next week on the #team-leads Slack channel.

## Team Sync Meeting

A bi-weekly/weekly meeting between the VP of Engineering and the team lead and optionally with the
full team (to be decided by the lead), in order to comment on the status of the team's
projects.

At this meeting, new tasks are added to the team backlog and the current
developments are reviewed. Also, the current status of the team is discussed.


## Standup

All standups are happening online and asynchronously, per-team in the appropriate
`su-*` Slack channels. Standup reports are managed through Slack private messages with [geekbot](https://geekbot.io/).

## Demo

Demo meeting is a monthly event.

* Idea: let everybody know what's going on (on quite a technical level) that is relevant for others or affects others’ releases/deployments.
* Product does not need to be deployed, but the demo should be as real as possible.
* Should be concise, respecting other people's time.
* Fixed max time **per-team: 15min (including questions)**. Agree between teams in advance, if more time needed.

## Retrospective Meeting

This methodology is reviewed every month in a meeting called Retrospective Meeting
which is inspired by the Scrum methodology:

* What went well?
* What needs improvement?
* Next steps

To learn more about retrospectives, please read:
https://www.atlassian.com/team-playbook/plays/retrospective
