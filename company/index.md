---
layout: section
sidebar: true
title: Our Company
---

This section sets out who we are as a company, where we've come from, how we want to be, and where we're going.


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
