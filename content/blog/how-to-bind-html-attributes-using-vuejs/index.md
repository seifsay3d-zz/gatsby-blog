---
title: How to add html attributes - Vuejs
date: "2019-05-17T22:12:03.284Z"
description: Binding HTML attributes Dynamically using vuejs
---

Hi Friend,

I recently was working on a task where I had to consume a `REST` endpoint which is providing validation rules. long story short, I wanted to be able to dynamically set `required` `pattern` and so on. I thought okay, I am gonna create a directive and use `element.setAttribute` but then I remembered that vuejs core team is awesome

### v-bind directive to the rescue

The `v-bind` directive is so powerful as it provides you with attribute binding capabilities.

you are probably familiar with it's shorthand version `:`

```html
<input v-bind:src="imgSrc" />

<input :src="imgSrc" />
```

Now image we don't actually know which attribute we want to bind, maybe it's the `src` maybe it's the `title` or maybe both.

`v-bind` can actually taken object and vola, you have a dynamically changing html attributes.

```html
<input v-bind="validationRules" />
```

```javascript

get validationRules () {
    return {
        required: true,
        pattern: this.someMethodToGetPattern(),
        src: false
    }
}
```

Using this you can do so many cool stuff, I have only used it with form validation but I see myself using this more and more.

**duck tip**: vuejs automatically removes attributes that have their values set to false
