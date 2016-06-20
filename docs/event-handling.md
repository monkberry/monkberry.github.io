# Event handling

You can add event listener directly on node by getting node reference with [querySelector]() method of view instance. 

```js
import Monkberry from 'monkberry';
import Template from './monkberry.monk';

const view = Monkberry.render(Template, document.body);

const node = view.querySelector('div');

node.addEventListener('click', (event) => { ... });
```

But this can be difficult then using ifs and for, because nodes can appear and disappear from view.

## Event delegating

Better solution is using event delegating, install [monkberry-events](https://github.com/monkberry/events):

```bash
npm install monkberry-events --save
```

and import it once in your project. It will add Monkberry two more methods: `on` and `off`.

```js
import 'monkberry-events';
```

Now you can add event listener like this:

```js
view.on('click', 'div', (event) => { ... });
```

Next, we describe how to use the [component](components.md) approach in Monkberry.

## Event listeners

Also there is another aproach using [directives](directives.md).

```twig
<div :onclick={{ this.handleClick }}>
  ...
</div>
```

All aviable event listeners in [monkberry-directives](https://github.com/monkberry/directives) package.

[Next →](components.md)
