---
layout: section
title: Projects
---

This section sets out how we deliver projects.

- Startup

-- [Initialising a Project](/projects/initialising-a-project)

- Discovery
-- User Research
-- Stakeholder Research
-- Other Research
-- Backlog Development
-- Risk Management
-- Quality Management

- Delivery
-- Phases: Alpha, Beta, Live
-- Sprints
--- Sprint Planning
--- [Daily Standup](/projects/daily-standup)
--- [Sprint Review](/projects/sprint-review)
--- [Sprint Retrospective]()
-- Stakeholder communciation
-- User Testing
-- Risk Management
-- Quality Management


- Delivery Workflow
-- 
-- Backlog Development


{% comment %}
  The code below dynamically generates a list of pages with
  section = project-delivery in the front-matter.
{% endcomment %}

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.section == "projects" %}
<a class="section-list" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}

<br/><br/>
SteveH's suggested menu:<br/><br/>
<a href="project-delivery-intro">Introduction to Project Delivery</a> - an introduction to Agile and how the roles in the team

<a href="initialising-a-project">Initialising a Project</a> - contacts, assessing suitability, monitoring costs

<a href="qms-controlling-documents-and-records">Project Documents, Templates and Controlling Documents</a> - where we keep and manage them

<a href="delivering-a-project">Backlogs</a> - Managing product and sprint backlogs

<a href="daily-standup">The Daily Standup</a> - what this is and how to join in

<a href="issue-and-risk-management">Risks and Issues</a> - logging, reviewing, managing and reporting

<a href="qualty-testing-non-conformities">Quality Control, Testing and Handling Non-Conformities</a> - Bugs, what to do and steps to prevent them

**Sprint Reviews, Retrospectives and Reporting** - Reviewing, improving and reporting progress

**Steering Group** - how this is involved in the project

**Customer Complaints** - Carefully handling sensitive issues

**Hosting & Support** - arranging hosting and handing over to support

**End of Project** - getting sign-off and assessing the project



