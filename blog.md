---
layout: default
title: Blog
---

{% assign sorted = collections.blog | reverse %}
{% for blog in sorted %}

*   [{{ blog.data.title }}]({{ blog.url | url }}) on *{{ blog.date | fixDate | date: "%B %e, %Y" }}*

{% endfor %}