---
layout: page
section: projects
categories: Admin
tags:
title: Tools - Rally Configuration
---

The following describes the steps to setting up Rally to use with your project.

## Create a Workspace

At the top-right of the screen select the *setup* icon. This will take you to the admin.

Select *Workspaces & Projects* from the horizontal menu at the top of the screen.

A Workspace is typically the name of the client. A project sits beneath that.

If the client does not already exist in the list then you need to create a new workspace.

At the top-right of the next screen select the *Actions* link then select *New Workspace*. 

Give the workspace a name, possibly a description, select which days will be working days for the project, check that the prefixes are correct (DE for defects, US for user story), estimates should be in points. *Save & Close*.

## Create a Project

Once the workspace has been created then it's time to create the project.

To the right of the workspace, select the *Create Project* link.

Give your project a name and a description. *Save & Close*.

## Backlogs and Sprints

Select the *Back to Project* icon at the top-left of the screen. This will take you out of the admin.

Select the *Workspace* icon at the top-left of the screen. Select the name of your workspace from the list provided. 

Your backlog can be found by following *Plan > Backlog* from the top horizontal navigation.

Here you can create user stories and defects by following the *Add with Details* link.

### Create a Sprint

Go to *Plan > Timeboxes* to create a new sprint. Note that Rally refers to *sprints* as *iterations*.

Here you will see a list of previously created sprints or you can create a new sprint using the *Add with Details* link.

When creating a new sprint include:

 - Name: This could be "Phase 2: Sprint 4" but make it something we all refer to in the project.
 - Description: Describe the sprint or list the sprint objectives.
 - Start and End Date
 - Planned Velocity: If your team can estimate its velocity then state that here. If this is a first sprint then add the total of the points estimated in the planning session.
 - State: Initially this is *Planning*
 - *Save & Close*

 Now go to *Track > Iteration Status* to view your sprint backlog.

## Add Stories to a Backlog

You can add to a backlog either by selecting the story in the Backlog and updating the *Iteration* or by going to *Plan > Plan* and dragging stories from the Product Backlog (on the left) to the Sprint Backlog (on the right).

## Assign a Team to your Project

From the Workspaces & Projects page you can select the *Manage Users for [project] Page* link to the right of the project name. This links to a page where you can add existing users or create new users.

## Manage Users

Selecting the *Users* link in the horizontal navigation at the top of the screen will list all of the exising users with a Rally account.

### Edit User Account

To modify a users account, to add or remove them from a project, to edit their profile, click on the cog icon to the left of their name and select *Edit*. This will display a screen that allows you to edit their profile and the projects that they have access to.

### Create a New User Account

Select the *Add New* and *Add with Details* links at the top-left of the screen.

Enter the person's email address in the *User Name* field. This will be auto-populated in the *Email Address* field. Select a role from the dropdown list.

Enter the *Display Name* and add a *Profile Image* if possible.

Scroll further down and select the projects that the person should have access to. *Save & Close*.

An email will be sent to the user for them to complete the setup of their account.

