---
layout: default
title: In The News
---

{% if row == 0 %}
<div class="w3-row-padding">
{% endif %}

{% assign sorted = collections.news | reverse %}
{% for news in sorted %}
<div class="w3-half w3-margin-bottom">
<div class="w3-container w3-card">
{% if news.data.link %}
### [{{ news.data.title }}]({{ news.data.link }})
{% else %}
### [{{ news.data.title }}]({{ news.url | url }})
{% endif %}

{{ news.date | fixDate | date: "%B %e, %Y" }}

{{ news.data.brief }}

{% if news.data.link %}
[{{ news.data.link-name }}]({{ news.data.link }})
{% else %}
[More information...]({{ news.url | url }})
{% endif %}
</div>
</div>

{% if row == 1 %}
</div>
{% assign row = 0 %}
{% endif %}

{% assign row = row | plus: 1 %}
{% endfor %}