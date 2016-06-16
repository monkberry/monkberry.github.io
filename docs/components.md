# Components

Monkberry compiles template into JavaScript classes, so you can extend them. 

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
    super.update(state);
  }
  
  onEdit(event) {
    // ...
  }
}
```

now you can use it inside another templates:

```twig
{% import ToDo from './ToDo' %}

<ol> 
    {% for todo of todos %}
        <ToDo todo={{ todo }}/>
    {% endfor %}
</ol>
```

> Note what in this template we impoerted `./ToDo`, not `./ToDo.monk`. 

Full example of this todo app with components with can find on [monkberry/todomvc](https://github.com/monkberry/todomvc). 
This example uses [redux](http://redux.js.org/index.html) for manipulating state.

[Next →](api.md)
