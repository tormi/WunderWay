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

<br/><br/><br/>
SteveH's suggested menu:<br/><br/>
**Introduction to Project Delivery** - a quick summary of how we manage project delivery

**Initialising a Project** - contacts, assessing suitability, monitoring costs

**Project Documents, Templates and Controlling Documents** - where we keep and manage them

**Backlogs** - Managing product and sprint backlogs

**The Daily Standup** - what this is and how to join in

**Risks and Issues** - logging, reviewing, managing and reporting

**Quality Control, Testing and Handling Non-Conformities** - Bugs, what to do and steps to prevent them

**Sprint Reviews, Retrospectives and Reporting** - Reviewing, improving and reporting progress

**End of Project** - getting sign-off and assessing the project



