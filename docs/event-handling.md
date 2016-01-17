---
layout: docs
permalink: /docs/event-handling
title: Event handling
---
{% raw %} 
# Event handling

You can add event listener directly on node by getting node reference with [querySelector](/docs/api#monkberryprototypequeryselectorquery) method of view instance. 

```js
import Monkberry from 'monkberry';
import Template from './monkberry.monk';

const view = Monkberry.render(Template, document.body);

const node = view.querySelector('div');

node.addEventListener('click', (event) => { ... });
```

But this can be difficult when using ifs and for, because nodes can appear and disappear from view.

## Event delegating

Better solution is using event delegating, install [monkberry-events](https://github.com/monkberry/events):

```bash
npm install monkberry-events --save
```

and import it once in your project. It will add two more methods on Monkberry instances: `on` and `off`.

```js
import 'monkberry-events';
```

Now you can add event listener like this:

```js
view.on('click', 'div', (event) => { ... });
```

## Event listeners

Also there is another aproach using [directives](/docs/directives).

```monk
<div :onclick={{ this.handleClick }}>
  ...
</div>
```

See all available event listeners in [monkberry-directives](https://github.com/monkberry/directives) package.


Next, we describe how to use the [component](/docs/components) approach in Monkberry.

[Next →](/docs/components)
{% endraw %} 
