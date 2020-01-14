---
title: 10 Reasons Why You Need to Work In A Legacy Codebase.
date: "2020-01-14T22:12:03.284Z"
description: Legacy code is an essential step to boost your career development
---

Many developers are frustrated when they hear the news that will work with legacy code. They are often angry and judgmental of developers who wrote this code. I have worked on a legacy codebase for around a year and it has yielded a huge boost to my career.

In this article, I bring you 10 reasons why you should pursue working on a legacy codebase at least for a little while.


---

You have probably heard this buzz word before but before we dive deep. Let's first understand what does legacy code means?

Many people have tried to define what's legacy code, as it's a pretty harsh badge to have on a codebase.

>Code without tests - Michael Feathers.

> source code that relates to a no-longer supported or manufactured operating system or other computer technology - Wikipedia.



There are several other definitions, I grant this badge when it gets too difficult to extend the code base with simple functionality without introducing new bugs.

## 1. Your debugging skills skyrocket 🚀
A bug is a mistake, finding the bug is done through debugging.

Unless you are one of these legends that get it right the first time, you have to debug even when writing new features. I would claim that we spend more time debugging code than writing new code.

Debugging is a necessary skill for any developer and often leads to new learning and growth. It also provides you a moment of excitement when you finally realize why this bug happened and you get this 'Ah aha' moment.

In our modern era of web development, we can use highly advanced debugging tools created for us like the vuejs dev tools or react dev tools. Being super powerful they show us lots of information about how our application behaves which makes debugging easy and convenient.

In Legacy codebases you get to the chance to explore the browser dev tools (which is also so amazing), explore concepts like call stack, source maps and add breakpoints, go into functions and have lots of fun during the process.

## 2. You see patterns everywhere
We are all guilty of this, and I still do it. copy-pasta 🎉.

Isn't this why stack overflow got so popular, right?
Developers tend to copy and paste, this can be due to several reasons and seniority is irrelevant here. It can happen due to lack of understanding or to follow existing design patterns, or maybe because the features are so similar and abstracting is not worth it yet.

Legacy codebases are full of these, as they have grown, patched, extended and matured over time. You will be able to recognize more patterns and oftentimes, with your new fresh critical eye, you will see lots of use cases for abstractions, code deletions.

**duck tip:** this is a tool that can help you spot out these in javascript codebases

## 3. You deepen your understanding of new features in the framework
I don't know about you, but I got my hands dirty with the vue world when Vue 2 was already released, I had no idea about Vue 1 API nor its feature set. Luckily, I worked on a Vue 1 app after that, and then my love for vue grow even more.

One example to demonstrate this point is again in the javascript world. While migrating from Vue 1 to Vue 2

### Breaking API Changes

Props `twoWay` Option got removed 👍

Props are now always one-way down. To produce side effects in the parent scope, a component needs to explicitly emit an event instead of relying on implicit binding.

Having medium-sized applications, with tens of components, debugging with two-way data binding and mutating props was really hard to debug. I think most of the newbies take for granted as they haven't faced the issues produced from twoWay bindings.

## 4. You get lots of refactoring opportunities
When you work on a legacy codebase you must cultivate the right attitude, and refactoring is a must-have. Usually, rewriting is a no go from management and therefore, refactoring should be your go-to solution.

This is hands down the most fun part of programming in my opinion
- Opening a file, delete all of it and write a couple of lines
- Reading an ugly piece of code and rewriting it to a more readable piece
- Abstracting lots of duplicated code
- Optimizing build / CI processes

Old Legacy codebases are full of possibilities that can be improved and benefit all of the company, the customers, and yourself.

## 5. You understand what does 'Tech Debt' mean for real
I never really grasped the idea of 'debt' until I worked in a legacy codebase. Tech debt used to a buzz word that has a negative vibe to me, while in reality Tech Debt is not bad, nor is it good. It's just debt, just like the financial debt.

Depending on the situation, it might make lots of sense to gain some debt and pay it later. Having a third party deadline is one instance.

This debt comes in forms of complexity in implementing features, producing more bugs, and ultimately shipping features slowly. You also realize that tech debt is often bound to produce also design debt and eventually user experience debt.

## 6. You understand the business side of your software

Most of the website visitors don't care if you are using hooks or jQuery. Well, they don't even grasp what is javascript. Point is, nobody cares about 'how' neat the code base is when it comes to profitability.

Legacy software for some reason is making sufficient money to be maintained and operated. At this point your dreams and judgments of what good software might get a real sense.
## 7. You understand the software side of the business
Contrary to the last point, you also get to see how clean and elegant codebases affect the business.
Usually using modern tech stack results in faster shipping of new features and shorter feedback cycles. This is beneficial to increase competitive advantages.

It also saves lots of development costs as developers can find more resources to help them and hence compose faster.
Recruitment becomes easier as well since the company will be attractive for developers who want to learn or use the latest technologies.
## 8. You develop a nonjudgemental mindset
Judging other developer's skills is a common 'bad' mindset that some developers have when they read bad code.
When you work on a legacy codebase you start to recognize and appreciate the efforts of the earlier developers and how they attempted to write clean code, yet you can also see the mistakes they have done.
You understand that developers make errors and that everyone is doing the best they can, given their knowledge and abilities at that time.
## 9. You learn that not all work is fun
I have constantly considered my job as a programmer to be one of my life's best blessings as I enjoy the process and would do it regardless if I'm getting paid for it or not.

When you work on a legacy codebase, you might be faced with a situation where you are doing tasks that should be automated, or you spend lots of time debugging and trying to understand what's going on due to lack of documentation.

The process sometimes is not pleasant, but it helps you grow as a person and appreciate how lucky we are to always have fun and get paid for it.

## 10. Experience working on an old codebase

Finally, the last benefit is the experience itself. 

In the web development industry, things are moving too fast, which also means that it's very hard to find a legacy frontend application that's still running and maintained.
Working on a legacy codebase is an experience that isn't easily attainable and hence one should be grateful if he gets the chance to experience it.






---





Thanks for reading, If you have worked on a legacy codebase let me know with what you think !