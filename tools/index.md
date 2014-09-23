---
layout: section
title: Tools
---

This section sets out the tools that we use to deliver our work successfully.

- Consultancy tools
-- Process mapping workshop
-- Large group brainst
- UX Research tools
-- User personas
-- 
- Project Management tools
-- Steering Group
- Technical delivery tools
- Testing tools
- 


All pages in this section:

{% comment %}
  The code below dynamically generates a list of pages with
  section = how in the front-matter.
{% endcomment %}

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.section == "tools" %}
<a class="section-list" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}
