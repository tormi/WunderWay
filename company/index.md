---
layout: section
title: Our Company
---

This section sets out who we are as a company, where we've come from, how we want to be, and where we're going.


- (Our Ambition)[/company/ambition]: What we aspire to achieve as a company.
- (Our Character)[/company/character]: How we want to known by our clients and colleagues.
- (Our Principles)[/company/principles]: Some guiding principles for how we want to work.





Below is a list of all pages tagged for this section, including those not yet listed in the main contents above:

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
