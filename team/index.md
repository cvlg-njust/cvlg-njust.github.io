---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% include section.html %}
## Pi
{% include list.html data="members" component="portrait" filters="role: pi" %}
## Resercher
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}

{% include section.html background="images/computer_vision.jpg" dark=true %}

Team second part test

{% include section.html %}

{% capture content %}



{% endcapture %}

{% include grid.html style="square" content=content %}
