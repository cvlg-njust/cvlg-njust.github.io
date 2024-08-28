---
title: Team
nav:
  order: 2
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}


{% endcapture %}

{% include section.html %}

{% assign roles = "prof,phd,ra,ms,alu" | split: "," %}

{% for role in roles %}
  <h2>{{ role | capitalize }}</h2>
  {% assign filtered_members = "members" | where: "role", role %}
  {% assign sorted_members = filtered_members | sort: "year" %}
  
  {% for member in sorted_members %}
    {% include list.html data=member component="portrait" %}
  {% endfor %}
{% endfor %}

{% include section.html background="images/computer_vision.jpg" dark=true %}

Team second part test

{% include section.html %}



{% include grid.html style="square" content=content %}
