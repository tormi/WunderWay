---
layout: section
title: Sub-directory
section: project-delivery
---

This section sets out how we deliver projects.

{% comment %}
  The code below dynamically generates a list of pages with
  section = project-delivery-subdirectory in the front-matter.
{% endcomment %}

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.section == "project-delivery-subdirectory" %}
<a class="section-list" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}