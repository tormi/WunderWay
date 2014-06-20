---
layout: section
sidebar: true
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