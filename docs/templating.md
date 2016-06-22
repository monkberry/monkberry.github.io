# Templating

### Expressions

Monkberry perceives everything inside `{{` and `}}` mustache as JavaScript expression.

```twig
<div class="greetings {{ visible ? '' : 'hidden' }}">
    Hello, {{ user.name + "!" }}
</div>
```

Monkberry provides XSS protection by default, so you don't need to worry about it.

### If, Else

Can be any valid JavaScrpt expressions.

```twig
{% if count < 0 || count > 10 %}
  ...
{% else %}
  ...
{% endif %}
```

Any number of variables in `if`:

```twig
{% if array.indexOf(search) != -1 %}
  ...
{% endif %}
```

> Note that Monkberry updates only one of `if`/`else` block.
> ```twig
> {% if cond %}
>     Then {{ value }}!
> {% else %}
>     Else {{ value }}!
> {% endif %}
> ```
> Render that template:
> ```js
> const view = Monkberry.render(Template, {
>   cond: true,
>   value: 'one'
> });
> ```
> View will be `Then one!`. Then if we update view:
> ```js
> view.update({
>   cond: false,
>   value: 'two'
> });
> ```
> View will be `Else two!`. But if we now update only `cond`, variable of "then" part will be same as before.
> ```js
> view.update({
>   cond: true
> });
> ```
> View will be `Then one!` (instead of `Then two!`).
>
> This happens because Monkberry doesn't store variables passed to `update` function, it stores only DOM nodes.
> Monkberry will update only one part of `if`/`else`.

### For

Monkberry can loop over **arrays** and **objects** as well. 

```twig
{% for array %}
    {{ name }}
{% endfor %}
```

In this form, the body of `for` has access only to variables which `for` is iterating on.

```js
view.update({
  array: [
    {name: 'Monkberry'},
    ...
  ]
});
```

To access outer scope specify iterator name.

```twig
{% for user of array %}
    {{ user.name }}
{% endfor %}
```

Also key can be specified.

```twig
{% for key, user of array %}
    {{ key }}: {{ user.name }}
{% endfor %}
```

### Default values

The view rendering process consists of two phases: first we create the node and then we update the node content with data.
Sometimes the data for the view is not available at the time of rendering, and we have to specify default values.
The best way to do it is to use logical _OR_ operator `||`.

```twig
<div class="foo {{ modify || 'baz' }}">
    {{ content || "No content" }}
</div>
```

In this case on template render the view will be filled with default data:

```twig
<div class="foo baz">
    No content
</div>
```

Note that if you use any variable on the right side of _OR_ operator, that can't be used as default data.
  
```twig
{{ content || "No content" + foo }}
```


### Filters

Any expression support filter statement.

```twig
Hello, {{ user.name | upper }}
```

To define that filter:
```js
import Template from './template.monk';

const filters = {
  upper: (text) => text.toUpperCase()
};

const view = Monkberry.render(Template, document.body, filters);
```

Also Monkberry understands parameters for filters:

```js
const filters = {
  replace: (text, from, to) => text.replace(from, to)
};
```

```twig
{{ text | replace(/.../, '$1') }}
```

And allows to combine filters:
```twig
{{ text | lower | replace(/.../, '$1') | upper }}
```

That expression will be compiled into following JavaScript:
```js
upper(replace(lower(text), /.../, '$1'));
```

Filters can be used in expressions, `if` and `for` statements.

### Custom tags

Describe custom tag in separate template, for example `todo.monk`:

```twig
<div>
    {% if complete %}
        <s>{{ text }}</s>
    {% else %}
        <em>{{ text }}</em>
    {% endif %}
</div>
```

and then import and use it in another template:

```twig
{% import Todo from 'todo.monk' %}

<Todo complete={{ complete }} text={{ text }}/>
<Todo complete={{ true }} text="with static text"/>
<Todo {{ ...todo }}/>
```

### Spread attributes

Spread attributes allow to easily convert object into node attributes.  
The properties of the object that you pass in are copied onto the node's attributes.

```twig
<input {{...attr}}/>
```

```js
const view = Monkberry.render(Template, document.body);

view.update({
  attr: {
    id: 'foo', 
    value: 'baz'
  }
});
```

You can combine it with other attributes.

```twig
<input {{...attr}} value={{ value }}/>
```

Note that later updates of attributes override previous ones.

```js
view.update({value: 'baz'});
// ...
view.update({attr: {value: 'new baz'}}); // Will override previous value.
```

Spread operator also works well with custom attributes. In fact, this is the best way to pass data into custom tag. 
 
```twig
<CustomTag {{...attr}}/>
``` 

### Importing

It is possible to import anything in template: files, modules and another templates.
  
Custom tags:  
  
```twig
{% import CustomTag from './CustomTag.monk' %}

<CustomTag/>
```

Imported functions can be used as functions:

```twig
{% import upperCase from 'upper-case' %}

<input value={{ upperCase(value) }}>
```

Imported functions can be used as filters as well:

```twig
{% import upperCase from 'upper-case' %}

<input value={{ value | upperCase }}>
```

### Unsafe

Monkberry escapes all inserted variables by default. But if you want to insert 
some HTML template via variable you can use _unsafe_ statement which is using `innerHTML`. 
Improper use of the _unsafe_ statement can open you up to a [cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting) attack. 

```twig
{% unsafe '<a href="XSS">...</a>' %}
{% unsafe html %}
```

### Comments

You can use standard html comments.
 
```twig
<!-- Comment does here -->
```

Comments will be cut out from template. 

In next chapter we describe how to use [event handling](event-handling.md) with Monkberry.

[Next →](event-handling.md)
