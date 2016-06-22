# Installation

Install Monkberry with npm:

```bash
npm install monkberry --save
```

## Webpack

Install [monkberry-loader](https://github.com/monkberry/monkberry-loader):

```bash
npm install monkberry-loader --save
```

Add monkberry-loader to webpack.config.js in loaders section:

```js
loaders: [
  {test: /\.monk$/, loader: 'monkberry-loader'}
]
```

## Browserify

Install [monkberrify](https://github.com/monkberry/monkberrify):

```bash
npm install monkberrify --save
```

Add to your browserify transforms. For example, if using [gulp](http://gulpjs.com/):

```js
var monkberrify = require('monkberrify');

gulp.task('default', function() {
  gulp.src('app.js')
    .pipe(browserify({
      transform: [monkberrify]
    }))
    .pipe(gulp.dest('.'));
});
```

## CLI

Install monkberry globally:

```bash
npm install monkberry -g
```

```

  Usage: monkberry [options] <file ...>

  Options:

    -h, --help           output usage information
    -o, --output [file]  output file name, if not specified will write to stdout.
    -s, --source-map     generate source map.
    --as-module          compile as module.
    --draw-ast           draw ast tree of file.
    
```

Example:

```bash
monkberry views/*.monk --source-map --output view.js
```

Now include it in your page with [monkberry.js](https://github.com/monkberry/monkberry/blob/master/monkberry.js):

```html
<script src="monkberry.js"></script>
<script src="view.js"></script>
```

## CDN

You can use Monkberry from CDN:

```html
<script src="https://cdn.jsdelivr.net/monkberry/latest/monkberry.js"></script>
```

Note that you still need to precompile your views to use it.

Other versions available on [jsDelivr.com](https://www.jsdelivr.com/projects/monkberry) CDN.

## Standalone

If you only want to play with Monkberry and do not need to install it, you can use [monkberry-standalone](https://github.com/monkberry/standalone). 
This package includes Monkberry runtime and compiler. 

You can also play with Monkberry in this [fiddle](https://jsfiddle.net/medv/z8pzsdyv/).
