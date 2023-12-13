---
layout: default
title: Winter Offensives
anchors:
  - text: mission
    link: /#mission
  - text: history
    icon: fa-user # consider fa-landmark
    link: /#history-(who-we-are)
  - text: events
    icon: fa-calendar # consider: fa-calendar, fa-bullhorn, fa-th (grid)
    link: /events
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

{% assign sorted = collections.winter-offensive | reverse %}
{% for winter_offensive in sorted %}

*   [{{ winter_offensive.data.title }}]({{ winter_offensive.url | url }})

{% endfor %}
