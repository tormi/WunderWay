---
layout: page
section: projects
categories: delivery
tags:
  - projects
  - delivery
  - documentation
title: Documenting your project
---

> ... we have come to value:<br />
>  &nbsp; &nbsp; ...<br />
> **Working software** over comprehensive documentation<br />
>  &nbsp; &nbsp; ...<br />
> That is, while there is value in the items on the right, we value the items on the left more.
>
> *<small>excerpt from [Agile Manifesto](http://www.agilemanifesto.org/)</small>*

Documentation is dull, so the idea goes, and often this principle from the Agile Manifesto seems to be read as if project documentation can be overlooked. Documentation, though, is frequently vital when adding new members to a project team, or when handing a project over from one team to another.

*Writing project documentation needn't be boring!*

Here's some principles and ideas for good project documentation.

1) Easy-to-use tools for documentation
--------------------------------------

Traditionally at Wunder we've used Google Docs to write our documentation, and that's great.

However, at WunderCon 2014 a documentation initiative was started by the WunderCare team - developer documentation in the project repository itself using markdown format (like WunderWay!).

### Use [MDWiki](http://www.mdwiki.info/)!

**Our best recommendation is to use this markdown wiki tool: [MDWiki](http://www.mdwiki.info/).**

- A template for developer documentation using MDWiki is included in the [Wunderkraut Ansibleref project](https://github.com/wunderkraut/Ansibleref).
- Additionally, [Gatis Rudins](https://github.com/CBones) created a [Drupal module for developer documentation](https://gitlab.com/cbones/devdocs) to automate the process, which includes the MDWiki templates from Ansiblref.

2) Write a 'developer orientation' guide
----------------------------------------

You will need to add new developers into your project at some point, and it's important to get them up-and-running as quickly as possible with understanding why you're building what you're building, and how you're building it.

The quality of these guides is never 100%, but it gives developers a reference when they are ramping up on the project.

Here's some headlines for the sections in your developer orientation guide.

### Project summary

This section might include:

- **Client summary/Our customer**
  - Name the client and describe them in 1-3 lines.
- **Project summary/project goal**
  - Describe the main objectives and goals of the project or website in a couple of paragraphs. You may like to include:
    - Project mission
    - The client's organisational objectives
    - Key concerns, such as security, or performance
    - 
- **Project team**
  - List the key team members, both from Wunder and from the client, including any necessary contact details (bearing in mind keeping that sensitive data secure)
- **Supporting documentation**
  - Include a simple list for locating key project documentation, e.g.
    - Google Drive project folder
    - Proposal documents
    - Project plan

### Project management tools

It's good to include a *brief* summary of whichever of these apply:

- **Project tracking**
  - Indicate the project tracking tool (e.g. Rally, JIRA, PivotalTracker, etc.)
- **Source revision control**
  - Briefly describe:
    - the code versioning platform (Git, Subversion, etc.)
    - where to find the code repository
    - the privacy level 
    - how to gain access to it
    - the repository branch structure and conventions (e.g. develop, stage and master, with new feature branches at {user_story_ID}/{feature_title}, or whatever)
    - the code development workflow approach (e.g. forks, pull requests, etc.)
- **Continuous Integration**
  - describe the tools used, and the workflow
- **Testing regime**
  - If/how you're using e.g. Behat and/or Simpletest tests
  - Where test reports are delivered, and protocols for breaking tests
- **Project chat room**
  - HipChat (or other) chat room for the project team
- **Support ticketing system**
  - If the project is already in production, add details of the support ticketing system (e.g. Freshdesk)
   
### Deployment

What is the development and deployment workflow?

It's useful to include a short description of the development workflow, so that developers can move code: 

- from local development …
- to a packaged feature for peer review …
- onto a development server …
- into automated testing …
- to quality assurance and/or staging …
- and finally into the production environment.

#### Agile approach

You may like to explain also the agile approach of the project, as it relates to:

- Sprints
- User stories
- … and how those relate to Git branches
- The definition-of-done used for the project and/or for stories

### Local development

If a local development environment has been built for the project, give details of how to install it and work with it.

### Hosting info

Summarise the hosting set-up and server locations for:

* Development
* Staging & Quality Assurance
* Live site
* Monitoring
* Anything other special bits and bobs

### Anything special

Don't forget to document any special or unique information about this project and how to work on it. For example:

- Special **security concerns** about or **practices** required for the project
  - (RSA keys, VPN, 3rd party authentication, handling production data, etc.)
  
### Help, how do I …

You may like to include a special section in your developer's orientation guide for things like:
 
- How do I set up my git for this project?
- My fork is busted, what do I do?
- How do I test SASS compiling locally?
- etc.

3) Write a project plan
-----------------------

If you're the project's lead developer (and you don't consider this too 'waterfall'), consider writing a project plan guideline for governance of project delivery and security requirements.

This might include:

- **Project phases**<br />
  This might cover the key tasks, goals or objectives during, e.g.
  - Kick-Off
  - 2nd-to-last sprint
  - Delivery
- **Project requirements**<br />
  Describing the essential requirements of, e.g.:
  - Delivery
  - Security
- **Developer workflow**<br />
  Covers your rationale for:
  - working on, testing, demonstrating and delivering stories
- **Tools**<br />
  The tools you'll use to deliver the project:
  - how they work
  - how to work with them
  - why you've chosen them
- **Anything else**<br />
  And add anything else, any gotchas or caveats that are important to record.




4) Project contacts
-------------------

Make sure you include a list of contacts for the project.

When writing your list you might like to consider:

- List Wunder, client and other 3rd-party supplier contacts separately
- Include their contact details, of course
  - … but also maybe a comment on how best to contact them
- There may be some data protection or privacy issues to take into account

You might also include anything about e.g. raising a support ticket with a 3rd-party supplier.

5) Document your Drupal set-up
------------------------------

The MDWiki developer documentation templates included in [Wunderkraut's Ansibleref](https://github.com/wunderkraut/Ansibleref) give you a great starting point for documenting your Drupal set-up. As a starter, the templates have place to document:

- **Content types**<br />
  List the content types used in the project.
  - For each content type, describe the fields used, with their usage.
  - Describe the technical details involved with this content type.
- **Theme**<br />
  Include:
  - A simple description of the theme, including any base themes
  - Any module or other dependencies of the theme
  - Describe how the frontpage is built (panel, view, etc.)
  - Any information about custom templates
  - Describe any other theme-related special details (javascript libraries added, etc.).
- **Modules**<br />
  - Custom modules
    - Describe the purpose of any custom modules developed, and any configuration that may be necessary
  - Contrib drupal.org modules
    - If an existing drupal.org module was extensively modified, it may be useful to describe those changes here.
- **Features**<br />
  Write info about the features you are using and what they hold. This will help people keep them in good shape and debug them when something is missing.
- **Views**<br />
  If any view is not trivial to understand and special hooks had to be developed, document them.
- **Hacks**<br />
  Your project has no hacks, right? ***Except if it does …***
  
6) And you're done
------------------

See, it wasn't that hard, was it?

In fact, some of it was even quite fun.
