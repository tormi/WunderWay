---
layout: page
section: projects
categories: Admin
tags:
title: Tools - Jira Configuration
---

The following describes the steps to set up and configure a new project in [Wunderkraut (DE)'s Jira](https://wunderkrautde.atlassian.net).

## Create a Project
You need to have the role *admin* to create a new project.

### Quickstart
1. In the main menu bar, click *Projects* and select *Create Project* from the menu
2. Select *Create with shared configuration*
3. Pick one of the templates - *TEMPLATE Wunder Scrum Project* or *TEMPLATE Wunder Kanban Project*
3. Provide a name: include the customer name and the core goal or kind of the project
4. Define a key: the key is used to prefix the issues in Jira.
5. Check box to create a HipChat room
This will create a new project, which uses the same schemes as one of the template projects. By this, any changes to the shared schemes will impact all projects.

### Customization
If you want to customize your project to further extend and use project specific schemes, follow these steps:
1. In the main menu bar, click *Projects* and select *Create Project* from the menu
2. Now select the type of project: normally, *Scrum software development* or *Kanban software development* is your choice.
3. Provide a name: include the customer name and the core goal or kind of the project
4. Define a key: the key is used to prefix the issues in Jira.
5. Check box to create a HipChat room

You have now created a new project. Next, you must configure the project to match your needs.

## Configure the project
A new Jira project has plenty of settings, which you need to re-adjust in order to make use of Wunderkraut's usual project configurations.
Each new project has its own workflow, issue type scheme, and screen scheme - all of which are copies of Jira's default. If there are no valid reasons, each project should use Wunderkraut's templates instead.

The next sections provide the required steps to make the appropriate configuration changes.

### Configure the project's workflows
We recommend to use one of two standard workflows to match our projects' type:

* WK DE Scrum Workflow
* WK DE Kanban Workflow
These workflows are a slight modification of the standard Jira workflows.

You need to be Jira or project administrator to change your project's workflow:

1. Open the configuration page of your Jira project by clicking on the gear wheel on the left side-bar
2. Select *Workflows* on the left side-bar
3. Click *Switch Scheme* in the main window
4. Select either *WK DE Scrum Workflow* or *WK DE Kanban Workflow* according to the nature of your project
5. Click the button *Associate*
6. (optional) If issues exist already in the project, you will need to map their states to the new workflow.

### Configure the Issue Type Scheme
We recommend to use one of the two standard Issue Type Schemes for your project:

* WK DE Scrum Issue Scheme
* WK DE Kanban Issue Scheme

You need to be Jira or project administrator to change your project's Issue Type Scheme:

1. Open the configuration page of your Jira project by clicking on the gear wheel on the left side-bar
2. Select *Issue Types* on the left side-bar
3. Click the button *Actions* in the main window and select *Use a different scheme*
4. Select either *WK DE Scrum Issue Scheme* or *WK DE Kanban Issue Scheme* according to the nature of your project
5. Click the button *OK*

### Configure the Screens
You need to be Jira or project administrator to change your project's Type Screen Scheme association:

1. Open the configuration page of your Jira project by clicking on the gear wheel on the left side-bar
2. Select *Screens* on the left side-bar
3. Click the button *Actions* in the main window and select *Use a different scheme*
4. Select either *Default Issue Type Scheme*
5. Click the button *Associate*

### Assign a team to your project

1. Open the configuration page of your Jira project by clicking on the gear wheel on the left side-bar
2. Select *Users and roles* on the left side-bar
3. To assign existing Jira users to roles, click the link *Add users to a role* on the right side of the main window

Recommendations:

* Make the project lead also administrator
* Assign customers the roles *Developers* and *Users*

### Create Board
* Scrum or Kanban board
* associate columns to states

### Integrations
#### BitBucket

#### HipChat
If automatically created
1. make private
2. rename according to pattern in HipChat section (**TODO: LINK HERE**)

#### Bamboo


#### Harvest
NOT recommended

## Manage users

### Edit existing user accounts

### Reset passwords

### Add new user account
#### Wunder Employees

#### Customers
	
