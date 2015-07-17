---
layout: page
section: security
categories: security
tags: security, iso270001, ISMS
title: Sharing passwords securely
---

We have lots of occasions when we want to share passwords with each other, but doing so securely is not so easy.

Here's some suggestions of good practices and workflows for sharing passwords securely.

**Note:** There is a wider conversation going on to agree Wunder best practice. This is a initial set of suggestions for ways forward.
 
### Store your passwords … encrypted

First, it's good practice to use a password manager tool that will encrypt and store your passwords.

There's several options to use. Here's some good suggestions.

* **[1Password](https://1password.com)**
  * Passwords stored in local vault
      * no dependence on data security of third party
* **[LastPass](https://lastpass.com/)**
  * Passwords stored on lastpass.com
      * simple click to share password (or secure note, or ... )

#### Other options:

* **[Dashlane](https://www.dashlane.com/)**
* **[Roboform](http://www.roboform.com/)**
* **[Keeper Password](https://keepersecurity.com/)**
* **[PasswordBox](https://www.passwordbox.com/)**
* **[Sticky Password](https://www.stickypassword.com/)**
* **[KeePass](http://keepass.info/)** - open source alternative

## 1Password workflow

1. **Create a new vault** - Create a vault for the project or team with whom you need to share passwords. Obviously, name it appropriately. 
  * To do this on a Mac: 
      1. Select your primary vault: &#8984;1, or
      ![](/public/images/pwshare/1pw-vault-switch-0.png) ![](/public/images/pwshare/1pw-vault-switch-1.png)
      2. Choose: 1Password » New Vault
      ![](/public/images/pwshare/1pw-vault-switch-2.png)
  * Choose an [appropriately secure master password](/working-at-wunderkraut/equipment-and-expenses/security/clear-desk-clear-screen/#password-strength) to encrypt/decrypt the password vault
      * 1Password will indicate the strength of your vault password as you're composing it.
      * ***Store this master password somewhere*** - e.g. in your Primary vault - as colleagues will need to know this password to access the shared vault
2. **Populate the vault** - add your project/team passwords, logins, secure notes, etc.
3. **Sync/Export the vault** - select: 1Password » Preferences » Sync, and then choose Folder from the location options 
  ![](/public/images/pwshare/1pw-vault-prefs-sync.png)
  Choose a location in your local system to save the exported vault file.
  ![](/public/images/pwshare/1pw-vault-prefs-sync-choose.png)
  * Preferably, choose your local sync of the Wunder Google Drive space
  * 1Password will let you know that it’s going to create a copy of your vault in the folder you selected. Click 'Create New' to continue.
  * You’re all set.
  * 1Password will keep this exported vault file in sync with any changes you make to the passwords in the vault.
4. **Upload the vault to the Wunder Google Drive space** - either a directory in your team's space, or your project's space
  * If you have already installed the Google Drive app, in step 3 above you should set the sync folder to the appropriate directory in your local Google Drive directory.
  * **Important!** The vault export file should ONLY be shared via a service owned or managed by Wunder.
      * **Please don't use anything else** - e.g. Dropbox
  * The vault file has a .agilekeychain extension.
5. **Let your colleagues know**
  * They should download the vault .agilekeychain file from the Wunder Google Drive
      * Preferably, you should all use the Google Drive app to ensure all team members have the vault file up-to-date
  * You will need to **supply them with the vault master password** before they can open it in their own 1Password app.
  
This workflow is actually really easy to set up (though you may need to use a recent version of 1Password - v4.x+ possibly?).
   
## ... without Google Drive, or any third-party service

The security weakness of this set-up is that the files are stored in a third-party intermediary, the Wunder Google Drive servers, i.e. there is , and the security policies/implementations of that third-party (whichever service is used) compromise the security of the set-up.

Instead, you may like to consider a peer-to-peer option, which would of course require no server or 3rd party service.

  (most options use libtorrent to distribute a folder amongst a group)

1. **[syncthing](https://www.getsync.com):** open source, written in Go - [syncthing.net](https://syncthing.net/)
2. **[torrentsync](https://www.getsync.com/):** Not-so-open source, has a paid option, very polished [www.getsync.com](https://www.getsync.com/)

#### PROs:

* Open source solutions available;
* Potentially, no 3rd-party involvement required;
* No data kept anywhere outside of the team;
* Any file/folder based data can be piggy-backed.

#### CONs:

* May not need to consider other security requirements, such as access control;
* Requires local storage;
* If all teammates leave, then data may get lost.

## An alternative

As an alternative, you might consider: 

* Creating a Wunder Google Drive directory with your encrypted files in it;
* Using [encfs](https://vgough.github.io/encfs/) to mount it and read the files.

**Important!** As above, these files should ONLY be shared via a service owned or managed by Wunder.
                                                  
  * **Please don't use anything else** - e.g. Dropbox.

## Ongoing best-practice discussion

Whilst these interim workflow options above will work from the present, we are continuing to discuss the group-wide Wunder best practice for sharing passwords (and other access information) securely.

A [discussion document](https://docs.google.com/a/wunderkraut.com/document/d/1CHPibDMyBkeRy84vU42hNko--OsrofoDs43wtmXK-co/edit?usp=sharing) for this is available in the Wunder Google Drive.

This guide will be updated in due course.
