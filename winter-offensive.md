---
layout: default
title: Winter Offensives
---

{% assign sorted = collections.winter-offensive | reverse %}
{% for winter_offensive in sorted %}

*   [{{ winter_offensive.data.title }}]({{ winter_offensive.url | url }})

{% endfor %}
