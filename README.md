[Deprecated] Im returning back to my old design with some changes as i couldnt make this design work on mobile without major changes which looses coherence with desktop design.

# rmishra.me

*Code repository for my new (and hopefully improved) rmishra.me website*

You can use this project as a template for your project. Please refer to __"LICENSE"__ for more information on how to properly attribute this project.

---

# Contributing
Please follow the following guidelines while contributing to this project.

## Creating Issues

You can create new issues for one of the following reasons:
* Reporting Bugs/Breakages
* Requesting new features

There are pre-made templates in this project that will assist you in creating new Issues. While strictly following these templates is not a requirement, doing so makes it easier to triage and impliment changes and is highly recommended.

## Contributing with code

You can create new Pull Requests to contribute new code to this project or help fix a bug. __Note that I only accept changes submitted using following method__. Follow the following steps to contribute to this project:

1. Submit a new Issue describing _in detail_ the bug you encountered or new feature request.
2. Fork this repository.
3. Create a new branch using the final template:
    > `[TYPE]-[ISSUE_ID]`

    _List of Identifiers can be found below_
4. Make changes to this branch. *Note: Please group your changes in proper commits. Not all of your changes/commits may be merged.*
5. Create a new pull request from your branch to rohmishra/rmishra.me:master (master branch of this project) and include a list of changes you made or a brief description in the merge message.

### List of branch TYPE identifier.

|TYPE | Detail|
|---|---|
| __BUGFIX__ | _Use this if you are contributing a bugfix_|
|__FEATURE__| _Use this if you are contributing a new feature or improvement_ |
|__DEV__| _Use this if you are contributing internal improvements eg. cleaner code, docs, etc._ |
|__LEGAL__| _Changes made to comply with legal stuff should use this tag_ |

---

# How to Build
This project is simple to build and publish after changes are made. Read through this section to understand how to work this project.

> __Note: Once built for production, this project outputs static bundle that can be used for static hosting.__

## Pre-requisites for this project
This project uses the following technologies: Node.JS + npm, Husky, scss, JS.
* NodeJS: Used as the build runtime, not required for production
* Husky: Used to control hooks
* scss: for styling + outputs minified css files.


