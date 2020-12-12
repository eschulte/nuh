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
  - text: contact
    icon: fa-envelope
---

## Mission

Mission statement.  Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit.


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

<span style="color:red; font-style:bold;">TODO:</span>
Fill in with dynamic list of locals.
Organized as a table, including location.
Potentially laid out on a map at some point.
Link to dedicated page.


## History

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

## Solidarity

Partner organizations:
- [University of the Poor](https://universityofthepoor.org/)
- [Poor People's Campaign](https://www.poorpeoplescampaign.org)
- Food Not Bombs

## Donate

<span style="color:red; font-style:bold;">TODO:</span> DONATE BUTTON

For more information and to get involved contact:
<a href="mailto:2020nuh@gmail.com">2020nuh@gmail.com</a>
