---
layout: default
title: Blog
anchors:
  - text: mission
    link: /#mission
  - text: history
    icon: fa-user # consider fa-landmark
    slug: history-(who-we-are)
    link: /#history-(who-we-are)
  - text: events
    icon: fa-calendar # consider: fa-calendar, fa-bullhorn, fa-th (grid)
    link: /events
  - text: winter-offensives
    icon: fa-snowflake # consider: fa-calendar, fa-bullhorn, fa-th (grid)
    link: /winter-offensive
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

{% assign sorted = collections.blog | reverse %}
{% for blog in sorted %}

*   [{{ blog.data.title }}]({{ blog.url | url }}) on *{{ blog.date | fixDate | date: "%B %e, %Y" }}*

{% endfor %}
