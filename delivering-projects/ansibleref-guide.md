---
layout: page
section: how
categories: Admin
tags:
title: AnsibleRef guide
---

## Description
AnsibleRef is our local development environment provisionying system. It aims to provide each project a good base environment to be used when developing the project on the local machines so that the environment in local would match the production environment as closely as possible. It also tries to provide quick access to development environments so that any developer can quickly start working on any project.

## Main structure
AnsibleRef is constructed from 3 different parts: Drupal site installation, drupal buildscript and virtual machine provisioning system.

### Base
- Base ansibleref repository also contains few additional items:
- build.sh: self update and project setup script
- docs: project specific mdwiki documentation folder

### Drupal site
Drupal site and all its dependencies are contained under drupal/ folder on repository root. This folder should contain everything needed to build the drupal site. This folder is also only thing that will be deployed to the production servers.

### Drupal buildscript
We are using drush make based buildscript ([drupal/build.sh](https://github.com/wunderkraut/build.sh)). This script is included in the repository, but will be updated with the self update mechanism.

### Ansible
Ansible folder holds the actual virtual machine definitions and provisioning scripts. Our default environment is WunderMachina, but per project it is possible to use entirely different virtual environment approach.
 
## Getting started
To start new project using AnsibleRef just clone the repository from Github, make some basic project specific configurations and push to project repository. For example you can start by creating project repository, add ansibleref as second remote, pull from ansibleref and push to project default repository:

```
$ git clone git@beanstalkorsomething/projectname.git
$ git remote add ansibleref git@github.com:wunderkraut/Ansibleref.git
$ git pull ansibleref master
… edit configs etc…
$ git commit -m ‘Adding ansibleref’
$ git push origin master
```

### Configuration
conf/
- project.yml: defines virtual environment and build.sh repository and version used
- vagrant_local.yml: Vagrantfile configuration
- vagrant.yml: Ansible roles for local box
- variables.yml: Ansible configuration for local roles

sync.sh
- Basic project database sync and any additional tasks needed to be run after sync.
E.g enabling devel modules, cleaning db data, updating environment configs…

drupal/conf
- site.make: drush makefile for the project containing all the modules, themes and libraries needed for the site
- site.yml: drupal/build.sh configuration file
- aliases.drushrc.php: template for project specific aliases file

drupal/server
- This folder should be created if there is need to have server specific configs or scripts


##Troubleshooting
If you encounter any problems first things to check:
1. Does the build.sh point to wunderkraut github account when it tries to download drupal/build.sh?
This could lead into such problems as trying to run drupal/build.sh: ./build.sh: line 1: Not: command not found"
There are 2 lines late in the build.sh like this:
curl -o drupal/build.sh https://raw.githubusercontent.com/wunderkraut/build.sh/$buildsh_revision/build.sh
Make sure it says wunderkraut there and not tcmug in both of them

2. Check the conf/project.yml ansible remote config, make sure it doesnt point to gitlab (unless you are 100% sure it should, some projects might have custom ansible configs) Default is git@github.com:wunderkraut/WunderMachina.git 

3. Still don’t get new updated ansible configs? If you have build the project previously with ansible remote pointing to wrong git remote you probably still have ansible/ folder from that old remote. Simply remove the whole ansible folder and run vagrant provision.

4.  Ansible complains about ssh authentication failure / private key etc.
Make sure you have vagrant 1.7+ installed
Make sure you are using latest ansible confs (see above)
You might need to destroy your old box for new private key to take effect.
Make sure you have symlinked you aliases file, not copied it.

5. Vagrant complains about network address already in use-
You probably have another projects vagrant box running with the same ip configured. Check conf/vagrant_local.yml and change the ip to something else.
Note: we try to keep this ip per box as a running number, but there are sometimes multiple projects coming in at the same time that double allocation might happen.
Note2: When starting project always update ansibleref repos default conf to next free ip!

6. If you get error about not able to load vagrantfile.rb:
Ensure you have correct repo url in conf/project.yml (see above)
Ensure you have your key added to your github account.
