# API Reference

Monkberry API strictly follows [semantic versioning](http://semver.org).  

---

##### `Monkberry.render(template, node[, options])`

Returns new `Monkberry` template instace, a view.

* `template` — `Monkberry` - template object
* `node` — `Element` - DOM node where to attach rendered template.
* `options` — `{noCache: Boolean, context: Object}`

```js
const view = Monkberry.render(Template, document.body);
```

---

##### `Monkberry.prerender(template, times)`

Prerepder template for future usage.

* `template` — `Monkberry` - template object


