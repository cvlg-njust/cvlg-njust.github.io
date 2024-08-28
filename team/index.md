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
## Professor
{% assign professors = site.members | where: "role", "prof" | sort: "year" %}
{% for professor in professors %}
  <!-- 包含每个教授的信息 -->
  {% include list.html data=professor component="portrait" %}
{% endfor %}

## Ph.D. Candidates
{% assign phds = "members" | where: "role", "phd" | sort: "year" %}
{% include list.html data=phds component="portrait" %}

## Research Assistant
{% assign ras = "members" | where: "role", "ra" | sort: "year" %}
{% include list.html data=ras component="portrait" %}

## M.S. Candidates
{% assign mss = "members" | where: "role", "ms" | sort: "year" %}
{% include list.html data=mss component="portrait" %}

## Alumni
{% assign alumni = "members" | where: "role", "alu" | sort: "year" %}
{% include list.html data=alumni component="portrait" %}


{% include section.html background="images/computer_vision.jpg" dark=true %}

Team second part test

{% include section.html %}



{% include grid.html style="square" content=content %}
