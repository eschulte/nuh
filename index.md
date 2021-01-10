---
layout: default
title: National Union of the Homeless
# All icons are from https://fontawesome.com/icons?d=gallery
anchors:
  - text: mission
  - text: events
    icon: fa-bullhorn # consider: fa-calendar, fa-bullhorn, fa-th (grid)
  - text: locals
    icon: fa-fist-raised
  - text: history
    icon: fa-user # consider fa-landmark
  - text: solidarity
    icon: fa-hands-helping
  - text: donate
    icon: fa-donate
    link: /donate
  - text: contact
    icon: fa-envelope
    link: /contact
---

## Mission

<img class="w3-right w3-round w3-half" src='{{ "/img/ron-casanova.jpg" | url }}'>

The heart and soul of the National Union of the Homeless is to commit our lives to ending homelessness and poverty and to work tirelessly for the human right to life, liberty, and the pursuit of happiness, for social and economic justice for all. We dedicate ourselves to raising the awareness of our sisters and brothers, to planning a sustained struggle and to building an organization that can obtain freedom through revolutionary perseverance. We pledge to deepen our personal commitment to end all forms of exploitation, racism, sexism, and abuse. True solidarity demands that we create not only the new society, but also the new human being.

## Events

Introduction to events.  Nullam eu ante vel est convallis dignissim.  Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio.  Nunc porta vulputate tellus.  Nunc rutrum turpis sed pede.  Sed bibendum.  Aliquam posuere.  Nunc aliquet, augue nec adipiscing interdum, lacus tellus malesuada massa, quis varius mi purus non odio.  Pellentesque condimentum, magna ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam neque sit amet urna.  Curabitur vulputate vestibulum lorem.  Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.  Sed id ligula quis est convallis tempor.  Curabitur lacinia pulvinar nibh.  Nam a sapien.

{% assign row = 0 %}
{% for event in collections.event %}

{% if row == 0 %}
<div class="w3-row-padding">
{% endif %}

<div class="w3-half w3-margin-bottom">
<div class="w3-container w3-card">
<h3>{{ event.data.title }}</h3>

{{ event.date  | date: "%m/%d/%Y" }}

{{ event.data.brief }} [More information...]({{ event.url }})
</div>
</div>

{% if row == 1 %}
</div>
{% assign row = 0 %}
{% endif %}

{% assign row = row | plus: 1 %}
{% endfor %}

## Locals

Instructions on how to start a local.  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec hendrerit tempor tellus.  Donec pretium posuere tellus.  Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla posuere.  Donec vitae dolor.  Nullam tristique diam non turpis.  Cras placerat accumsan nulla.  Nullam rutrum.  Nam vestibulum accumsan nisl.

<div class="w3-container">
<table class="w3-table w3-bordered w3-table-all">
<colgroup>
<col style="width:33%;">
<col style="width:66%;">
</colgroup>
<tr class="w3-bordered"><th>Location</th><th>Name</th></tr>
{% for local in collections.local %}
<tr class="w3-bordered"><td>{{local.data.location}}</td><td><a href="{{ local.url }}">{{local.data.name}}</a></td></tr>
{% endfor %}
</table>
</div>

## History

<img class="w3-right w3-round w3-half" src='{{"/img/getting-into-step.jpg" | url }}'>

The National Union of the Homeless (NUH) originally formed in the late
1980s and early 1990s in response to shifting economic conditions
resulting in mass homelessness of families and former workers across
our country. The formation of the shelter system that is a central
part of the nonprofit industrial complex today formed at this time as
well. From the shelters, encampments, and abandoned buildings folks
came together to fight, speak out and organize against the very
conditions that have made them homeless.

In June 2019 organizers from across the country gathered in Washington
DC at the Poor People’s Campaign: A National Call For Moral Revival’s
Moral Congress. At this gathering we voted to form the Committee to
Reestablish the NUH.

Today the revitalized NUH has established multiple locals throughout
11 states, we held our first Officer’s Trainer School Fall 2019 and we
continue to grow throughout the country as we uphold the slogans,
legacy and practices of the original NUH; such as "You Only Get What
You Are Organized To Take!," "Homeless Not Helpless!," and "Housing Now
Not Death On The Streets!"

The NUH then and now is made up of members currently and formerly
experiencing homelessness as well as organizers understanding this is
a fight for the survival of all the poor and dispossessed in our
nation. The power the NUH is proof that we can speak for ourselves,
think for ourselves, and organize together to lead not just ourselves
but the nation in changing the very system that continues to create
homelessness every day in this country.

<img class="w3-round w3-col" src='{{"/img/reestablish-poster.jpg" | url }}'>

## Solidarity

Partner organizations:
- [University of the Poor](https://universityofthepoor.org/)
- [Poor People's Campaign](https://www.poorpeoplescampaign.org)
- Food Not Bombs

## Get Involved

- [Donate]({{ "/donate" | url }})
- [Contact]({{ "/contact" | url }})

<p>
<center>
For more information and to get involved contact:
<a href="mailto:2020nuh@gmail.com">2020nuh@gmail.com</a>
</center>
</p>

<div class="w3-container">
  <img class="w3-round w3-col" src='{{"/img/only-get-what-organized-to-take.jpg" | url }}'>
</div>
