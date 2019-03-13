Machine Learning (ML) team follows the [common methodology](https://github.com/src-d/guide/blob/master/engineering/methodology.md) shared by
the rest of the teams, with the following additions:

- We meet twice a week, on Tuesday and on Thursday, to sync and discuss the status.
- We meet once per month to do middle-term planning of the [OKRs](https://github.com/src-d/okrs) fulfillment. We fuse that meeting with a retrospective.
- We minute every meeting, whether it is with people from academia or internal. The up-to-date order of scribes is in [ml-backlog](https://github.com/src-d/ml-backlog#minutes-scribe-order), they are chosen round robin.
- We post our [OSD](../../talent/open_source_days.md) plans to 🔑`#osd` channel on Slack in the morning.
- We mention the URLs of the issues/PRs we work on in our daily Geekbot standups.
- We passionately, thoughtfully follow the [Python style guide](../conventions/python.md).
- We do **not** use Anaconda.
- All the team is running on Ubuntu. You can use other OS if you like adventures and want to spend time on solving unavoidable compatibility problems.
- We ping the Lead or the maintainer every few hours in DM if there is a review-pending PR which is blocking.
- We do Research Days, see the corresponding section below for details.
- We write our papers in [Overleaf](https://overleaf.com) and post them to 🔑[src-d/papers](https://github.com/src-d/papers) once written.
- We put all the code related to the paper (plot generation, stats computation, etc) into 🔑[src-d/papers](https://github.com/src-d/papers), too.
- We describe our bright ideas in 🔑[src-d/feature-idea](https://github.com/src-d/feature-idea).
- We do not forget to ask the Lead for extra days off if we had to work on the weekends.

## Interviews

This part is classified, unfortunately. It should describe our ML interview process. Refer to 🔑[src-d/company](https://github.com/src-d/company/tree/master/interviews/engineering).

## Research Day

Once per two weeks, on Fridays, the same day as the [paper reading club](https://github.com/src-d/reading-club),
we run Research Days (RD). The purpose of RDs is to stay aware of the latest research and encourage experiments with MLonCode.
Here is the list of things which may be done on a RD:

- Read papers. The papers **must** be announced on the previous day in `#machine-learning` community Slack channel. The paper summaries **must** be posted to [shortscience](https://www.shortscience.org/).
- Write papers, blog posts.
- Reproduce papers, the topic must be either MLonCode or generic ML.
- Research coding experiments. That is, working on regular software is discouraged, there are OSDs for that.
