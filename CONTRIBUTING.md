# Contribution Guide

Thank you for contributing to the repository! Have fun coding and meeting new friends!

Here's a link to our Discord Server: https://discord.gg/7fZHdqaJQC

### Instructions TL;DR version
Master branch is protected, impossible to push there without making a Pull Request.
There are two ways to contribute to the repository:
- fork the repository on GitHub, write your code on the fork, then open a Pull Request to the original repository; our maintainers will review and merge the edits;
- or, join our Discord Server (link below) and ask our maintainer arthuro555 to add you to the organization in GitHub, so you can push to any branch, other than `master`.

Easy, and simple!

### Detailed instructions

You will need to use git to contribute changes. 

The standard setup flow is as follows:

1) Download the git repository from upstream
  <screenshot to be done>

2) Get write access to github: you can either do that by

  2.1) Request write access for your github account here (recommended)
    <screenshot to be done>

  2.2) Create your own copy of the github repository (a fork), and add it as a secondary git remote in your git client
    <screenshot to be done>

The standard contribution flow is as follow:

1) Use your git client to switch to the main repository's master branch, which contains the latest current version of the game source files. It is crucial you always do this before creating a new branch.
  <screenshot to be done>

2) Use your git client to create a new branch from the current repository state. Give it a name that represents your change separated by dashes, e.g. fix-item-pickup.
  <screenshot to be done>

3) Do your changes in GDevelop
  <screenshot to be done>

4) In your git client, add the changes and verify they are correct or that you are not adding incorrect/accidental changes/files.
  <screenshot to be done>
  
5) In your git client, create a commit with a name a message that describe your change, e.g. Fixed item pickup and The item pickup was broken by a missing "Trigger once", leading to the item being picked up twice. This commit corrects that.. It is crucial to make sure you are not committing on master but on your own branch.
  <screenshot to be done>
  
6) Push (upload) your commit with your git client, either on the main repository or to your fork if you did not request direct write access.
  <screenshot to be done>
  
7) Go on https://github.com/Gdevelop-game/GDevelop-Open-Game/. GitHub will have detected your recent push, and will display a button suggesting to create a pull request. Click on it, and submit the pull request. Make sure the request is for adding the changes from your branch to the master branch.
  <screenshot to be done>


Here is the flow for updating an ongoing pull request:

1) Switch to the branch the pull request was created on
  <screenshot to be done>

2) Repeat steps 3 to 6 of the change submission flow. The PR will be updated with the changes automatically with the push of new commits.
  <screenshot to be done>
