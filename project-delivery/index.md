---
layout: section
title: Project Delivery
---

This section sets out how we deliver projects.

{% comment %}
  The code below dynamically generates a list of pages with
  section = project-delivery in the front-matter.
{% endcomment %}

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.section == "project-delivery" %}
<a class="section-list" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}

<br/><br/>
SteveH's suggested menu:<br/><br/>
<a href="project-delivery-intro">Introduction to Project Delivery</a> - an introduction to Agile and how the roles in the team **[NEED INTRO TO AGILE]
**

<a href="initialising-a-project">Initialising a Project</a> - contacts, assessing suitability, monitoring costs

<a href="qms-controlling-documents-and-records">Project Documents, Templates and Controlling Documents</a> - where we keep and manage them

**Backlogs** - Managing product and sprint backlogs

**The Daily Standup** - what this is and how to join in

<a href="issue-and-risk-management">Risks and Issues</a> - logging, reviewing, managing and reporting

**Quality Control, Testing and Handling Non-Conformities** - Bugs, what to do and steps to prevent them

**Sprint Reviews, Retrospectives and Reporting** - Reviewing, improving and reporting progress

**Customer Complaints** - Carefully handling sensitive issues

**Hosting & Support** - arranging hosting and handing over to support

**End of Project** - getting sign-off and assessing the project



