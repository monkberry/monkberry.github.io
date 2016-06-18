# Directives

A what? A directives? Oh no. Do not panic, directive a little helper what can simplify a lot of tasks.

Directive is simple mark on DOM nodes and provide a few hook functions:

* `bind` — called when the node with directive is appers in document,
* `update` — called when a value of directive is changed,
* `unbind` — called when the node removed from document.

Every directive must start with `:` symbol, this mark help parser to understand what this is not simple attribute but directive:

```twig
<div :directive={{ value }}>
```

Also it's possible to ommit value, or set static value:

```twig
<div :directive>
<div :directive="123">
```

Let's create directive what will be hinding our node with `style="display: none"` attribute. Create a class what decribes this:

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

and now we can use owr directive in template:

```twig
<div :show={{ visible }}>
```

On state change `div` will be shown or hidden:

```js
view.update({visible: true}); // Show
view.update({visible: false}); // hide
```

That's it!

`:show`, `:fadeIn`, `:onclick` and other directives can be found in [monkberry-directives](https://github.com/monkberry/directives).

[Next →](api.md)
