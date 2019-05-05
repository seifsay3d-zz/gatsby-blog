---
title: Migrating to Vuejs from Symfony
date: "2015-05-18T22:12:03.284Z"
description: migrating from vuejs
---

1 year ago we started writing @yard using symfony2 for the backend and twigs for templating. Having been constantly changing and evolving lots of code were written and the code base grew. Maintaining the code base became difficult and very time consuming. So we decided to quit on the <em>old-school</em>”client-server app and move towards a SPA. We had to migrate our current system to SPA and also keep writing new features so they had to be done simultaneously.

We chose Vuejs as we thought it was a perfect fit for our needs, Vuejs is very easy to use if you know your way around HTML,CSS and JS. It’s also very minimal no webpack required, easy to configure and that was exactly what we needed to fix our problems.

Migrating made it easy to start getting rid of technical debt.

1. Manage all static files using npm

Our static files were not managed by any tool so we didn’t have huge control of the versions of the plugins we’ve been using nor did we know their dependencies. We’ve tried bower and wiredep but not all plugins had bower support so we used npm to manage dependencies.

2. Build System

We had no build systems we were serving lots of js/css files and we wanted to cut the number of requests down. We tried npm scripts to minimize the number of tools and use npm for both building and installing but it was very low level and some tasks were very lengthy so we chose Gulp and Browserify to build our javascript files. This did not only help us reduce the number of files, but also made us able to introduce scss to write css.

Having Build Systems and managing dependencies helped us get rid all unnecessary plugins that we have been using, upgrade our plugins and have an awesome “package.json” file.

3. Introducing Vuejs one component at a time

We wanted to start leverage the gains of having separate client app. But we couldn’t do that because the app was so big we couldn’t afford a major rewrite. We started migrating basic components such as the header,footer components. We also added tooltips components, charts and tables.

Having components have greatly increased our development time, we were also able to to seperate the frontend work from the backend work and thus reducing time where teams interact.

That’s our progress so far, we can’t wait completely separating the client app from the server :).
