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
 <div align="center">
   <b>NUH 2025 WINTER OFFENSIVE STATEMENT</b> 
 </div>
[Get involved with this year's Winter Offensive](https://actionnetwork.org/forms/2025-winter-offensive?source=direct_link&)
 
During the Holiday Season The National Union of the Homeless comes together across 5 U.S. regions (the South, Appalachia, Midwest, West and the Northeast) to declare: Housing and Healthcare NOW. An End to Genocide and the War Economy! No more death on the streets both here and abroad!  

The Homeless Union’s Winter Offensive is a series of synchronized actions and protests that take place from Thanksgiving through Martin Luther King Jr's Birthday in order to highlight the time of year when the poor and homeless experience the most deadly conditions and the highest rates of suicide and death. 

We work together to fulfill our mission statement, declaring that “we commit our lives to ending homelessness and poverty and to work tirelessly for the human right to life, liberty, and the pursuit of happiness, for social and economic justice for all.”

As our Leader Dr Rev Savina cries “At a time when they sing Peace on Earth our land groans under the weight of injustice!” Again we shout: HOUSING AND HEALTHCARE NOW! NO MORE DEATH ON THE STREETS BOTH HERE AND ABROAD! 

As we enter 2026 we are also feeling the deadly effects of the June 28, 2024 Supreme Court decision Grant’s Pass v. Johnson, as well as executive orders by state governors and the President that further criminalize homelessness and poverty. We are seeing an increase in the deadly practice of sweeps and in the incarceration of our homeless communities. 

Simultaneously we are facing massive cuts to benefit programs like Medicaid and SNAP. Hospitals continue to close while we build new prisons and forced labor camps for the unhoused and terrorize and imprison undocumented workers. Our nation's military budget nearing one trillion dollars annually. Sixty (60%) percent of the United States population reports they are struggling to make ends meet while the top ten billionaires grew their collective wealth by $698 billion dollars in the last year alone. 

We know there's enough food to feed everyone and that there are 24 empty homes for every single individual in need of one while 1000 souls will freeze to death on the streets this year and homelessness and poverty continues to rise at record numbers! We declare NO MORE. 

The Poor People’s Campaign: A National Call for Moral Revival has shown that poverty is the 4th leading cause of death in the U.S., and 800 people die every day in the richest country that’s ever existed in the history of the world! Our system is FAILING - and we are DYING as a result of a system that puts PROFIT over our lives. We mourn, lift up and honor the names of those we’ve lost.

Join us, the National Union of the Homeless and the Nonviolent Medicaid Army, as we organize to unite our class to end this system that profits from poverty, homelessness and death and to create a society organized around our human rights to health, housing, food and lives of dignity so that we can together thrive, not merely survive. 

<div align="center">
 <b>YOU ONLY GET WHAT YOU ARE ORGANIZED TO TAKE!</b>
</div>



{% assign sorted = collections.winter-offensive | reverse %}
{% for winter_offensive in sorted %}

*   [{{ winter_offensive.data.title }}]({{ winter_offensive.url | url }})

{% endfor %}
