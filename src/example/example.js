"use strict";
import Monkberry from 'monkberry';
import 'monkberry-events';
import Template from './template.monk';

export default function (root) {
  const state = {
    todos: [
      {text: 'Primum', complete: true},
      {text: 'Secundo', complete: false},
      {text: 'Tertium', complete: false}
    ]
  };

  const view = Monkberry.render(Template, root);
  const input = view.querySelector('input');

  view.update(state);

  view.on('submit', 'form', function (event) {
    event.preventDefault();
    state.todos.push({text: input.value, complete: false});
    view.update(state);
    input.value = '';
  });

  view.on('click', '[data-index]', function (event) {
    var i = event.target.dataset.index;
    state.todos[i].complete = !state.todos[i].complete;
    view.update(state);
  });
}