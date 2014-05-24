---
layout: section
title: Our Company
---

why we exist, what we're aiming for, why we want to work in certain ways


{% comment %}
  The code below dynamically generates a list of pages with
  section = company in the front-matter.
{% endcomment %}

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.section == "company" %}
<a class="section-list" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}
