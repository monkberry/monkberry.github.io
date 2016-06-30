---
layout: docs
permalink: /docs/directives
title: Directives
---
{% raw %} 
# Directives

A what? A directives? Oh no. Do not panic, directive is a little helper that can simplify a lot of tasks.

Directive is a simple mark on DOM nodes that provides a few hook functions:

* `bind` — called when the node with directive appears in document,
* `update` — called when a value of directive is changed,
* `unbind` — called when the node is removed from document.

Every directive must start with `:` symbol, this mark help parser to understand that this is not a simple attribute but directive:

```monk
<div :directive={{ value }}>
```

Also it's possible to omit value, or set static value:

```monk
<div :directive>
<div :directive="123">
```

Let's create directive that will be hiding our node with `style="display: none"` attribute. Create a class that describes this:

```js
class Show {
  constructor() {
    this.node = null;
  }

  bind(node) {
    this.node = node;
  }

  unbind(node) {
    this.node = null;
  }

  update(value) {
    this.node.style.display = value ? '' : 'none';
  }
}
```

then import that class and render template:

```js
import Monkberry from 'monkberry';
import Template from 'template.monk';
import show from 'show.js'; 

const directives = {show};

const view = Monkberry.render(Template, document.body, {directives});
```

and now we can use our directive in template:

```monk
<div :show={{ visible }}>
```

On state change `div` will be shown or hidden:

```js
view.update({visible: true}); // show
view.update({visible: false}); // hide
```

That's it!

`:show`, `:fadeIn`, `:onclick` and other directives can be found in [monkberry-directives](https://github.com/monkberry/directives).

[Next →](/docs/examples)
{% endraw %} 
