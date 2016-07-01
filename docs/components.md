---
layout: docs
permalink: /docs/components
title: Components
---
{% raw %} 
# Components

Monkberry compiles templates into JavaScript classes, so you can extend them. 

```js
import ToDo from './ToDo.monk';

export default class extends Todo {
  constructor() {
    super();
    
    // Define internal state of your compenent if you need to.
    this.state = {
      text: '',
      complete: false
    };
    
    // Add event listeners.
    this.on('click', '.edit', this.onEdit.bind(this));
  }
  
  update(state) {
    // Define actions to do on state updates.
    Object.assign(this.state, state);
    
    // Call update of view itself.
    super.update(this.state);
  }
  
  onEdit(event) {
    // ...
  }
}
```

Now you can use it inside of another template:

```monk
{% import ToDo from './ToDo' %}

<ol> 
    {% for todo of todos %}
        <ToDo todo={{ todo }}/>
    {% endfor %}
</ol>
```

> Note that in this template we import `./ToDo`, not `./ToDo.monk`. 

Full example of this todo app with all components can be found on [monkberry/todomvc](https://github.com/monkberry/todomvc). 
This example uses [redux](http://redux.js.org/index.html) for manipulating state.

[Next →](/docs/directives)
{% endraw %} 
