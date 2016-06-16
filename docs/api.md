# API Reference

Monkberry API strictly follows [semantic versioning](http://semver.org).  

### `Monkberry.render(template, node[, options])`

Returns new `Monkberry` template instace, a view.

* `template` — `Monkberry` - template object
* `node` — `Element` - DOM node where to attach rendered template
* `options` — `{noCache: Boolean, context: Object, filters: Object}`

```js
const view = Monkberry.render(Template, document.body);
```


### `Monkberry.prerender(template, times)`

Prerepder template for future usage.

* `template` — `Monkberry` - template object
* `times` — `Number` - how many times


### `Monkberry.prototype.appendTo(toNode)`

Append rendered view nodes to specified node.

* `toNode` — `Element` - DOM node

### `Monkberry.prototype.insertBefore(toNode)`

Insert rendered view nodes before specified node.

* `toNode` — `Element` - DOM node.

### `Monkberry.prototype.createDocument()`

Return view's nodes. Note what if your template contains more then one root element, `createDocument` function will return `DocumentFragment` what contains all these nodes. If you have only one root node, it will be returned as is.

### `Monkberry.prototype.update(state)`

Update rendered template with state. You can specify only part of state to update or update entire state.

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

Remove view's nodes from document, and puts it to pool for future reuse.

### `Monkberry.prototype.querySelector(query)`

Select node by query.

* `query` — `String` query to select node

> Note what this function uses [Element.matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) for checking root nodes. Include polyfill for matches if you use it.

If you template contains more then one nodes on first level, `querySelector` will look other all subtrees. Array of all top level nodes can be accessed by `view.nodes[]` array. 

> Note what querySelector can not work with template which have if/for/custom node on first level.
> ```twig
> {% if cond %}
>     ...
> {% endif %}
> ```
> You will got exception like this: `Can not use querySelector with non-element nodes on first level.`
> 
> Solution is to wrap such statement into another node:
> ```twig
> <div>
>     {% if cond %}
>         ...
>     {% endif %}
> </div>
> ``` 

