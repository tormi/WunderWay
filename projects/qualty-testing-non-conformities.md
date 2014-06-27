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

Code is fully tested prior to being released to live and to the environment in which the client will test. Because all products are different we define the necessary checks on a per-sprint basis and the checks are logged in the Quality Control spreadsheet which is stored in the backlogs folder in the project repository. A new tab can be created in the spreadsheet for each sprint. The actual quality controls will be largely based on that which is agreed and documented in the Project Initialisation phase. 

When going through the checklist, if any checks fail then we simply raise a bug (defect) in the backlog that captures the detail of what we were testing, what was expected and what actually happened. Where appropriate, we also record details of the environment and anything else that will help the developers recreate the problem so that a fix can be identified and implemented.

Quality Control Spreadsheet template:
<https://docs.google.com/a/wunderkraut.com/spreadsheet/ccc?key=0Ahb4YZjQwNDgdFdiMk9OYUNZQU5sNmpxX19hTzR5aFE#gid=0>

The general procedure for product testing is:

<ol>
	<li>All tasks relating to a story must first be complete before the story can be tested
	<li>The developer performs testing of the story based on the acceptance criteria (record in the user story if applicable) and the definition of done (stored in the Technical Documentation folder)
	<li>If the story passes the tests it is marked as passed/closed
	<li>The story is next tested by the WR test team (against acceptance criteria and the definition of done)
	<li>If the story passes the tests it is marked as passed/closed
	<li>The story is next tested by the client (against acceptance criteria and the definition of done)
</ol>

The purpose of the Definition of Done (DoD) is to specify the generic testing required for most stories. The DoD will include testing criteria for minimum browser requirements, mobile requirements and design requirements).

###Control of Non-Conforming Products and Corrective Actions

In the event that a bug, or non-conformity is found within a product, the details are fed back into the story and the story is marked as open. Because the number of stories accepted into a sprint is small we use the daily standups to report stories as having failed in testing. Details of non-conformities are kept within the story.

We work in small teams which makes the communication of non-conformities easy. As a non-conformity is discovered, whether by the WR test team or the client, the user story is updated  with notes about the issue.
<ol>
	<li>During testing a non-conformity is discovered
	<li>Where possible the root cause is determined (product non-conformities usually require the skills of a programmer to identify)
	<li>Details of the non-conformity are recorded against the user story
	<li>The story is passed back to the developer who originally created the functionality
	<li>The fix is implemented and the story is passed back through the full Quality Control and Testing process
	<li>If specific acceptance requirements are improperly worded these can be update in the user story
	<li>The cycle continues until all parties are able to mark the story as closed/passed
	<li>If the root cause of the non-conformity is determined to be something that can be prevented from occurring again this is raised as a QMS Change Request
</ol>

If the testing of a particular story proves to be problematic this can be raised during the daily standup. It’s up to the Scrum Master to identify the issues related to this and to implement steps to resolve.

###Preventive Actions

At the end of every sprint we hold a Sprint Review and a Sprint Retrospective. During these sessions we look at the issues related to the sprint in order to mitigate the risk of them occurring again and to help the efficiency of future sprints.

In the event of a plan being identified to prevent a non-conformity or issue occurring again:
<ol>
	<li>Record the findings as a QMS Change Request
	<li>Follow up the change request with the QMS Manager if this is considered a priority
	<li>Report the request to the Scrum Master to ensure that it’s followed up as necessary
	<li>Discuss the change (if accepted) during the next Sprint Retrospective
</ol>

Some non-conformities are identified during a sprint or other times. In these cases we use the QMS Change Request log to record the issue. The procedure is:
<ol>
	<li>The request is recorded and owned
	<li>The request is reviewed to identify whether the QMS is at fault or whether it was a human error
	<li>The request is assessed for priority, impact and value
	<li>Preventive action (procedure review, communication) is implemented if necessary
	<li>Corrective action (training, communication) is provided if necessary
</ol>
