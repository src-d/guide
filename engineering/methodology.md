# Engineering Methodology

Date: 2017-05-09

## Intro

These are the notes from
 - 2016-09-12 Scrum/OKR
 - 2017-05-08 Sprint #13 Retrospective

meetings for the Engineering team at source{d}.

## OKR

- Officially, engineering grunts will not have Objectives, although they can
  create their own.  This has to do with how to mix SCRUM and OKRs properly.
  The details about this are still not defined, @mcuadros has to talk with
  @jorgeschnura to see how to best fit SCRUM and OKR.

## SCRUM

- We will be having different SCRUMS per team as we are so many now.

- Sprints will last 2 weeks.

- **Goal of the Sprint**: deliver something usable by the end of it.

- Tools: up to a team to decide. But backlog should be is in GH issues.


```
SM = Scrum Master
PO = Product Owner
```

Team          | Roles                   | Sprint length | Sprint Planing
--------------|-------------------------|---------------|---------------
Platform      | SM:Sergio, PO: Marcelo  | 1w            | Monday, 09:30
Data Retrieval| SM:Santiago, PO: Maximo | 2w            | Tuesday,10:00
ML            | SM:Vadim, PO: Maximo    | 2w            | Monday, 11:30
Infra         | SM:Maximo, PO: Maximo   | 2w            | Monday, 15:00

*General Standup*: 10:30 @ Margaret Hamilton room


### Standups
Every day, except for OSF and Planing.

Team          | Time      |  Room
--------------|-----------|-------------
Platform      | 10:00     | Ada Lovelace
Data Retrieval| 10:00     | Margaret Hamilton
ML            | 10:15     | open space
Infra         | ???       | Margaret Hamilton


### Planning

Planning meetings

  + It is really a planing DAY, not just a meeting:

    * There will be a 1 hour long kickoff meeting at 10:00 (first team) and
      11:00 (second team)

    * The rest of the day, the team will think about proposed sprint plan and
      decide if it is doable.

         - leads review backlog before the planning
         - read backlog
         - agree on scope of sprint
         - estimate

    * There will be a close meeting at 17:30 (first) and 18:00 (second) to confirm
      the sprint plan.

  + All OKR objectives for each team member will be covered in the planning.


### Deployment

  + Deploying may not make sense for some teams, i. e. Data Science and Devops.

  + Tools and Data Retrieval will deploy on Mondays, after the end of an sprint,
    as they don't have the planing meeting until Tuesday.

### Demo

Demo meetings

  + Idea: let know everybody what's going on (on quite technical level).

  + At the end of each sprint: Fridays 13:30.

  + Product does not need to be deployed, but the demo should be as real as
    possible.

  + It's for eng team and stakeholders: POs, Mgt team (Jorge, Eiso, Marge, Maximo, Marcelo).

  + Should be concise, respecting other people's time.

  + Fix max time per-team **total: 90min**, **per-team: 20min (15/5 questions)**.

  +  Agree between teams in advance, if more time needed.


### Retrospectives

  + Starting at the end of the second sprint, one every other sprint.

  + Every 2nd week of sprint, on Fridays after the [sprint demo](https://github.com/src-d/guide/blob/master/engineering/methodology.md#Demo).

### Keeping track of things:

  + Publicly: a Kanban board on-line.

  + Per team: any way team sees fit (github issues, github projects, waffle.io...).

  + [src-d/issues-general](https://github.com/src-d/issues-general) - should be used more, as place for feedback/requests (i.e website, etc)

  + [src-d/issues-infrastructure](https://github.com/src-d/issues-infrastructure) - issues/requests to Infrastructure team must be created here.


### Sprint extensions
 - we need to schedule extensions in advance, in a more predictable fashion
 - it affects both Planing and OSF

### What does it mean something is done?

  + Team by team answer.
  + Redirect people requests uphill to avoid getting unplanned work during the sprints.
