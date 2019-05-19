---
title: Npm on steroids
date: "2019-05-04T22:12:03.284Z"
description: How to pass arguments to npm scripts
---

Maybe it's too late to post something about NPM, since latest news by Github.

I discovered a while a go that you can pass arguments to npm scripts, even though it seems pretty basic and obvious, yet for some reason I was always interacting with projects who had multiple scripts

```javascript
{
  "scripts": {
    "build": "gulp build",
    "build-cms": "gulp build cms",
    "build-ecommerce": "gulp build ecommerce",
    "build-blog": "gulp build blog",
  }
}
```

As you can see there are so many scripts that are essentially doing the same thing, one can reduce this to basically

```javascript
{
  "scripts": {
    "build": "gulp build",
  }
}
```

and then excute it

`npm run build -- --project=cms`

For more information check out [this](https://docs.npmjs.com/cli/run-script)
