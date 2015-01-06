---
layout: section
title: Skills
---

This section sets out the skills that we need to deliver our work successfully:

{% comment %}
  The code below dynamically generates a list of pages with
  section = how in the front-matter.
{% endcomment %}

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.section == "skills" %}
<a class="section-list" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}
