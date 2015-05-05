---
layout: page
section: how
categories:
tags:
title: How To Edit The WunderWay
---

The WunderWay is designed for collaboration and continuous improvement. No one person is responsible for updating and extending it - everybody is.

To help with this, it's in a version control system. This allows us to keep all the different versions of the content that have ever existed, track changes, and discuss them. That makes any mistake really easy to fix, so don't worry about breaking it.

## Getting Ready To Work On The WunderWay
1. You'll need a user account at [Github](https://github.com), which is the service that hosts the version control system for us.
2. Once you have a username there, give it to one of your colleagues and ask them to add you to the WunderWay project.

## Editing The WunderWay On Github
You can simply work on the Github website, without needing to set up anything on your own computer:

1. Go to the [WunderWay repository](https://github.com/Wunderkraut/WunderWay)
2. Navigate to the page you want to edit, clicking on the folders until you find the filename you want. Click on that. For example, this page can be edited at https://github.com/Wunderkraut/WunderWay/blob/gh-pages/how/how-edit-wunderway.md
3. Click Edit. Make the changes you want.
4. At the bottom of the screen, in the 'Commit Changes' section, add a description of the changes you've made.
5. Click the 'Commit Changes' button.
6. Your changes will be made automatically to the live WunderWay site within moments.

## Editing The WunderWay On Your Local Computer
1. Download and install the [Github for Mac](https://mac.github.com/) software.
2. Download and install the [Sublime Text](http://www.sublimetext.com/) text editor.
3. Open Github for Mac and, on the repositories screen, select 'Wunderkraut' repositories.
4. On the 'Wunderkraut/WunderWay' repository select 'Clone to Computer'
5. Select a suitable folder to save the files in.
6. Open Sublime Text. From the File menu choose 'Open...'. Select the folder where you cloned the WunderWay repository.
7. You'll see the folder structure of the WunderWay on the left hand side. Find the file you want to edit, and make the changes. Select File>Save when you are done.
8. In the Github for Mac application, under 'changes' it will show that you have 'uncommitted changes'. Type a heading and description about the changes you made. Click Commit.
9. You can make any edits like this offline. When you are back online and want to push your changes to the WunderWay site, click 'Sync Branch' in the top right of Github for Mac.
10. Your changes will be made automatically to the live WunderWay site within moments.

## Previewing WunderWay on you local computer
1. Navigate to the top WunderWay folder in your terminal
2. Install Jekyll by running ``` $ gem install jekyll ```
3. You you encounter an error, you may need to run ``` $ sudo gem install jekyll ```
4. In the same directory, run ``` jekyll serve ```. This compile the jekyll site and serve it on http://localhost:4000
5. If you want Jekyll to recompile the site every time you save a file, run ``` jekyll serve --watch ``` instead

## Editing responsibly
The WunderWay is publicly viewable, so please make any changes responsibly. You don't need to ask for anyone's permission to make edits, but like in everything else we do, it's a good idea to ask for peer review of any major changes.

## Formatting
We use a formatting syntax called 'Markdown' to write the content of the Wunderway. It's very simple to use. You can find a full briefing on the syntax at http://daringfireball.net/projects/markdown/syntax

## Creating New Pages
If you need to create a completely new page, you can create a new file in the right section folder in WunderWay. Call the file 'your-file-name.md' where your-file-name can be anything you like. The '.md' file extension is important.

At the very beginning of your file you need a few lines of text called 'front-matter'. These look like this, and you can copy and paste this as a template to start with and edit as you need...

    ---
    layout: page
    section: how
    categories: Admin
    tags: Expenses, Finance
    title: How To Claim Expenses
    ---

  This tells the system that builds the site what type of file it is, what section it's in, the categories it's in, and the title. The Tags will help with navigation.
