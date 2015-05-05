---
layout: page
section: security
categories: security
tags: security, iso270001, ISMS
title: Data usage policy
---
This policy supports the Wunderkraut I.T. Security Policy. The purpose of this policy is to prevent unauthorised disclosure, modification, removal or destruction of Wunderkraut information assets, and disruption to Wunderkraut business activities.

This document forms part of Wunderkraut’s ISO 27001 Information Security Management System.

### Location
This policy is applicable to all staff and contractors using Wunderkraut systems.
### Responsibility
** Managing Director, Operations Manager **
It is the responsibility of the Managing director and Operations manager to accept and implement this policy and to ensure that the security controls are implemented.
** All staff **
It is the responsibility of all staff to comply with this policy.
Failure to comply with this policy may endanger the information services of Wunderkraut and may result in disciplinary action.


### Purpose
The purpose of this policy is to prevent unauthorised disclosure, modification, removal or destruction of Wunderkraut’s information assets, and disruption to any business activities.

Except when specifically authorised after a risk assessment of the necessary business case: corporate records/data shall not be stored on local computers, mobile devices including laptops, USB memory sticks, PDA’s, external hard drives or any other mobile device or media such as smart phones, CD or DVD except for agreed backups.

In some cases storing sensitive information on a mobile device may be unavoidable for the completion of work duties and the provision of care. Such cases shall be subject to:
* appropriate technical risk assessment by the management;
* meet the security requirements of this policy; and
* agreed backup;

### Data Encryption Procedure

All sensitive data stored on local drives of laptops are covered by this procedure.

All removable media for use on information systems owned or operated by Wunderkraut are covered by this procedure.

Removable media includes:
* Tapes
* Floppy discs
* Removable or external hard disc drives
* Optical discs DVD and CD-rom
* Solid state memory devices including memory cards
* Pen drives

Currently approved cryptographic algorithms are for encryption - 3DES, AES (FIPS 140-2), and should be used at recommended 256bit strength. These algorithms and bit strength are readily available within a range of commercially available off the shelf security products and services.

The use of freeware or shareware that does not benefit from independent security evaluation or that fails to comply with these standards is not permitted and must be avoided.

### Security Procedures

The loss or theft of data that is being processed on a piece of removable media should be evaluated for its sensitivity and any potential impact that this would have due to this or any other compromise.

No real time data should be used for testing purposes, the use of annonymised information should be used outside of live environments. Unless specifically required by the client and the project, the use of anonymised data should be used for testing in staging and live environments.

All staff should be trained in the use of encryption tools or application facilities provided, and for the handling of encrypted removable media.

Where encrypted removable media is to be shared, care must be taken to ensure that the intended recipient has the correct technical capability to de-crypt the data on receipt and this should be established in advance of any sharing of media.

All pass-phrases or decryption keys used for encryption/decryption purposes must be sufficiently long and complex to prevent the encrypted information from attack. The decryption pass-phrase or key must never be sent with encrypted removable media.

Password managers such as LastPass or OnePass should be used to generate any personal passwords at least 8 characters in length containing alphanumeric and punctuation characters required for Wunderkraut hardware and software and stored within the encrypted password facility.

In all cases where data encryption is used, a full auditable record should be maintained of the media and data involved and its intended purposes including dates of encrypted file creation, transmission and destruction.

Audit spot checks will be conducted by the organisation to ensure this policy is complied with. Any compliance issues will be reported to the line managers concerned and may be handled through staff disciplinary processes or contractual arrangements.

All incidents involving encrypted data must be reported to the Management immediately.

Personal Computers including Laptops, Tablet and Handheld Computers Whole Disk Encryption shall be applied.
Laptop encryption
Mac: default in Lion or later: FileVault 2 uses full disk, XTS-AES 128 encryption to help keep your data secure. Using FileVault 2, you can encrypt the contents of your entire drive.

### Phone encryption
iPhone: Data protection is available for devices that offer hardware encryption, including iPhone 3GS and later, all iPad models, and iPod touch (3rd generation and later). Data protection enhances the built-in hardware encryption by protecting the hardware encryption keys with your passcode. This provides an additional layer of protection for your email messages attachments, and third-party applications.

Samsung: Samsung offers Device Encryption and On Device Encryption solutions as well as FIPS 140-2 certification for your devices to make sure that your corporate security needs are properly addressed.

### Procurement of Encrypted Memory Sticks

Only approved encrypted USB memory sticks must be purchased.

Encrypted jump drive options: [Data Traveler 4000](http://www.pcworld.com/article/254753/kingston_datatraveler_4000_managed_review_a_fast_affordable_secure_flash_drive.html)

The decryption pass-phrase or key must never be sent with encrypted removable media.

### Removable Media

Export of unencrypted identifiable information onto removable media such as CD, SD cards DVD or ZIP drives MUST be avoided unless for approved backup purposes and then they must be stored securely.

Any requests to do otherwise must be authorised as per the management.

### External Hard Drives

Users must show a business reason for the use of external hard drives and they must be of an approved type. They MUST be pre-encrypted and match the currently approved cryptographic algorithms.

### Project management information

Wunderkraut use Rally to manage projects, Rally Software utilizes some of the most advanced technology for Internet security available today. When Rally is accessed Secure Socket Layer (SSL) technology protects your information using both server authentication and data encryption, ensuring that your data is safe, secure, and available only to registered Users in your organization. Data will be completely inaccessible to unauthorized users.

Rally Software provides each User in the organization with a unique user name and password that must be entered each time a User logs on. Rally Software issues a session "cookie" only to record encrypted authentication information for the duration of a specific session. The session "cookie" does not include either the username or password of the user. Rally Software does not use "cookies" to store other confidential user and session information, but instead implements more advanced security methods based on dynamic data and encoded session IDs.

In addition, Rally Software is hosted in a secure server environment that uses a firewall and other advanced technology to prevent interference or access from outside intruders.
It is extremely important to Rally that customer data be handled in a way to ensure:
It is not accessed by anyone that isn't authorized.
It is transmitted to/from the customer environment in a secure manner.
It is stored in a physical/logical secured environment as required by the
classification of the data.
It is only used for the purpose that the data was intended to be
accessed for.
The data is securely destroyed when it is no longer needed in a manner
that makes it nearly impossible to retrieve through publicly available
data retrieval methods.

Rally have undergone the following 3rd party inspections/certifications:
* ISO 270001
* NIST 800-53
* FISMA Moderate
* Safe Harbor
* SSAE 16, type 2 (datacenter provider)

Rally performs bi-weekly vulnerability scans of our Internet facing environment and scans of their internal environment twice a year. They perform at least semi-annual penetration tests. In addition, Rally contracts with a 3rd party penetration/vulnerability testing firm to perform annual audits. This same firm performs audits on any component of the application that has undergone a major change or anytime we incorporate a new software technology in our datacenter.

Current and pending customers also have the ability to perform their own vulnerability/penetration testing as long as it is coordinated with Rally Security.


