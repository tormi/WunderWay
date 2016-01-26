---
layout: page
section: projects
categories: Admin
tags:
title: Quality, Testing and Non-Conformities
---
###Quality Control and Testing
During each sprint, code is developed locally, a merge request is made by the developer and the lead developer will then merge that code into the main repository.

Before the merge is allowed to happen there are checks required to ensure that the code being merged is of the standard required.

Quality control can cover the following items:

<ul>
	<li>Acceptance criteria
	<li>Code review
	<li>Design standards (branding, responsive design etc)
	<li>Performance
	<li>Definition of done
	<li>Security testing
	<li>Scalability testing
</ul>

Acceptance criteria is written into each user story and is used during User Acceptance Testing (UAT) when checking the functionality attached to the code.

The code review is performed by the lead or senior developer to check that it has been well written and is efficient.

Code is fully tested prior to being released to live and to the environment in which the client will test. User stories are tested against the Definition of Done (recorded in the project's *backlog* folder). The actual quality controls will be largely based on that which is agreed and documented in the Project Initialisation phase.

When testing, if any checks fail then we simply raise a bug (defect) in the backlog that captures the detail of what we were testing, what was expected and what actually happened. Where appropriate, we also record details of the environment and anything else that will help the developers recreate the problem so that a fix can be identified and implemented.

The general procedure for product testing is:

<ul>
	<li>All tasks relating to a story must first be complete before the story can be tested
	<li>The developer performs testing of the story based on the acceptance criteria (record in the user story if applicable)
	<li>If the story passes the local tests it is marked as completed in Rally and a pull request is created
	<li>Another developer on the project team reviews the pull request and pushes the update to staging once it's passed
	<li>The story is next tested by the WR test team on staging
	<li>The story is next tested by the client
	<li>Once testing is complete the story is pushed to production and tested again by the client
</ul>

###Managing Defects
*Control of Non-Conforming Products and Corrective Actions*

When a story does not pass testing we record the details of the issue, re-work the story and re-test.

If a bug is found and is not related to a story in the current sprint then we raise a defect in Rally and move it to the backlog.

<ol>
	<li>During testing a bug is discovered
	<li>Where possible the root cause is determined and recorded in the user story or defect
	<li>The story is passed back to the developer who originally handled it
	<li>The fix is implemented and the story is passed back through the full Quality Control and Testing process
	<li>The cycle continues until all parties are able to mark the story as closed/passed
	<li>If the root cause of the non-conformity is determined to be something that can be prevented from occurring again this change request is raised as an issue in GitHub
</ol>

If the testing of a particular story proves to be problematic this can be raised during the daily standup to get the input of the wider team.

###Preventive Actions

We hold a Sprint Review and a Sprint Retrospective at the end of each sprint. The sprint review demostrates what we've completed in the sprint. The sprint retrospective is an opportunity for the team to look back at how they managed the sprint and to look for ways to improve.

When we identify a way to prevent a reoccuring problem we record the change request as an issue in GitHub to make sure it's reviewed and managed properly:
<ol>
	<li>Record the details as an issue in GitHub
	<li>Follow up the request with the [Keeper of the Way](/roles-and-responsibilities/) if this is considered a priority
	<li>Report the request to the Scrum Master to ensure that it’s followed up as necessary
	<li>Discuss the change (if accepted) during the next Sprint Retrospective
</ol>

The person managing the change request will be responsible for identifying the need for training or process amends and will communicate these as necessary.
