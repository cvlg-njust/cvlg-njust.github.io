---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}


{% endcapture %}

{% include section.html %}
## Professor
{% include list.html data="members" component="portrait" filters="role: prof" %}
## PhD Students
{% include list.html data="members" component="portrait" filters="role: phd" %}

{% include section.html background="images/computer_vision.jpg" dark=true %}

Team second part test

{% include section.html %}



{% include grid.html style="square" content=content %}
