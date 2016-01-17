---
layout: docs
permalink: /docs/getting-started
title: Getting Started
---
{% raw %} 
# Getting Started

Let's start with creating a simple todo app.

> First, you need to install Monkberry `npm install monkberry --save` and then integrate it into your build system. Monkberry supports webpack, browserify and can be used as cli tool. Read more on [installation](/docs/installation) page. 

Create file `template.monk` with the following code:

```monk
<div>
  Hello {{ name }}!
</div>
```

Inside `{{` and `}}` we can place any variable or JavaScript expression. Monkberry is **safe**. We are not generating HTML strings so XSS protection is the default. `template.monk` will be compiled to JavaScript code like this:

```js
var div1 = document.createElement('div');
div1.textContent = 'Hello ' + name + '!';
```

And now we can use it in our app:

```js
import Monkberry from 'monkberry';
import Template from 'template.monk';

const view = Monkberry.render(Template, document.body);
view.update({name: 'World'});
```

Result:

```
Hello World!
```

## Loops

Now let's render a list of todos.

```monk
<ol> 
  {% for todo of todos %}
    <li>{{ todo }}</li>
  {% endfor %}
</ol>
```

```js 
import Monkberry from 'monkberry';
import Template from 'template.monk';

const view = Monkberry.render(Template, document.body);
const state = {
  todos: [
    'Primum',
    'Secundo',
    'Tertium'
  ]
};

view.update(state);
```

What if we want to add one more todo? That's simple. Just update view with new state.

```js
state.todos.push('Quarto');

view.update(state);
```

## Ifs

Now we want to strikethrough todos that are already completed.

```js
const state = {
  todos: [
    {text: 'Primum', complete: true},
    {text: 'Secundo', complete: true},
    {text: 'Tertium', complete: false}
  ]
};
```

```monk
<ol> 
  {% for todo of todos %}
    <li>
      {% if todo.complete %}
        <s>{{ todo.text }}</s>
      {% else %}
        <em>{{ todo.text }}</em>
      {% endif %}
    </li>
  {% endfor %}
</ol>
```

## Custom tags

When building big, complex apps it's very useful to break templates down into smaller parts. In Monkberry you can achieve this with custom tags. Let's divide our todo template into two parts.

One with todo itself `todo.monk`:

```monk
{% if todo.complete %}
  <s>{{ todo.text }}</s>
{% else %}
  <em>{{ todo.text }}</em>
{% endif %}
```

Now we can use it inside our `template.monk`:

```monk
{% import Todo from "todo.monk" %}

<ol> 
  {% for todo of todos %}
    <li>
      <Todo todo={{ todo }}/>
    </li>
  {% endfor %}
</ol>
```

That's it! So simple.

Now you know basic concepts of Monkberry, but there is much more.

Continue exploring Monkberry on [templating docs](/docs/templating).

[Next →](/docs/templating)
{% endraw %} 
