Business model
---------------

This section of our guide functions as a snapshot of our latest thinking related to the business model of source{d}. This is a live document that will continue to grow as we learn more.

## Context related to our culture

> ‘We want to always remain a company that does everything with the individual developer in mind. Not the developer as an employee of a company, but the developer as an individual in the developer community.’ 

_source: [source{d}'s culture document](culture.md#for-developers)_

At source{d} we pride ourselves on always choosing to do what is best for the individual developer in the community. This principle is shared by our team members, our management team, the founders, our [advisors](investors_board_advisors.md#advisors), [board of directors](investors_board_advisors.md#board-of-directors) and [shareholders](investors_board_advisors.md#shareholders)).

When thinking about our business model, the most important question for us is: 

**By choosing to monetize in this manner, are we still doing what is best for the individual developer in the community?**

This means, for instance, that we will never release a core feature under a license that would not allow individual developers to benefit.

The only case where this would be acceptable if the feature was irrelevant to individual users and only beneficial to large enterprises.

## Background

Joseph Jacks (one of our advisors) maintains the [Commercial Open Source Software Index](https://docs.google.com/spreadsheets/d/17nKMpi_Dh5slCqzLSFBoWMxNvWiwt2R-t4e_l7LPLhU/edit#gid=0) where he tracks all companies built around open-source software that have >100mm annual revenue. 

Almost every single one of these companies follows what is called the [open-core model](https://en.wikipedia.org/wiki/Open_core). 

> Open core is a business model for the monetization of commercially produced open-source software. ...primarily involves offering a "core" or feature-limited version of a software product as free and open-source software, while offering "commercial" versions or add-ons as proprietary software.

It's important to note that while often proprietary means closed source code, it doesn't have to be. You can have your source code open to the world but with a restrictive license that for instance can only be used for academic research.

**Side-note:** as an organization we should never write/implement our own open source licenses, the community has already done a great job of creating and vetting a selection of licenses that are the status quo.

## source{d} business model

### Who do we want to target as customers?

To make sure we stay true to doing what is right for individual developers in the community, we do not want to charge any individual users.

We don't believe startups and SME's make up a large enough market to build a sustainable company in the long term. The amount you can charge to small organizations pales in comparission to what you can charge enterprises (value-add x # of developers). At the same time, selling to SME's is almost always a [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) business.  While there are success stories of this, such as [Travis CI](https://travis-ci.com/) we don't think it's the right route for source{d} at this moment in time. 

**source{d} focuses on enterprises as customers**

From the point of view of value we can add to an organization, source{d} really shows its power when there is a large amount of code and a large number of developers.

### Enterprises as customers

Today every large organization has become/is becoming a software company. The number of software developers in what were once considered traditional businesses, such as banks and airlines, is often already in the 1,000s or 10,000s.

There is a growing number of challenges that enterprises face within their [Software Development Life Cycle (SDLC)](https://en.wikipedia.org/wiki/Systems_development_life_cycle) that can be tackled with large scale language-agnostic analysis of their source code, and trained ML models.

### Business model meets our technology

The current model that we have implemented is to have single node versions of the source{d} Engine be fully open-source under [permissive licenses](https://github.com/src-d/guide/blob/master/engineering/licensing.md) but a multi-node installation of the source{d} Engine that allows distributed computing over a large amount of repositories with a large number of concurent users/queries to be proprietary. 

This allow us to charge enterprises who are in need for a large number of nodes but not disadvantage individual developers or smaller organizations to take advantage of our technology.
