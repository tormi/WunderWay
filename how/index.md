---
layout: section
title: How
---


    {% comment %}
      The code below dynamically generates a list of pages with
      `section: how` in the front-matter.
    {% endcomment %}

    {% assign pages_list = site.pages %}
    {% for node in pages_list %}
      {% if node.title != null %}
        {% if node.section == "how" %}
          <a class="section-list{% if page.url == node.url %} active{% endif %}" href="{{ node.url }}">{{ node.title }}</a>
        {% endif %}
      {% endif %}
    {% endfor %}