---
layout: section
title: Our Company
---

This section sets out who we are as a company, where we've come from, how we want to behave, and where we're going.

- Our Ambition: Where we're heading
- Our Company Character: The things that people will notice about us and will distinguish us from others
- Our Working Principles: The 
- Our Business Objectives
- Our History



All pages in this section:
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
