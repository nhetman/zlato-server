# zlato-server

This is a backend service for Zlato expense tracker app.

## Setup
Node is required to run this server https://nodejs.org/en/download/package-manager.

To run the server
```
node index.js
```

## Branching

In order to setup branching process to represent different environments and get closer to a real project, here are the rules to be followed when working in this repository:

* main branch will be protected and now will represent our Production. Merging anything to it will be under a review and discussion.
*  dev branch will now represent the main starting point for development work. When you start working on ticket, feature or fix, you will branch off of dev.
* dev branch will also represent, let’s say, our Testing environment. Perfect scenario would be if we had both, Production and Testing environments on separate machines, but in terms of our small project it can be just branches.
* When you start working on a feature, create a new branch off of dev. The name should start with Jira ticket name following by some details. Example: HRU-12/add-first-home-page-components.
* When you are ready to submit code for your feature, create a Pull Request from you branch to dev.
* After PR is created, add a comment to your ticket: tag the other developer on our project and write a message “PR: < link to your Github Pull Request >“. Move ticket to Review status.
* If a ticket, based on description, should contain some code in order to solve a task, do not move it to Review status before you make a PR and add a comment with a link to the PR.
* Each commit should be a meaningful piece of work, contain a meaningful message and also include Jira ticket number. Example: “HRU-12 Add plate component”.
* Try to avoid creating commits with hundreds of files in it with a message “HRU-12 add all“
* Try to avoid creating PR with 10k changes with a message “Please review: add all changes“.
* Those 2 rules above can be bypassed only in case of an emergency, when we need to save Production, for example.