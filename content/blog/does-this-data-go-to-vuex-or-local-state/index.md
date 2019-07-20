Hi Friend,

Recently I was having a conversation with another friend and we ended up not being able to define a solid answer about a very common task.

The answer is of course, like everything in life, it depends.

### What are we comparing?

It may look at first as we are comparing local state vs global state, or global variables vs local variables but **we are not**.

We are also not comparing Store vs State, you can get build a simple store
What we are really comparing is Vue vs Vuex.

> There is really no ‘**correct**’ answer.

It is important to understand that one can build an application without Vuex at all (not-cool). I was lucky enough to work on a project using only Vue, it’s possible you can build great stuff that makes money.

Some developers take the Vuex single source of truth too literal and put everything in Vuex.

But it’s probably best if you have a balance a hence, the question arises.

### What do you get with using Vuex

1. You get the state management pattern enforced by best practices, state, mutations, actions, getters and all of these lovely stuff.
2. Plugins, tutorials, examples aka vuex-awesome
3. Time travel debugging, State snapshots.
4. Application development patterns (api calls through vuex)

### Sounds Cool 😎 so why not use it everywhere?

I think it’s up to the developer to judge whether it makes sense to use it everywhere or not. It’s of course going to add lots of benefits when you application scales. But also slow down time to ship and that’s important.

> It’s a trade-off between short term and long term productivity.

#### Some questions I ask myself during taking this decision.

- How long do I have to complete this task?
- Am I going to move this piece of code to Vuex in the foreseeable future?
- Do I need time travel debugging?
- Is this code simple and easy to reason about?
- Is this code going to be shared across the application

Thanks for reading !
