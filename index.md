---
layout: default
title: National Union of the Homeless
# All icons are from https://fontawesome.com/icons?d=gallery
# fa-fist-raised
anchors:
  - text: mission
  - text: history
    icon: fa-user # consider fa-landmark
    slug: history-(who-we-are)
  - text: events
    icon: fa-bullhorn # consider: fa-calendar, fa-bullhorn, fa-th (grid)
  - text: locals
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

## History (Who We Are)

<img class="w3-right w3-round w3-third" src='{{"/img/getting-into-step.jpg" | url }}'>

The National Union of the Homeless (NUH) originally formed in the late
1980s and early 1990s in response to shifting economic conditions
resulting in mass homelessness of families and former workers across
our country. The shelter system that is a central part of the
nonprofit industrial complex today formed at this time as well. From
the shelters, encampments, and abandoned buildings folks came together
to fight, speak out and organize against the very conditions that have
made them homeless.

At its height, the National Union of the Homeless (NUH) had 25 local
chapters and 35,000 members in cities across the United States. Most
importantly, it implemented a model of organizing involving the poor
and homeless thinking for themselves, speaking for themselves,
fighting for themselves and producing from their ranks capable and
creative leaders. This was contrary to the prevailing stereotypes and
misconceptions about homelessness. Almost twenty years after the
decline of the NUH, its history offers important lessons for building
a movement to end poverty today, in the midst of continuing
concentration of wealth among a few and expanding poverty for many.

Although the NUH went into decline in the early 1990s, a number of its
leaders continued organizing for social and economic human rights.
The NUH's mission and methods carried on through other organizations,
including the [Kairos Center](https://kairoscenter.org), [Poor
People's Campaign: A National Call For Moral
Revival](https://www.poorpeoplescampaign.org), the [University of the
Poor](https://www.poorpeoplescampaign.org), and many others.

### The Re-establishment of the National Union of the Homeless 

<figure class="w3-right">
  <img class="w3-round" style="max-width:100%; height:auto;" src='{{"/img/reestablish-poster-third.jpg" | url }}'>
  <figcaption>Signed Poster from 2019 Meeting to Reestablish</figcaption>
</figure>

In June 2019 organizers from across the country gathered in Washington
DC at the Poor People's Campaign: A National Call For Moral Revival's
Moral Congress. At this gathering a group of close to 100 organizers
voted to form the Committee to Reestablish the NUH.

In 2020 the National Union of the Homeless was reborn. The revitalized
NUH has established multiple locals throughout 11 states, we held our
first Officer's Trainer School Fall 2019 and we continue to grow
throughout the country as we uphold the slogans, legacy and practices
of the original NUH; such as "You Only Get What You Are Organized To
Take!," "Homeless Not Helpless!," and "Housing Now Not Death On The
Streets!"

The NUH then and now is made up of members currently and formerly
experiencing homelessness as well as organizers understanding this is
a fight for the survival of all the poor and dispossessed in our
nation. The power the NUH is proof that we can speak for ourselves,
think for ourselves, and organize together to lead not just ourselves
but the nation in changing the very system that continues to create
homelessness every day in this country

<figure class="w3-center" style="clear:both;">
  <img class="w3-round" style="max-width:100%; height:auto;" src='{{"/img/nuh-ots-crop-half.jpg" | url }}'>
  <figcaption>2019 Officer Training School</figcaption>
</figure>

<figure class="w3-center">
  <img class="w3-round" style="max-width:100%; height:auto;" src='{{"/img/moral-congress-meeting.jpg" | url }}'>
  <figcaption>2019 Moral Congress Meeting to Reestablish</figcaption>
</figure>

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

## Locals

<span class="construction">
<i class="fas fa-wrench"></i> Under Construction <i class="fas fa-wrench"></i>
</span>

<!-- <div class="w3-container"> -->
<!-- <table class="w3-table w3-bordered w3-table-all"> -->
<!-- <colgroup> -->
<!-- <col style="width:33%;"> -->
<!-- <col style="width:66%;"> -->
<!-- </colgroup> -->
<!-- <tr class="w3-bordered"><th>Location</th><th>Name</th></tr> -->
<!-- {% for local in collections.local %} -->
<!-- <tr class="w3-bordered"><td>{{local.data.location}}</td><td><a href="{{ local.url }}">{{local.data.name}}</a></td></tr> -->
<!-- {% endfor %} -->
<!-- </table> -->
<!-- </div> -->

## Get Involved

- [Donate]({{ "/donate" | url }})
- [Contact]({{ "/contact" | url }})
- Partner organizations:
    - [University of the Poor](https://universityofthepoor.org/)
    - [Poor People's Campaign](https://www.poorpeoplescampaign.org)
    - Food Not Bombs

<p>
<center>
For more information and to get involved contact:
<a href="mailto:2020nuh@gmail.com">2020nuh@gmail.com</a>
</center>
</p>

<!-- <img class="w3-round w3-col" src='{{"/img/only-get-what-organized-to-take.jpg" | url }}'> -->
<!-- <img class="w3-round w3-col" src='{{"/img/reestablish-poster.jpg" | url }}'> -->
