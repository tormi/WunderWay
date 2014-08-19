---
layout: page
section: how
categories: Admin
tags:
title: Help! I'm new. How do I get started?
---
So you made the decision to join us at Wunderroot.

The early days in a new organisation can be daunting and can leave you feeling lost. We've put together a reference guide to help you get started on your journey.

When you start with us we like to make sure you receive all of the hardware and access you need to do your job. You'll also need some guidance to help you find your way.

We keep a checklist of everything you need to make sure we don't miss anything but here's a quick guide to get you started.

##[You get a buddy!](/how/new-starter/buddies/)

When you first start you'll be assigned a buddy. We're a friendly bunch but you'll find it easier if there's a single person you can turn to to help you out initially.

Find out [more about buddies](/how/new-starter/buddies/).

##Hardware & Budget

You'll need a laptop as a minimum to get you started. If you've not already got one of these then speak to Steve Parks or Steve Hunton.

All members of staff receive a hardware budget every 2 years. You decide how to spend this money provided it's for work. The budget will cover a high-spec laptop or perhaps, a number of different mobile devices for testing or perhaps furniture for your home office.

##Payday

Shortly after starting you'll be contacted by our accountant, Ed, who will request some personal information that we'll need for payroll.

##SIP Phone

We'll provide you with a SIP phone which you can use from your home office. This phone works over the internet using your home internet connection. You will receive a handset and a headset for those longer calls. To set up your phone see <a href="/how/sip-phone-setup/">SIP Phone Setup</a>.

##Expenses

For information about expenses see [How to Claim Expenses](/how/how-claim-expenses/).


## Fridays

[Fridays are special days](/how/fridays/). Each Friday we have a company Hangout, to catch up with other staff that we haven't worked with during the week, to hear what people have been working on and what their 'give back' Friday plans are. Your first Friday Hangout will be a chance to introduce yourself and meet anyone you haven't said hello to yet.


##Holidays

You'll be allocated a holiday allowance each year. See <a href="/how/how-to-book-holidays/">How to Book Holidays</a> for more information.

##Communication Tools

With distributed teams communication is really important. With the right tools we can beam numerous people into the same room for meetings or general catchup-ups.

The phone is always a good place to start. Take a look at the <a href="/who/wr-phone-directory/">UK Phone Directory</a>.

We use a combination of <a href="http://www.skype.com/en/">Skype</a> and <a href="https://www.hipchat.com">HipChat</a> for online text chats. It's a good idea to install both of these.

We use Google Hangouts for video calls. Whenever there's to be a hangout we'll announce it and provide a link in HipChat. As a minimum there's a weekly Wunderroot Hangout on a Friday when we discuss our weeks and have a general chin wag. We use hangouts for quick project calls.

We use a company Gmail account for all email correspondence.

##Health & Safety

Due to the distributed nature of the team it is not practical to visit your home office on a regular basis. The company needs you to assess your own comfort and safety and to communicate any risks or discomfort to management. Where the risk or discomfort is related to hardware or furniture then we'll work with you to fix this.

When you begin working with the organisation we'll have already asked you about your home office arrangements to determine whether or not you have a suitable work space in which to perform your job. Some people work solely from home, others choose to split their time between home and e.g. coffee shops.

Travel is a necessity for some of usto perform our jobs. The company does not operate or deal with customers in potentially risky countries. We only travel and operate in destinations approved by the UK Foreign Office.

If you have any issues or questions related to Health and Safety these must be discussed with Steve Parks or Steve Hunton.

Here's our <a href="/company/health-and-safety/">Health & Safety policy</a> in full.


##We're the best!

Well, that's our plan and we've made big steps to achieve that. We've implemented some nice lean processes and are ISO9001 certified. That just means that we manage ourselves and our projects as well as we can, we're always looking to better ourselves and we want you to be part of that too. There are some references to get you started here:

<a href="/company/ambition/">Our Ambition</a><br/>
<a href="/project-delivery/qms/">Quality Management System</a> < that's the official *how we do stuff* document<br/>
<a href="/company/">Our Company</a><br/>
<a href="/who/">Who we are</a>

##Everything Else

If you still have questions you can look around the WunderWay (see the <a href="/how/">How</a> section), ask your buddy or speak to SteveP or SteveH.

Or it may be below:<a name="questions" id="questions"></a>

{% comment %}
  The code below dynamically generates a list of pages with
  section = how in the front-matter.
{% endcomment %}

{% assign pages_list = site.pages %}
{% for node in pages_list %}
  {% if node.title != null %}
    {% if node.section == "how" and node.subsection == "questions" %}
- <a class="section-list question-list" href="{{ node.url }}">{{ node.title }}</a>
    {% endif %}
  {% endif %}
{% endfor %}
