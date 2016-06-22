# API Reference

Monkberry API strictly follows [semantic versioning](http://semver.org).  

### `Monkberry.render(template, node[, options])`

Returns a new `Monkberry` template instance, a "view".

* `template` — `Monkberry` template object,
* `node` — `Element` DOM node where to attach the rendered template,
* `options` — `Object` optional options.

```js
const view = Monkberry.render(Template, document.body);
```

Options object:

* `noCache` — `Boolean` to use the pool of prerendered templates or not, 
* `context` — `Object` this will pass through every component hierarchy, 
* `filters` — `Object` filters to template,
* `directives` — `Object` of directives.


### `Monkberry.prerender(template, times)`

Prerender template for future usage.

* `template` — `Monkberry` - template object
* `times` — `Number` - how many times

```js
Monkberry.prerender(Template, 10);

// Will return view with already created DOM nodes.
const view = Monkberry.render(Template, document.body);
```

This can be very useful. For example you can prerender templates while waiting for an XHR response.

### `Monkberry.prototype.appendTo(toNode)`

Append rendered view to the specified node.

* `toNode` — `Element` - DOM node

### `Monkberry.prototype.insertBefore(toNode)`

Insert rendered view before the specified node.

* `toNode` — `Element` - DOM node.

### `Monkberry.prototype.createDocument()`

Return view's nodes. Note that if your template contains more than one root element, `createDocument` will return `DocumentFragment` that contains all of those nodes. If you have only one root node, it will be returned as is.

### `Monkberry.prototype.update(state)`

Update rendered template with a new state. You can specify only a part of state to update or you can update the entire state.

* `state` — `Object` - values to update in template

Example:

```js
const state = {
    title: 'Title #1',
    content: '...'
};

view.update(state);

// Update only title.
view.update({title: 'Title #2'});
```

### `Monkberry.prototype.remove()`

Remove view's nodes from document, and put it to pool for future reuse.

### `Monkberry.prototype.querySelector(query)`

Select node by query.

* `query` — `String` query to select node

> Note that this function uses [Element.matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) for checking root nodes. Include polyfill for matches if you use it.

If your template contains more than one node on first level, `querySelector` will search all subtrees. Array of all top level nodes can be accessed with `view.nodes[]` array. 

> Note that querySelector cannot work with template which has if/for/custom node on first level.
> ```twig
> {% if cond %}
>     ...
> {% endif %}
> ```
> You will get an exception like this: `Cannot use querySelector with non-element nodes on first level.`
> 
> You can solve this by wrapping everything into another node:
> ```twig
> <div>
>     {% if cond %}
>         ...
>     {% endif %}
> </div>
> ``` 

