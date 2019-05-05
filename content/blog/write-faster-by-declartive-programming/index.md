---
date: "2017-05-07T20:00:55+02:00"
title: "Write faster with declarative programming"
description: What is the fuss about frontend frameworks anyway
---

Declarative programming is often referred to with Imperative programming. Before diving in deeper lets make sure the difference is clear.

**Imperative programming** is when you tell the computer **how** to perform a task by giving it a set of instruction.

**Declarative programming** is when you tell the computer **what** you want to be done without having to worry about how is it going to be done.

Lets take the following analogy

imagine if someone is asking <em>Where do you live</em>

**Imperative Approach**: Go out of the main building, cross two streets and the take a right just after Mcdonald's. Right next to the tall building you'll find my house #100.

**Declarative Approach**: 100 Dokki st, Egypt.

You can see how easy it is to tell someone your address declaratively. Not only because it's shorter but also because it doesn't matter where the person is. Putting in mind that declarative approaches usually depends on an abstract imperative layer, in this scenario the person would use Google Maps for example.

### Declarative Programming and the rise of frontend frameworks

The web has been going through very fast changes, specially the frontend scene. One of the great game changer is how frameworks like React and Vue adopted declarative programming.

> A classic example is Doubling all elements in an array.

```javascript
function double(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2)
  }
  return result
}
```

```javascript
function double(arr) {
  return arr.map(item => item * 2)
}
```

Instead of explicitly defining everything that happens we rely on an imperative layer `.map` and let it handle the work for us, leaving only the **what** for us to do.

> Another classic example is if we want to manipulate an element when a button is clicked.

```javascript
$("#btn").click(function() {
  if ($(this).text() == "Enable") {
    $(this).text("Disable")
    $("#name").attr("disabled", false)
  } else {
    $(this).text("Enable")
    $("#name").attr("disabled", true)
  }
})
```

```html
<button v-on:click="toggleState()">{{ stateText }}</button>
<input type="text" disabled="{{state}}" />
```

On the view layer the goal is to map a state to a view, and whenever this state is changed the view automatically gets changed. The problem is that manipulating the DOM and rerendering all the elements all the time is very costly and would hurt performance causing flickering.

Fourtunately, with 'Virtual DOM' this is all possible. A Virtual DOM is simillar to the real DOM but without the ability to change what is on the screen. Whenever an update occurs, it is reflected in the virtual DOM, then the virtual DOM gets compared with the real DOM and only the part that needs to be changed is redrawn.

I have started using declarative methods and using frameworks such as Vuejs and it has been really helpful as I'm able to write faster, readable and maintainable code. If you haven't tried out declarative programming yet, I think you should start by using Vuejs as it's learning curve is very smooth.

If you want to read more about declarative programming checkout this [video](https://www.youtube.com/watch?v=yGh0bjzj4IQ) or [this](https://www.smashingmagazine.com/2014/07/declarative-programming/) if you are a reading person
