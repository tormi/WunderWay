---
layout: page
section: how
categories: Admin
tags:
title: Gigaset SIP Phone Setup
---

You have three pieces of hardware:

[ N300IP] the base station (a box with a blue button on the front)
[ S810H ] the handset with charging base
[ M175 ] a headset.

##Set up the hardware

Plug the base station into the router (see instructions).
Plug the phone base into the mains.

When you turn on the phone there’ll be the option to “Register”. Click this and within 30 seconds, press and hold the blue button on the base station. Wait for the phone to display a “Registered” message. This means that the handset and the base station are now paired.

##Configuration

Configuration of extensions is detailed in:
<https://docs.google.com/a/wunderkraut.com/document/d/1u1Nq-SjzpnZapxpdScdX8gxktJYT8I-6tIVsTsPSXno/edit>
(this is only needed to add more extensions to the account - phone admins only)

Next we need to configure the base station.

##Base Station

Go to <http://192.168.0.34/login.html> and login with PIN “0000”. You can find this IP address from the phone handset: Settings > System > Local Network.

If a “Security Advice” screen appears, click “OK”.

Select the “Settings” tab.

In the left nav, select “Telephony”.

Select “Edit” to the right of IP1.

![image](/public/images/sip-screen-1.jpg)

**Image**: <i>A view of the settings</i>

In the following fields, enter your Username:

<ul>
	<li>Authentication name
	<li>Username
</ul>

Enter your name in **Display Name**.

In the **Authentication Password** field enter your **secret**. Note, copy/paste does often causes issues here so it’s best to type in the secret, remembering that it’s case sensitive.

Select “Show Advanced Settings”.

In the following fields enter the IP address **193.104.131.17**
<ul>
	<li>Domain
	<li>Proxy server address
	<li>Registration server
	<li>Outbound server address
</ul>

Finally, select “Set” to save the settings.

![image](/public/images/sip-screen-2.jpg)

See above. If the settings have been entered correctly you should see **Registered** in the **Status** column beside IP1. If not, try **Edit** and enter your details again.

##Outgoing Calls

By default the phone will try to make outgoing calls via a fixed line. We need to change this to send them via IP 1.

Go to <http://192.168.0.34/>

Select **Telephony** then **Number Assignment**.

In the column for outgoing calls select the radio button to the right of IP1 (Fixed Line will be selected by default). This setting will avoid you having to make a selection before each call you make.

Select “Set” to save the changes.

##Voicemail

If you’re left a voicemail the voicemail symbol will appear on the handset. To access your voicemail dial *123 on your handset. You’ll be prompted to enter your PIN number. A list of PIN numbers can be found/managed in the OrbTalk Self Care Portal.

##Support

If you have further problems you can call the OrbTalk support line on 0844 357 1660.

For details of all staff direct numbers and extensions see <a href="who/wr-phone-directory">WR Phone Directory</a>.