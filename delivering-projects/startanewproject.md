---
layout: page
section: how
categories: Admin
tags:
title: How to Start a new WunderProject
---

There's a number of ducks to get in a row when you start a new project, for a client project or for internal projects. Here's a checklist of things that should be considered or put into action. If you need any help, advice or access privileges, just ask Joe Baker, Steve Hunton or Steve Parks.

#### *Caveat*

<small>This process will become slowly automated as we build tools to inspect the status of all of our tools and platforms. For now, though, these are all manual steps.</small>

## <span class="pull-right">![GitHub](/public/images/logos/github.png)</span> GitHub

Every project needs a remote Git repo.

We use [GitHub](https://github.com/) at Wunderkraut, and our GitHub organisation is at [github.com/wunderkraut](https://github.com/Wunderkraut/).

Create a new repository.

- For **client projects**, these should be private repositories by default.
- For **internal projects**, we are open by default, so unless there's a good reason to make it private, make the repo public.

## <span class="pull-right">![Rally](/public/images/logos/rally.png)</span> Rally

For project management tools, we use [Rally](https://www.rallydev.com/).

Steve Hunton shows Rally who's boss for us, so if you need help creating a Project in Rally, he's the man to ask.

### GitHub integration

Rally has useful GitHub integration tools, so take the time to integrate your Rally project with your GitHub repository. You can do this from GitHub by adding a Service to your repository at

{repo name} » Settings » Webhooks & Services » Add a service

and select Rally from the list.

Steve Hunton should be able to help you out with the necessary details for here. However, to start you off …

- **Server** is *probably* 'rally1' - you can be sure because it's the subdomain in the URL when you're logged into your Rally project;
- **Username** is an email address Steve Hunton can give you;
- **Workspace** is the name of the Rally Workspace, from Rally;
- **Password** you can also get from Steve Hunton;
- **Repository** is not needed in our case, because we're using GitHub.

With this in place, you can then make commits to GitHub that will update Rally items. To do this, use the token name of the Rally artifact in your commit message. E.g.

```
git ci -m 'US105 My Git commit message'
```

will automagically connect your Git commit to User Story US105 in Rally, and you can see that in Rally on the User Story's *Change Sets* tab. Similarly, use e.g. TA266 to update a specified Task; DE49 for a Defect, etc. And you can use multiple tokens in a commit message, e.g.

```
git ci -m 'US105 US107 TA271 My next Git commit message'
```

and the commit will be associated with each of the Rally artifacts.

### Rally service status

You may need to check on the [Rally service status](http://status.rallydev.com/) page from time-to-time.

## <span class="pull-right">![UpCloud](/public/images/logos/upcloud.png)</span> UpCloud

Lots of our sites are hosted on the [UpCloud](http://en.upcloud.com/) cloud hosting service. It's an especially useful place to create a development server for your project.

***Centos*** is usually a good choice for a development machine - Centos tends to be more conservative on updates, giving you fewer things you have to think about maintaining. If your project will need the latest editions of things, ***Ubuntu*** may be a better choice.

If you don't already have access to the UpCloud admin console or you need a walk-through of the interface, talk to Joe Baker or Steve Parks.

### Secure your development server

To configure your development machine, don't forget these cardinal rules:

1. Login as root
2. Change the password for root
3. Create a new user, e.g. webadmin
4. Give the new user root privileges
5. Configure SSH to
  - deny root login
  - optionally, for extra security:
      - change ssh port to a non-standard port number
      - restrict ssh login to a particular user by editing /etc/ssh/sshd_config and adding e.g. 'AllowUsers exampleuser' at the end
  - reload sshd

### Configure your development server

There's a myriad of ways you may want to configure your development server, according to the type of project you're working on. If you're working on a Drupal or other web project, though, you'll probably want to run a load of common stuff:

- MySQL or MariaDB
- Nginx
- PHP-FPM
- Varnish
- Memcached
- Redis
- Solr
- Git
- Mailcatcher
- XDebug
- etc.

Fortunately, our awesome colleagues at WunderKraut Finland have made a library of Ansible scripts to get your development server configured in double-quick time.

**[WunderTools](https://github.com/wunderkraut/WunderTools)** - a reference configuration library for use with Ansible & Vagrant
**[WunderMachina](https://github.com/wunderkraut/WunderMachina)** - stand-alone Ansible configurations

### UpCloud service status

You may need to check on the [UpCloud service status](http://status.upcloud.com/) page from time-to-time.


## <span class="pull-right">![Jenkins](/public/images/logos/jenkins.png)</span> Jenkins, Continuous Integration and automatic testing

We use [Jenkins](http://jenkins-ci.org/) to run tests and do our continuous integration, and our Jenkins instance is run on [CloudBees](https://wunderkraut.ci.cloudbees.com/). Contact Joe Baker if you need access.

Jenkins jobs need to be created to test your code, and then push it out onto your development server, and optionally to staging or production when you're happy with it. If you need help with that, just ask!

### Testing

There's lots of ways to run automatic tests. Whatever way you prefer to test your code and your project, do it! Don't neglect writing tests.

#### Behaviour-Driven Development

[Behat](http://behat.org/) is a great way of writing tests focused on human behaviour when interacting with your web project. Many of our projects have Behat testing suites included in the codebase. Jenkins runs each of these tests every time new code is committed and reports back on the test results.

 If you need help working with Behat tests, and on getting them running on your Jenkins jobs, talk to Joe Baker (who will look dazed and confused for a while, and then try to buy time while busy asking Google for answers!).
