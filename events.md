---
layout: default
title: Events
anchors:
  - text: mission
    link: /#mission
  - text: history
    icon: fa-user # consider fa-landmark
    link: /#history-(who-we-are)
  - text: winter-offensives
    icon: fa-snowflake # consider: fa-calendar, fa-bullhorn, fa-th (grid)
    link: /winter-offensive
  - text: blog
    icon: fa-bullhorn # maybe fa-pen as another alternative
    link: /blog
  - text: locals
    icon: fa-hands-helping
    link: /#locals
  - text: donate
    icon: fa-donate
    link: /donate
  - text: join us
    icon: fa-envelope
    link: /contact
---

## Events

- Events are listed on the [National Union of the Homeless Facebook page](https://www.facebook.com/pg/NationalUnionoftheHomeless/events).
- Videos of past events are listed on the [National Union of the Homeless YouTube channel](https://www.youtube.com/channel/UCCg1sQ5ALv-Z3bLMsajHCkA?app=desktop).

{% assign row = 0 %}
{% assign sorted = collections.event | reverse %}
{% for event in sorted %}

{% if row == 0 %}
<div class="w3-row-padding">
{% endif %}

<div class="w3-half w3-margin-bottom">
<div class="w3-container w3-card">

{% if event.data.link %}
### [{{ event.data.title }}]({{ event.data.link }})
{% else %}
### [{{ event.data.title }}]({{ event.url | url }})
{% endif %}

{{ event.date | fixDate | date: "%B %e, %Y" }}

{{ event.data.brief }}

{% if event.data.link %}
[{{ event.data.link-name }}]({{ event.data.link }})
{% else %}
[More information...]({{ event.url | url }})
{% endif %}
</div>
</div>

{% if row == 1 %}
</div>
{% assign row = 0 %}
{% endif %}

{% assign row = row | plus: 1 %}
{% endfor %}
