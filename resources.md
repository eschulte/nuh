---
layout: default
title: Resources
---

{% assign sorted = collections.resources | reverse %}
{% for resources in sorted %}

*   [{{ resources.data.title }}]({{ resources.url | url }}) 

{% endfor %}
