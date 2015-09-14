---
layout: page
section: projects
categories: Admin
tags:
title: Pre-Launch Checklist
---

## Security

1. Rename and password-secure user 1 account (formerly known as “admin”), also make sure that privileged accounts have secure passwords.
2. Delete any test accounts.
3. Check user registration and commenting settings
4. A If possible care that /user is blocked for out-facing production system for sites with no enduser login.
2. Run security_review.module at /admin/reports/security-review (http://drupal.org/project/security_review)
3. A Set the 'Error messages' display to 'None' on /admin/config/development/logging
4. turn off php error output (only to logs)
4. A Make sure all roles have to proper permissions and no non-admin-role has insecure permissions (also, all permissions set for anonymous users should be set for authenticated ones)
5. A Make sure file system permissions are secure at /admin/reports/status
6. A Make sure “Full HTML” is not set as default text format and is not accessible by regular authenticated or anonymous users, at admin/config/content/formats
7. A Make sure unnecessary or insecure modules are disabled, including “PHP Filter” - remove respective dependencies in features before the deactivation!
8. Make sure all active modules and core are up to date, and there are no stale/unmaintained modules or even modules with unresolved security issues
9. Make sure everything that should be hidden is no-follow (configured via robots or other way)
10. Use a separate domain for editorial login. e.g. cms.domain.tld (maybe even with IP-range-/VPN-limited access!
11. If possible ensure that /user and /admin is https/SSL-only
12. If using SSL (you should be), change your local /etc/hosts to point the site to its live domain and ensure SSL redirection is working correctly.
12. Check that there are no unwanted externally accessible stray views or panels pages at /admin/structure/views
13. Check captcha / mollom / honeypot
14. Remove CHANGELOG.txt and other documentation files (not robots.txt)
15. Make sure file type download restrictions of Drupal’s .htaccess are working (e.g.  .module is not downloadable)

16. Make sure http auth protection is either active (for internal pre-release go-lives) or deactivated (for public go-lives).
17. Make webroot a read-only filesystem (except /files), if possible.
18. Make Sure OS and stack are kept up-to-date with fixes

## Performance

1. Make sure page caching is active
2. Make sure CSS and Javascript aggregation is active.
3. Make sure main CSS file is minified using production settings 
4. Check for unneeded core and contrib CSS files that can be removed
5. Remove unused libraries
5. Check for unused CSS selectors
3. Disable dblog and use syslog instead.
4. Use a fast cache backend like redis or memcache.
5. Use a front-end cache or a CDN.
6. If possible active lazy loading for images and iframes
7. Do a load test (basic test with siege or more advanced test with blazemeter.com)

## SEO

1. Make sure URL Alias path pattern are set correctly
2. Make sure URL Redirects are created for deleted path aliases
3. Check all field contents for stale URLs e.g. to staging servers etc. 
4. Check Tracking Integration (Google Analytics, IVW, …) - Set up Google Tag Manager and then do all the necessary changes in the GTM interface
5. Check XML Sitemap generation.
6. Check other SEO guidelines: https://drive.google.com/a/wunderkraut.com/file/d/0B1GpgWbIXv6TNDNtUk1lZGtYaXM/view

## Other

1. Ensure cron is running as expected at /admin/reports/status
2. Identify and delete or unpublish any test or dummy content at /admin/content
3. Test e-mail sending
4. Make sure email address and name is correct on /admin/config/system/site-information.
5. Set favicon for backend and frontend theme.
6. Set apple touch icons.
7. Make sure all social media links are connected with the correct account.
