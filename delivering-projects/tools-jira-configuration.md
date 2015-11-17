---
layout: page
section: projects
categories: Admin
tags:
title: Tools - Jira Configuration
---

The following describes the steps to set up and configure a new project in [Wunderkraut (DE)'s Jira](https://wunderkrautde.atlassian.net).

## Create a Project
You need to have the role *admin* to create a new project. You can either create a new project based on our templates as described in the section [Quickstart](#quickstart). Or you set up your project from scratch as described in [Custom Project Creation](#custom-project).

### <a name="quickstart"></a>Quickstart
1. In the main menu bar, click *Projects* and select *Create Project* from the menu
2. Select *Create with shared configuration*
3. Pick one of the templates - *TEMPLATE Wunder Scrum Project* or *TEMPLATE Wunder Kanban Project*
3. Provide a name: include the customer name and the core goal or kind of the project
4. Define a key: the key is used to prefix the issues in Jira.
5. Check box to create a HipChat room
This will create a new project, which uses the same schemes as one of the template projects. By this, any changes to the shared schemes will impact all projects.
By this, you can skip the sections on configuring the project's workflows, Issue Type Scheme and Screens. Rather proceed with [assigning Users](#team-assign) to the project and [create a board](#create-board).

### <a name="custom-project"></a>Custom project creation
If you want to customize your project to further extend and use project specific schemes, follow these steps:

1. In the main menu bar, click *Projects* and select *Create Project* from the menu
2. Now select the type of project: normally, *Scrum software development* or *Kanban software development* is your choice.
3. Provide a name: include the customer name and the core goal or kind of the project
4. Define a key: the key is used to prefix the issues in Jira.
5. Check box to create a HipChat room

You have now created a new project. Next, you must [configure the project](#configure-project) to match your needs.

##  <a name="configure-project"></a>Configure the project
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

### <a name="team-assign"></a>Assign a team to your project

1. Open the configuration page of your Jira project by clicking on the gear wheel on the left side-bar
2. Select *Users and roles* on the left side-bar
3. To assign existing Jira users to roles, click the link *Add users to a role* on the right side of the main window

#### Recommendations:

* Make the project lead also administrator
* Assign customers the roles *Developers* and *Users*

## <a name="create-board"></a>Create Board
Whereby a project stores all issues, determines the workflow as well as the team assignment, you will very likely work on a Jira Board most of your time. A board can be regarded as a special representation of the issues of one (or even several) projects.

You create a board by the following steps, assuming that you have already created a project:

1. Select the menu entry *Boards* on Jira's top navigation
2. Select *Show all boards*
3. Click the button *Create Board* on the upper right side of the main window.
4. In the opening wizzard **Create an Agile board**, select either *Scrum* or *Kanban*
5. Then select the radio button *Board from existing project*
5. Enter a descriptive board name (e.g. *PROJECTNAME + "Scrum/Kanban Board"*)
6. Pick the project(s), which shall provide its/their issues to the board

Afterwards, [configure your newly created board](#configure-board).

### <a name="configure-board"></a>Configure the board
The Scrum or Kanban board already ship with specific characteristics, e.g. the Scrum board having the functionality to create sprints, maintaining a backlog and reporting a burndown chart.
At this point, you only need to adjust the board's columns to the status of the underlying workflow:

1. Open the board of your project
2. Click on the button *Board* and select the menu item *Configure...*
3. On the left menu *Configuration* select the section *Columns*
4. Here, you can add new columns and map the status to the appropriate culumns by drag-and-drop.

#### Recommendations:

1. our Scrum boards usually have the columns-status mappings
  * *To Do*: OPEN, REOPENED
	* *In Progress*: IN PROGRESS 
	* *In Review*: RESOLVED
	* *Done*: CLOSED
2. Our Kanban boards usually have the columns-status mappings
  * *Backlog*: NEW
	* *Selected for Development*: TODO
	* *In Progress*: IN PROGRESS 
	* *In Review*: RESOLVED
	* *Done*: CLOSED

## Manage users
This section will focus on recommendation or best-practices of Wunderkraut's Jira. For further information on how to use certain features of Jira, please refer to the [Jira Documentation](https://confluence.atlassian.com).

### Add new user account
When creating a new user, you should apply certain naming scheme and group associations depending on whether the new user is a Wunder Employee or a customer/partner:

The generic naming scheme shall help us to clearly identify, which users are employees and which users are customers. This is benefitial during archiving a project and cleaning up our user base - which is important, because our plan's costs are calculated on a per user basis.

#### Wunder Employees

##### Naming scheme

* Username: *[firstname].[lastname]* (e.g. peter.shaw)
* Full name: *[firstname] [lastname]* (e.g. Peter Shaw)

##### Groups 
Assign an employee to the following groups:

* jira-users (default)
* users
* developers
* wk-intern

And if required also to the group *administrators*.

#### Customers

##### Naming scheme

* Username: *[firstname].[lastname].[company]* (e.g. anna.smith.railinc)
* Full name: *[firstname] [lastname] ([company])* (e.g. Anna Smith (Rail Inc.))

##### Groups
Assign a customer or partner only to the following group:

* jira-users (default)
	
## Integrations

#### BitBucket
**TODO**

#### HipChat
**TODO**

If automatically created

1. make private
2. rename according to pattern in HipChat section (**TODO: LINK HERE**)

#### Bamboo
**TODO**

#### Harvest
**TODO**
NOT recommended
