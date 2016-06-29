/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {"use strict";
	
	var _index = __webpack_require__(4);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _example = __webpack_require__(2);
	
	var _example2 = _interopRequireDefault(_example);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	  setTimeout(animateStars, 500);
	  getLatestReleaseVersion();
	  highlightCodeBlocks();
	  initExample();
	});
	
	window.addEventListener('resize', function () {
	  animateStars();
	});
	
	function showIntro() {
	  var intro = document.querySelector('.js-intro');
	  if (intro) {
	    intro.classList.add('-visible');
	  }
	}
	
	function animateStars() {
	  var stars = document.querySelector('.js-stars');
	  if (stars) {
	    var body = document.body,
	        html = document.documentElement;
	    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	
	    stars.style.height = height + 'px';
	    stars.classList.add('-visible');
	  }
	
	  setTimeout(showIntro, 700);
	}
	
	function getLatestReleaseVersion() {
	  var version = document.querySelector('.js-version');
	  if (version) {
	    fetch('https://api.github.com/repos/monkberry/monkberry/tags').then(function (response) {
	      return response.json();
	    }).then(function (data) {
	      return version.textContent = 'v' + data[0].name;
	    });
	  }
	}
	
	function highlightCodeBlocks() {
	  var blocks = document.querySelectorAll('pre code');
	  for (var i = 0; i < blocks.length; i++) {
	    _index2.default.highlightBlock(blocks[i]);
	  }
	}
	
	function initExample() {
	  var result = document.querySelector('.js-result');
	  if (result) {
	    (0, _example2.default)(result);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**                                      _    _
	 *                     /\/\   ___  _ __ | | _| |__   ___ _ __ _ __ _   _
	 *                    /    \ / _ \| '_ \| |/ / '_ \ / _ \ '__| '__| | | |
	 *                   / /\/\ \ (_) | | | |   <| |_) |  __/ |  | |  | |_| |
	 *                   \/    \/\___/|_| |_|_|\_\_.__/ \___|_|  |_|   \__, |
	 *                                                                 |___/
	 *
	 *        +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
	 *  Enter ->  |       |                                   |           |           |       |
	 *        +   +   +   +---+   +---+---+   +---+---+   +   +   +---+   +   +---+   +   +   +
	 *        |       |           |                   |   |       |       |   |   |       |   |
	 *        +---+---+---+---+---+   +---+---+---+---+   +---+---+   +---+   +   +---+---+   +
	 *        |       |               |       |           |       |       |   |           |   |
	 *        +   +   +   +---+---+---+   +   +   +---+---+   +   +---+   +   +---+---+   +   +
	 *        |   |       |           |   |   |       |       |               |   |           |
	 *        +   +---+---+   +---+   +   +   +---+   +   +---+---+---+---+---+   +   +   +---+
	 *        |   |       |       |       |       |   |   |       |       |   |       |   |   |
	 *        +   +---+   +---+   +---+---+---+   +   +   +   +   +   +   +   +---+---+   +   +
	 *        |           |       |       |   |       |       |   |   |   |           |   |   |
	 *        +---+---+---+   +---+   +   +   +   +---+---+---+   +---+   +---+---+   +   +   +
	 *        |   |       |           |       |   |       |       |       |               |   |
	 *        +   +   +   +---+---+---+   +---+   +   +   +   +---+   +---+---+   +---+---+   +
	 *        |   |   |           |           |   |   |   |       |   |       |   |           |
	 *        +   +   +---+---+   +---+---+---+   +---+   +---+   +   +   +   +   +   +---+   +
	 *        |       |                           |       |   |       |   |       |   |       |
	 *        +---+---+   +   +   +---+---+---+---+   +---+   +---+   +   +---+---+   +   +---+
	 *        |           |   |                               |       |               |       -> Exit
	 *        +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
	 */
	(function (document) {
	  /**
	   * Monkberry
	   * @class
	   */
	  function Monkberry() {
	    this.parent = null; // Parent view.
	    this.nested = []; // Nested views.
	    this.nodes = []; // Root DOM nodes.
	    this.context = null; // Optional context.
	    this.onRender = null; // Function to call on render.
	    this.onUpdate = null; // Function to call on update.
	    this.onRemove = null; // Function to call on remove.
	  }
	
	  /**
	   * Render template and attach it to node.
	   * @param {Monkberry} template
	   * @param {Element} node
	   * @param {{noCache: Boolean, context: Object}=} options
	   * @return {Monkberry}
	   */
	  Monkberry.render = function (template, node, options) {
	    var view;
	
	    if (options && options.noCache) {
	      view = new template();
	    } else {
	      view = template.pool.pop() || new template();
	    }
	
	    if (node.nodeType == 8) {
	      view.insertBefore(node);
	    } else {
	      view.appendTo(node);
	    }
	
	    if (options && options.context) {
	      view.context = options.context;
	    }
	
	    if (view.onRender) {
	      view.onRender();
	    }
	
	    return view;
	  };
	
	  /**
	   * Prerepder template for future usage.
	   * @param {Monkberry} template - Template name.
	   * @param {Number} times - Times of prerender.
	   */
	  Monkberry.prerender = function (template, times) {
	    while (times--) {
	      template.pool.push(new template());
	    }
	  };
	
	  /**
	   * Main loops processor.
	   */
	  Monkberry.loop = function (parent, node, map, template, array, options) {
	    var i, j, len, keys, transform, arrayLength, childrenSize = map.length;
	
	    // Get array length, and convert object to array if needed.
	    if (Array.isArray(array)) {
	      transform = transformArray;
	      arrayLength = array.length;
	    } else {
	      transform = transformObject;
	      keys = Object.keys(array);
	      arrayLength = keys.length;
	    }
	
	    // If new array contains less items what before, remove surpluses.
	    len = childrenSize - arrayLength;
	    for (i in map.items) {
	      if (len-- > 0) {
	        map.items[i].remove();
	      } else {
	        break;
	      }
	    }
	
	    // If there is already some views, update there data with new.
	    j = 0;
	    for (i in map.items) {
	      map.items[i].update(transform(array, keys, j, options));
	      j++;
	    }
	
	    // If new array contains more items when previous, render new views and append them.
	    for (j = childrenSize, len = arrayLength; j < len; j++) {
	      // Render new view.
	      var view = Monkberry.render(template, node);
	
	      // Set view hierarchy.
	      view.parent = parent;
	      parent.nested.push(view);
	
	      // Set context.
	      if (parent.context) {
	        view.context = parent.context;
	      }
	
	      // Remember to remove from children map on view remove.
	      i = map.push(view);
	      view.onRemove = (function (i) {
	        return function () {
	          map.remove(i);
	        };
	      })(i);
	
	      // Set view data (note what it must be after adding nodes to DOM).
	      view.update(transform(array, keys, j, options));
	    }
	  };
	
	  /**
	   * Main if processor.
	   */
	  Monkberry.cond = function (parent, node, child/*.ref*/, template, test) {
	    if (child.ref) { // If view was already inserted, update or remove it.
	      if (!test) {
	        child.ref.remove();
	      }
	    } else if (test) {
	      // Render new view.
	      var view = Monkberry.render(template, node);
	
	      // Set view hierarchy.
	      view.parent = parent;
	      parent.nested.push(view);
	
	      // Set context.
	      if (parent.context) {
	        view.context = parent.context;
	      }
	
	      // Remember to remove child ref on remove of view.
	      child.ref = view;
	      view.onRemove = function () {
	        child.ref = null;
	      };
	    }
	
	    return test;
	  };
	
	  /**
	   * Main custom tags processor.
	   */
	  Monkberry.insert = function (parent, node, child/*.ref*/, template, data) {
	    if (child.ref) { // If view was already inserted, update or remove it.
	        child.ref.update(data);
	    } else {
	      // Render new view.
	      var view = Monkberry.render(template, node);
	
	      // Set view hierarchy.
	      view.parent = parent;
	      parent.nested.push(view);
	
	      // Set context.
	      if (parent.context) {
	        view.context = parent.context;
	      }
	
	      // Remember to remove child ref on remove of view.
	      child.ref = view;
	      view.onRemove = function () {
	        child.ref = null;
	      };
	
	      // Set view data (note what it must be after adding nodes to DOM).
	      view.update(data);
	    }
	  };
	
	  /**
	   * Remove view from DOM.
	   */
	  Monkberry.prototype.remove = function () {
	    // Remove appended nodes.
	    var i = this.nodes.length;
	    while (i--) {
	      this.nodes[i].parentNode.removeChild(this.nodes[i]);
	    }
	
	    // Remove self from parent's children map or child ref.
	    if (this.onRemove) {
	      this.onRemove();
	    }
	
	    // Remove all nested views.
	    i = this.nested.length;
	    while (i--) {
	      this.nested[i].remove();
	    }
	
	    // Remove this view from parent's nested views.
	    if (this.parent) {
	      i = this.parent.nested.indexOf(this);
	      this.parent.nested.splice(i, 1);
	      this.parent = null;
	    }
	
	    // Store view in pool for reuse in future.
	    this.constructor.pool.push(this);
	  };
	
	  /**
	   * @param {Element} toNode
	   */
	  Monkberry.prototype.appendTo = function (toNode) {
	    for (var i = 0, len = this.nodes.length; i < len; i++) {
	      toNode.appendChild(this.nodes[i]);
	    }
	  };
	
	  /**
	   * @param {Element} toNode
	   */
	  Monkberry.prototype.insertBefore = function (toNode) {
	    if (toNode.parentNode) {
	      for (var i = 0, len = this.nodes.length; i < len; i++) {
	        toNode.parentNode.insertBefore(this.nodes[i], toNode);
	      }
	    } else {
	      throw new Error(
	        "Can not insert child view into parent node. " +
	        "You need append your view first and then update."
	      );
	    }
	  };
	
	  /**
	   * Return rendered node, or DocumentFragment of rendered nodes if more then one root node in template.
	   * @returns {Element|DocumentFragment}
	   */
	  Monkberry.prototype.createDocument = function () {
	    if (this.nodes.length == 1) {
	      return this.nodes[0];
	    } else {
	      var fragment = document.createDocumentFragment();
	      for (var i = 0, len = this.nodes.length; i < len; i++) {
	        fragment.appendChild(this.nodes[i]);
	      }
	      return fragment;
	    }
	  };
	
	  /**
	   * @param {string} query
	   * @returns {Element}
	   */
	  Monkberry.prototype.querySelector = function (query) {
	    for (var i = 0; i < this.nodes.length; i++) {
	      if (this.nodes[i].matches && this.nodes[i].matches(query)) {
	        return this.nodes[i];
	      }
	
	      if (this.nodes[i].nodeType === 8) {
	        throw 'Can not use querySelector with non-element nodes on first level.';
	      }
	
	      if (this.nodes[i].querySelector) {
	        var element = this.nodes[i].querySelector(query);
	        if (element) {
	          return element;
	        }
	      }
	    }
	    return null;
	  };
	
	
	  /**
	   * Simple Map implementation with length property.
	   */
	  function Map() {
	    this.items = Object.create(null);
	    this.length = 0;
	    this.next = 0;
	  }
	
	  Map.prototype.push = function (element) {
	    this.items[this.next] = element;
	    this.length += 1;
	    this.next += 1;
	    return this.next - 1;
	  };
	
	  Map.prototype.remove = function (i) {
	    if (i in this.items) {
	      delete this.items[i];
	      this.length -= 1;
	    } else {
	      throw new Error('You are trying to delete not existing element "' + i + '" form map.');
	    }
	  };
	
	  Map.prototype.forEach = function (callback) {
	    for (var i in this.items) {
	      callback(this.items[i]);
	    }
	  };
	
	  Monkberry.Map = Map;
	
	  //
	  // Helper function for working with foreach loops data.
	  // Will transform data for "key, value of array" constructions.
	  //
	
	  function transformArray(array, keys, i, options) {
	    if (options) {
	      var t = {__index__: i};
	      t[options.value] = array[i];
	
	      if (options.key) {
	        t[options.key] = i;
	      }
	
	      return t;
	    } else {
	      return array[i];
	    }
	  }
	
	  function transformObject(array, keys, i, options) {
	    if (options) {
	      var t = {__index__: i};
	      t[options.value] = array[keys[i]];
	
	      if (options.key) {
	        t[options.key] = keys[i];
	      }
	
	      return t;
	    } else {
	      return array[keys[i]];
	    }
	  }
	
	  if (true) {
	    module.exports = Monkberry;
	  } else {
	    window.Monkberry = Monkberry;
	  }
	})(window.document);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (root) {
	  var state = {
	    todos: [{ text: 'Primum', complete: true }, { text: 'Secundo', complete: false }, { text: 'Tertium', complete: false }]
	  };
	
	  var view = _monkberry2.default.render(_template2.default, root);
	  var input = view.querySelector('input');
	
	  view.update(state);
	
	  view.on('submit', 'form', function (event) {
	    event.preventDefault();
	    state.todos.push({ text: input.value, complete: false });
	    view.update(state);
	    input.value = '';
	  });
	
	  view.on('click', '[data-index]', function (event) {
	    var i = event.target.dataset.index;
	    state.todos[i].complete = !state.todos[i].complete;
	    view.update(state);
	  });
	};
	
	var _monkberry = __webpack_require__(1);
	
	var _monkberry2 = _interopRequireDefault(_monkberry);
	
	__webpack_require__(9);
	
	var _template = __webpack_require__(12);
	
	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/*
	Syntax highlighting with language autodetection.
	https://highlightjs.org/
	*/
	
	(function (factory) {
	
	  // Find the global object for export to both the browser and web workers.
	  var globalObject = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window || (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self;
	
	  // Setup highlight.js for different environments. First is Node.js or
	  // CommonJS.
	  if (true) {
	    factory(exports);
	  } else if (globalObject) {
	    // Export hljs globally even when using AMD for cases when this script
	    // is loaded with others that may still expect a global hljs.
	    globalObject.hljs = factory({});
	
	    // Finally register the global hljs with AMD.
	    if (typeof define === 'function' && define.amd) {
	      define([], function () {
	        return globalObject.hljs;
	      });
	    }
	  }
	})(function (hljs) {
	
	  /* Utility functions */
	
	  function escape(value) {
	    return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
	  }
	
	  function tag(node) {
	    return node.nodeName.toLowerCase();
	  }
	
	  function testRe(re, lexeme) {
	    var match = re && re.exec(lexeme);
	    return match && match.index == 0;
	  }
	
	  function isNotHighlighted(language) {
	    return (/^(no-?highlight|plain|text)$/i.test(language)
	    );
	  }
	
	  function blockLanguage(block) {
	    var i,
	        match,
	        length,
	        classes = block.className + ' ';
	
	    classes += block.parentNode ? block.parentNode.className : '';
	
	    // language-* takes precedence over non-prefixed class names.
	    match = /\blang(?:uage)?-([\w-]+)\b/i.exec(classes);
	    if (match) {
	      return getLanguage(match[1]) ? match[1] : 'no-highlight';
	    }
	
	    classes = classes.split(/\s+/);
	    for (i = 0, length = classes.length; i < length; i++) {
	      if (getLanguage(classes[i]) || isNotHighlighted(classes[i])) {
	        return classes[i];
	      }
	    }
	  }
	
	  function inherit(parent, obj) {
	    var result = {},
	        key;
	    for (key in parent) {
	      result[key] = parent[key];
	    }if (obj) for (key in obj) {
	      result[key] = obj[key];
	    }return result;
	  }
	
	  /* Stream merging */
	
	  function nodeStream(node) {
	    var result = [];
	    (function _nodeStream(node, offset) {
	      for (var child = node.firstChild; child; child = child.nextSibling) {
	        if (child.nodeType == 3) offset += child.nodeValue.length;else if (child.nodeType == 1) {
	          result.push({
	            event: 'start',
	            offset: offset,
	            node: child
	          });
	          offset = _nodeStream(child, offset);
	          // Prevent void elements from having an end tag that would actually
	          // double them in the output. There are more void elements in HTML
	          // but we list only those realistically expected in code display.
	          if (!tag(child).match(/br|hr|img|input/)) {
	            result.push({
	              event: 'stop',
	              offset: offset,
	              node: child
	            });
	          }
	        }
	      }
	      return offset;
	    })(node, 0);
	    return result;
	  }
	
	  function mergeStreams(original, highlighted, value) {
	    var processed = 0;
	    var result = '';
	    var nodeStack = [];
	
	    function selectStream() {
	      if (!original.length || !highlighted.length) {
	        return original.length ? original : highlighted;
	      }
	      if (original[0].offset != highlighted[0].offset) {
	        return original[0].offset < highlighted[0].offset ? original : highlighted;
	      }
	
	      /*
	      To avoid starting the stream just before it should stop the order is
	      ensured that original always starts first and closes last:
	       if (event1 == 'start' && event2 == 'start')
	        return original;
	      if (event1 == 'start' && event2 == 'stop')
	        return highlighted;
	      if (event1 == 'stop' && event2 == 'start')
	        return original;
	      if (event1 == 'stop' && event2 == 'stop')
	        return highlighted;
	       ... which is collapsed to:
	      */
	      return highlighted[0].event == 'start' ? original : highlighted;
	    }
	
	    function open(node) {
	      function attr_str(a) {
	        return ' ' + a.nodeName + '="' + escape(a.value) + '"';
	      }
	      result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';
	    }
	
	    function close(node) {
	      result += '</' + tag(node) + '>';
	    }
	
	    function render(event) {
	      (event.event == 'start' ? open : close)(event.node);
	    }
	
	    while (original.length || highlighted.length) {
	      var stream = selectStream();
	      result += escape(value.substr(processed, stream[0].offset - processed));
	      processed = stream[0].offset;
	      if (stream == original) {
	        /*
	        On any opening or closing tag of the original markup we first close
	        the entire highlighted node stack, then render the original tag along
	        with all the following original tags at the same offset and then
	        reopen all the tags on the highlighted stack.
	        */
	        nodeStack.reverse().forEach(close);
	        do {
	          render(stream.splice(0, 1)[0]);
	          stream = selectStream();
	        } while (stream == original && stream.length && stream[0].offset == processed);
	        nodeStack.reverse().forEach(open);
	      } else {
	        if (stream[0].event == 'start') {
	          nodeStack.push(stream[0].node);
	        } else {
	          nodeStack.pop();
	        }
	        render(stream.splice(0, 1)[0]);
	      }
	    }
	    return result + escape(value.substr(processed));
	  }
	
	  /* Initialization */
	
	  function compileLanguage(language) {
	
	    function reStr(re) {
	      return re && re.source || re;
	    }
	
	    function langRe(value, global) {
	      return new RegExp(reStr(value), 'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : ''));
	    }
	
	    function compileMode(mode, parent) {
	      if (mode.compiled) return;
	      mode.compiled = true;
	
	      mode.keywords = mode.keywords || mode.beginKeywords;
	      if (mode.keywords) {
	        var compiled_keywords = {};
	
	        var flatten = function flatten(className, str) {
	          if (language.case_insensitive) {
	            str = str.toLowerCase();
	          }
	          str.split(' ').forEach(function (kw) {
	            var pair = kw.split('|');
	            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
	          });
	        };
	
	        if (typeof mode.keywords == 'string') {
	          // string
	          flatten('keyword', mode.keywords);
	        } else {
	          Object.keys(mode.keywords).forEach(function (className) {
	            flatten(className, mode.keywords[className]);
	          });
	        }
	        mode.keywords = compiled_keywords;
	      }
	      mode.lexemesRe = langRe(mode.lexemes || /\b\w+\b/, true);
	
	      if (parent) {
	        if (mode.beginKeywords) {
	          mode.begin = '\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\b';
	        }
	        if (!mode.begin) mode.begin = /\B|\b/;
	        mode.beginRe = langRe(mode.begin);
	        if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
	        if (mode.end) mode.endRe = langRe(mode.end);
	        mode.terminator_end = reStr(mode.end) || '';
	        if (mode.endsWithParent && parent.terminator_end) mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
	      }
	      if (mode.illegal) mode.illegalRe = langRe(mode.illegal);
	      if (mode.relevance === undefined) mode.relevance = 1;
	      if (!mode.contains) {
	        mode.contains = [];
	      }
	      var expanded_contains = [];
	      mode.contains.forEach(function (c) {
	        if (c.variants) {
	          c.variants.forEach(function (v) {
	            expanded_contains.push(inherit(c, v));
	          });
	        } else {
	          expanded_contains.push(c == 'self' ? mode : c);
	        }
	      });
	      mode.contains = expanded_contains;
	      mode.contains.forEach(function (c) {
	        compileMode(c, mode);
	      });
	
	      if (mode.starts) {
	        compileMode(mode.starts, parent);
	      }
	
	      var terminators = mode.contains.map(function (c) {
	        return c.beginKeywords ? '\\.?(' + c.begin + ')\\.?' : c.begin;
	      }).concat([mode.terminator_end, mode.illegal]).map(reStr).filter(Boolean);
	      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : { exec: function exec() /*s*/{
	          return null;
	        } };
	    }
	
	    compileMode(language);
	  }
	
	  /*
	  Core highlighting function. Accepts a language name, or an alias, and a
	  string with the code to highlight. Returns an object with the following
	  properties:
	   - relevance (int)
	  - value (an HTML string with highlighting markup)
	   */
	  function highlight(name, value, ignore_illegals, continuation) {
	
	    function subMode(lexeme, mode) {
	      for (var i = 0; i < mode.contains.length; i++) {
	        if (testRe(mode.contains[i].beginRe, lexeme)) {
	          return mode.contains[i];
	        }
	      }
	    }
	
	    function endOfMode(mode, lexeme) {
	      if (testRe(mode.endRe, lexeme)) {
	        while (mode.endsParent && mode.parent) {
	          mode = mode.parent;
	        }
	        return mode;
	      }
	      if (mode.endsWithParent) {
	        return endOfMode(mode.parent, lexeme);
	      }
	    }
	
	    function isIllegal(lexeme, mode) {
	      return !ignore_illegals && testRe(mode.illegalRe, lexeme);
	    }
	
	    function keywordMatch(mode, match) {
	      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
	      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
	    }
	
	    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
	      var classPrefix = noPrefix ? '' : options.classPrefix,
	          openSpan = '<span class="' + classPrefix,
	          closeSpan = leaveOpen ? '' : '</span>';
	
	      openSpan += classname + '">';
	
	      return openSpan + insideSpan + closeSpan;
	    }
	
	    function processKeywords() {
	      if (!top.keywords) return escape(mode_buffer);
	      var result = '';
	      var last_index = 0;
	      top.lexemesRe.lastIndex = 0;
	      var match = top.lexemesRe.exec(mode_buffer);
	      while (match) {
	        result += escape(mode_buffer.substr(last_index, match.index - last_index));
	        var keyword_match = keywordMatch(top, match);
	        if (keyword_match) {
	          relevance += keyword_match[1];
	          result += buildSpan(keyword_match[0], escape(match[0]));
	        } else {
	          result += escape(match[0]);
	        }
	        last_index = top.lexemesRe.lastIndex;
	        match = top.lexemesRe.exec(mode_buffer);
	      }
	      return result + escape(mode_buffer.substr(last_index));
	    }
	
	    function processSubLanguage() {
	      var explicit = typeof top.subLanguage == 'string';
	      if (explicit && !languages[top.subLanguage]) {
	        return escape(mode_buffer);
	      }
	
	      var result = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);
	
	      // Counting embedded language score towards the host language may be disabled
	      // with zeroing the containing mode relevance. Usecase in point is Markdown that
	      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
	      // score.
	      if (top.relevance > 0) {
	        relevance += result.relevance;
	      }
	      if (explicit) {
	        continuations[top.subLanguage] = result.top;
	      }
	      return buildSpan(result.language, result.value, false, true);
	    }
	
	    function processBuffer() {
	      result += top.subLanguage !== undefined ? processSubLanguage() : processKeywords();
	      mode_buffer = '';
	    }
	
	    function startNewMode(mode, lexeme) {
	      result += mode.className ? buildSpan(mode.className, '', true) : '';
	      top = Object.create(mode, { parent: { value: top } });
	    }
	
	    function processLexeme(buffer, lexeme) {
	
	      mode_buffer += buffer;
	
	      if (lexeme === undefined) {
	        processBuffer();
	        return 0;
	      }
	
	      var new_mode = subMode(lexeme, top);
	      if (new_mode) {
	        if (new_mode.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (new_mode.excludeBegin) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (!new_mode.returnBegin && !new_mode.excludeBegin) {
	            mode_buffer = lexeme;
	          }
	        }
	        startNewMode(new_mode, lexeme);
	        return new_mode.returnBegin ? 0 : lexeme.length;
	      }
	
	      var end_mode = endOfMode(top, lexeme);
	      if (end_mode) {
	        var origin = top;
	        if (origin.skip) {
	          mode_buffer += lexeme;
	        } else {
	          if (!(origin.returnEnd || origin.excludeEnd)) {
	            mode_buffer += lexeme;
	          }
	          processBuffer();
	          if (origin.excludeEnd) {
	            mode_buffer = lexeme;
	          }
	        }
	        do {
	          if (top.className) {
	            result += '</span>';
	          }
	          if (!top.skip) {
	            relevance += top.relevance;
	          }
	          top = top.parent;
	        } while (top != end_mode.parent);
	        if (end_mode.starts) {
	          startNewMode(end_mode.starts, '');
	        }
	        return origin.returnEnd ? 0 : lexeme.length;
	      }
	
	      if (isIllegal(lexeme, top)) throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || '<unnamed>') + '"');
	
	      /*
	      Parser should not reach this point as all types of lexemes should be caught
	      earlier, but if it does due to some bug make sure it advances at least one
	      character forward to prevent infinite looping.
	      */
	      mode_buffer += lexeme;
	      return lexeme.length || 1;
	    }
	
	    var language = getLanguage(name);
	    if (!language) {
	      throw new Error('Unknown language: "' + name + '"');
	    }
	
	    compileLanguage(language);
	    var top = continuation || language;
	    var continuations = {}; // keep continuations for sub-languages
	    var result = '',
	        current;
	    for (current = top; current != language; current = current.parent) {
	      if (current.className) {
	        result = buildSpan(current.className, '', true) + result;
	      }
	    }
	    var mode_buffer = '';
	    var relevance = 0;
	    try {
	      var match,
	          count,
	          index = 0;
	      while (true) {
	        top.terminators.lastIndex = index;
	        match = top.terminators.exec(value);
	        if (!match) break;
	        count = processLexeme(value.substr(index, match.index - index), match[0]);
	        index = match.index + count;
	      }
	      processLexeme(value.substr(index));
	      for (current = top; current.parent; current = current.parent) {
	        // close dangling modes
	        if (current.className) {
	          result += '</span>';
	        }
	      }
	      return {
	        relevance: relevance,
	        value: result,
	        language: name,
	        top: top
	      };
	    } catch (e) {
	      if (e.message.indexOf('Illegal') != -1) {
	        return {
	          relevance: 0,
	          value: escape(value)
	        };
	      } else {
	        throw e;
	      }
	    }
	  }
	
	  /*
	  Highlighting with language detection. Accepts a string with the code to
	  highlight. Returns an object with the following properties:
	   - language (detected language)
	  - relevance (int)
	  - value (an HTML string with highlighting markup)
	  - second_best (object with the same structure for second-best heuristically
	    detected language, may be absent)
	   */
	  function highlightAuto(text, languageSubset) {
	    languageSubset = languageSubset || options.languages || Object.keys(languages);
	    var result = {
	      relevance: 0,
	      value: escape(text)
	    };
	    var second_best = result;
	    languageSubset.forEach(function (name) {
	      if (!getLanguage(name)) {
	        return;
	      }
	      var current = highlight(name, text, false);
	      current.language = name;
	      if (current.relevance > second_best.relevance) {
	        second_best = current;
	      }
	      if (current.relevance > result.relevance) {
	        second_best = result;
	        result = current;
	      }
	    });
	    if (second_best.language) {
	      result.second_best = second_best;
	    }
	    return result;
	  }
	
	  /*
	  Post-processing of the highlighted markup:
	   - replace TABs with something more useful
	  - replace real line-breaks with '<br>' for non-pre containers
	   */
	  function fixMarkup(value) {
	    if (options.tabReplace) {
	      value = value.replace(/^((<[^>]+>|\t)+)/gm, function (match, p1 /*..., offset, s*/) {
	        return p1.replace(/\t/g, options.tabReplace);
	      });
	    }
	    if (options.useBR) {
	      value = value.replace(/\n/g, '<br>');
	    }
	    return value;
	  }
	
	  function buildClassName(prevClassName, currentLang, resultLang) {
	    var language = currentLang ? aliases[currentLang] : resultLang,
	        result = [prevClassName.trim()];
	
	    if (!prevClassName.match(/\bhljs\b/)) {
	      result.push('hljs');
	    }
	
	    if (prevClassName.indexOf(language) === -1) {
	      result.push(language);
	    }
	
	    return result.join(' ').trim();
	  }
	
	  /*
	  Applies highlighting to a DOM node containing code. Accepts a DOM node and
	  two optional parameters for fixMarkup.
	  */
	  function highlightBlock(block) {
	    var language = blockLanguage(block);
	    if (isNotHighlighted(language)) return;
	
	    var node;
	    if (options.useBR) {
	      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      node.innerHTML = block.innerHTML.replace(/\n/g, '').replace(/<br[ \/]*>/g, '\n');
	    } else {
	      node = block;
	    }
	    var text = node.textContent;
	    var result = language ? highlight(language, text, true) : highlightAuto(text);
	
	    var originalStream = nodeStream(node);
	    if (originalStream.length) {
	      var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
	      resultNode.innerHTML = result.value;
	      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
	    }
	    result.value = fixMarkup(result.value);
	
	    block.innerHTML = result.value;
	    block.className = buildClassName(block.className, language, result.language);
	    block.result = {
	      language: result.language,
	      re: result.relevance
	    };
	    if (result.second_best) {
	      block.second_best = {
	        language: result.second_best.language,
	        re: result.second_best.relevance
	      };
	    }
	  }
	
	  var options = {
	    classPrefix: 'hljs-',
	    tabReplace: null,
	    useBR: false,
	    languages: undefined
	  };
	
	  /*
	  Updates highlight.js global options with values passed in the form of an object.
	  */
	  function configure(user_options) {
	    options = inherit(options, user_options);
	  }
	
	  /*
	  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
	  */
	  function initHighlighting() {
	    if (initHighlighting.called) return;
	    initHighlighting.called = true;
	
	    var blocks = document.querySelectorAll('pre code');
	    Array.prototype.forEach.call(blocks, highlightBlock);
	  }
	
	  /*
	  Attaches highlighting to the page load event.
	  */
	  function initHighlightingOnLoad() {
	    addEventListener('DOMContentLoaded', initHighlighting, false);
	    addEventListener('load', initHighlighting, false);
	  }
	
	  var languages = {};
	  var aliases = {};
	
	  function registerLanguage(name, language) {
	    var lang = languages[name] = language(hljs);
	    if (lang.aliases) {
	      lang.aliases.forEach(function (alias) {
	        aliases[alias] = name;
	      });
	    }
	  }
	
	  function listLanguages() {
	    return Object.keys(languages);
	  }
	
	  function getLanguage(name) {
	    name = (name || '').toLowerCase();
	    return languages[name] || languages[aliases[name]];
	  }
	
	  /* Interface definition */
	
	  hljs.highlight = highlight;
	  hljs.highlightAuto = highlightAuto;
	  hljs.fixMarkup = fixMarkup;
	  hljs.highlightBlock = highlightBlock;
	  hljs.configure = configure;
	  hljs.initHighlighting = initHighlighting;
	  hljs.initHighlightingOnLoad = initHighlightingOnLoad;
	  hljs.registerLanguage = registerLanguage;
	  hljs.listLanguages = listLanguages;
	  hljs.getLanguage = getLanguage;
	  hljs.inherit = inherit;
	
	  // Common regexps
	  hljs.IDENT_RE = '[a-zA-Z]\\w*';
	  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\w*';
	  hljs.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
	  hljs.C_NUMBER_RE = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
	  hljs.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
	  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';
	
	  // Common modes
	  hljs.BACKSLASH_ESCAPE = {
	    begin: '\\\\[\\s\\S]', relevance: 0
	  };
	  hljs.APOS_STRING_MODE = {
	    className: 'string',
	    begin: '\'', end: '\'',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.QUOTE_STRING_MODE = {
	    className: 'string',
	    begin: '"', end: '"',
	    illegal: '\\n',
	    contains: [hljs.BACKSLASH_ESCAPE]
	  };
	  hljs.PHRASAL_WORDS_MODE = {
	    begin: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
	  };
	  hljs.COMMENT = function (begin, end, inherits) {
	    var mode = hljs.inherit({
	      className: 'comment',
	      begin: begin, end: end,
	      contains: []
	    }, inherits || {});
	    mode.contains.push(hljs.PHRASAL_WORDS_MODE);
	    mode.contains.push({
	      className: 'doctag',
	      begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
	      relevance: 0
	    });
	    return mode;
	  };
	  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');
	  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\*', '\\*/');
	  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');
	  hljs.NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE,
	    relevance: 0
	  };
	  hljs.C_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.C_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.BINARY_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.BINARY_NUMBER_RE,
	    relevance: 0
	  };
	  hljs.CSS_NUMBER_MODE = {
	    className: 'number',
	    begin: hljs.NUMBER_RE + '(' + '%|em|ex|ch|rem' + '|vw|vh|vmin|vmax' + '|cm|mm|in|pt|pc|px' + '|deg|grad|rad|turn' + '|s|ms' + '|Hz|kHz' + '|dpi|dpcm|dppx' + ')?',
	    relevance: 0
	  };
	  hljs.REGEXP_MODE = {
	    className: 'regexp',
	    begin: /\//, end: /\/[gimuy]*/,
	    illegal: /\n/,
	    contains: [hljs.BACKSLASH_ESCAPE, {
	      begin: /\[/, end: /\]/,
	      relevance: 0,
	      contains: [hljs.BACKSLASH_ESCAPE]
	    }]
	  };
	  hljs.TITLE_MODE = {
	    className: 'title',
	    begin: hljs.IDENT_RE,
	    relevance: 0
	  };
	  hljs.UNDERSCORE_TITLE_MODE = {
	    className: 'title',
	    begin: hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };
	  hljs.METHOD_GUARD = {
	    // excludes method names from keyword processing
	    begin: '\\.\\s*' + hljs.UNDERSCORE_IDENT_RE,
	    relevance: 0
	  };
	
	  return hljs;
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var hljs = __webpack_require__(3);
	hljs.registerLanguage('js', __webpack_require__(5));
	hljs.registerLanguage('xml', __webpack_require__(7));
	hljs.registerLanguage('monk', __webpack_require__(6));
	
	hljs.configure({
	  languages: ['js', 'xml', 'monk']
	});
	
	exports.default = hljs;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (hljs) {
	  return {
	    aliases: ['js', 'jsx'],
	    keywords: {
	      keyword: 'in of if for while finally var new function do return void else break catch ' + 'instanceof with throw case default try this switch continue typeof delete ' + 'let yield const export super debugger as async await static ' +
	      // ECMAScript 6 modules import
	      'import from as',
	
	      literal: 'true false null undefined NaN Infinity',
	      built_in: 'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' + 'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' + 'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' + 'TypeError URIError Number Math Date String RegExp Array Float32Array ' + 'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' + 'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' + 'module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect ' + 'Promise',
	      monkberry: 'Monkberry Template'
	    },
	    contains: [{
	      className: 'meta',
	      relevance: 10,
	      begin: /^\s*['"]use (strict|asm)['"]/
	    }, {
	      className: 'meta',
	      begin: /^#!/, end: /$/
	    }, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, { // template string
	      className: 'string',
	      begin: '`', end: '`',
	      contains: [hljs.BACKSLASH_ESCAPE, {
	        className: 'subst',
	        begin: '\\$\\{', end: '\\}'
	      }]
	    }, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, {
	      className: 'number',
	      variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
	      relevance: 0
	    }, { // "value" container
	      begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
	      keywords: 'return throw case',
	      contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, hljs.REGEXP_MODE, { // E4X / JSX
	        begin: /</, end: /(\/\w+|\w+\/)>/,
	        subLanguage: 'xml',
	        contains: [{ begin: /<\w+\/>/, skip: true }, { begin: /<\w+/, end: /(\/\w+|\w+\/)>/, skip: true, contains: ['self'] }]
	      }],
	      relevance: 0
	    }, {
	      className: 'function',
	      beginKeywords: 'function', end: /\{/, excludeEnd: true,
	      contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }), {
	        className: 'params',
	        begin: /\(/, end: /\)/,
	        excludeBegin: true,
	        excludeEnd: true,
	        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
	      }],
	      illegal: /\[|%/
	    }, {
	      begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
	    }, hljs.METHOD_GUARD, { // ES6 class
	      className: 'class',
	      beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,
	      illegal: /[:"\[\]]/,
	      contains: [{ beginKeywords: 'extends' }, hljs.UNDERSCORE_TITLE_MODE]
	    }, {
	      beginKeywords: 'constructor', end: /\{/, excludeEnd: true
	    }],
	    illegal: /#(?!!)/
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (hljs) {
	  var PARAMS = {
	    className: 'params',
	    begin: '\\(', end: '\\)'
	  };
	
	  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' + 'max min parent random range source template_from_string';
	
	  var FUNCTIONS = {
	    beginKeywords: FUNCTION_NAMES,
	    keywords: { name: FUNCTION_NAMES },
	    relevance: 0,
	    contains: [PARAMS]
	  };
	
	  var FILTER = {
	    begin: /\|[A-Za-z_]+:?/,
	    keywords: 'abs batch capitalize convert_encoding date date_modify default ' + 'escape first format join json_encode keys last length lower ' + 'merge nl2br number_format raw replace reverse round slice sort split ' + 'striptags title trim upper url_encode',
	    contains: [FUNCTIONS]
	  };
	
	  var TAGS = 'for endfor if endif else import unsafe';
	
	  return {
	    aliases: ['monk'],
	    case_insensitive: true,
	    subLanguage: 'xml',
	    contains: [hljs.COMMENT(/\{#/, /#}/), {
	      className: 'template-tag',
	      begin: /\{%/, end: /%}/,
	      contains: [{
	        className: 'name',
	        begin: /\w+/,
	        keywords: TAGS,
	        starts: {
	          endsWithParent: true,
	          contains: [FILTER, FUNCTIONS, hljs.QUOTE_STRING_MODE],
	          relevance: 0
	        }
	      }]
	    }, {
	      className: 'template-variable',
	      begin: /\{\{/, end: /}}/,
	      contains: ['self', FILTER, FUNCTIONS]
	    }, {
	      className: 'directive',
	      begin: /:/,
	      contains: [{
	        className: 'template-variable',
	        begin: /\{\{/, end: /}}/,
	        contains: ['self', FILTER, FUNCTIONS]
	      }]
	    }]
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (hljs) {
	  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
	  var TAG_INTERNALS = {
	    endsWithParent: true,
	    illegal: /</,
	    relevance: 0,
	    contains: [{
	      className: 'attr',
	      begin: XML_IDENT_RE,
	      relevance: 0
	    }, {
	      begin: '=',
	      relevance: 0,
	      contains: [{
	        className: 'string',
	        variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }, { begin: /[^\s\/>]+/ }]
	      }]
	    }]
	  };
	  return {
	    aliases: ['html', 'xhtml', 'rss', 'atom', 'xsl', 'plist'],
	    case_insensitive: true,
	    contains: [{
	      className: 'meta',
	      begin: '<!DOCTYPE', end: '>',
	      relevance: 10,
	      contains: [{ begin: '\\[', end: '\\]' }]
	    }, hljs.COMMENT('<!--', '-->', {
	      relevance: 10
	    }), {
	      begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
	      relevance: 10
	    }, {
	      begin: /<\?(php)?/, end: /\?>/,
	      subLanguage: 'php',
	      contains: [{ begin: '/\\*', end: '\\*/', skip: true }]
	    }, {
	      className: 'tag',
	      /*
	      The lookahead pattern (?=...) ensures that 'begin' only matches
	      '<style' as a single word, followed by a whitespace or an
	      ending braket. The '$' is needed for the lexeme to be recognized
	      by hljs.subMode() that tests lexemes outside the stream.
	      */
	      begin: '<style(?=\\s|>|$)', end: '>',
	      keywords: { name: 'style' },
	      contains: [TAG_INTERNALS],
	      starts: {
	        end: '</style>', returnEnd: true,
	        subLanguage: ['css', 'xml']
	      }
	    }, {
	      className: 'tag',
	      // See the comment in the <style tag about the lookahead pattern
	      begin: '<script(?=\\s|>|$)', end: '>',
	      keywords: { name: 'script' },
	      contains: [TAG_INTERNALS],
	      starts: {
	        end: '\<\/script\>', returnEnd: true,
	        subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml']
	      }
	    }, {
	      className: 'meta',
	      variants: [{ begin: /<\?xml/, end: /\?>/, relevance: 10 }, { begin: /<\?\w+/, end: /\?>/ }]
	    }, {
	      className: 'tag',
	      begin: '</?', end: '/?>',
	      contains: [{
	        className: 'name', begin: /[^\/><\s]+/, relevance: 0
	      }, TAG_INTERNALS]
	    }]
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*** IMPORTS FROM imports-loader ***/
	(function() {
	
	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }
	
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return
	      }
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);
	
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.fetch;
	}.call(global));
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _monkberry = __webpack_require__(1);
	
	var _monkberry2 = _interopRequireDefault(_monkberry);
	
	var _domDelegate = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_monkberry2.default.prototype.on = function (eventType, selector, handler) {
	  var _this = this;
	
	  var useCapture = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];
	
	  if (!this.delegates) {
	    this.delegates = [];
	    this.nodes.forEach(function (node, i) {
	      if (node.nodeType === 8) {
	        throw 'Can not use event delegating with non-element nodes on first level.';
	      }
	
	      _this.delegates[i] = new _domDelegate.Delegate(node);
	    });
	  }
	
	  this.delegates.forEach(function (delegate) {
	    return delegate.on(eventType, selector, handler, useCapture);
	  });
	};
	
	_monkberry2.default.prototype.off = function () {
	  var eventType = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
	  var selector = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
	  var handler = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];
	  var useCapture = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];
	
	  this.delegates.forEach(function (delegate) {
	    return delegate.off(eventType, selector, handler, useCapture);
	  });
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	module.exports = Delegate;
	
	/**
	 * DOM event delegator
	 *
	 * The delegator will listen
	 * for events that bubble up
	 * to the root node.
	 *
	 * @constructor
	 * @param {Node|string} [root] The root node or a selector string matching the root node
	 */
	function Delegate(root) {
	
	  /**
	   * Maintain a map of listener
	   * lists, keyed by event name.
	   *
	   * @type Object
	   */
	  this.listenerMap = [{}, {}];
	  if (root) {
	    this.root(root);
	  }
	
	  /** @type function() */
	  this.handle = Delegate.prototype.handle.bind(this);
	}
	
	/**
	 * Start listening for events
	 * on the provided DOM element
	 *
	 * @param  {Node|string} [root] The root node or a selector string matching the root node
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.root = function(root) {
	  var listenerMap = this.listenerMap;
	  var eventType;
	
	  // Remove master event listeners
	  if (this.rootElement) {
	    for (eventType in listenerMap[1]) {
	      if (listenerMap[1].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, true);
	      }
	    }
	    for (eventType in listenerMap[0]) {
	      if (listenerMap[0].hasOwnProperty(eventType)) {
	        this.rootElement.removeEventListener(eventType, this.handle, false);
	      }
	    }
	  }
	
	  // If no root or root is not
	  // a dom node, then remove internal
	  // root reference and exit here
	  if (!root || !root.addEventListener) {
	    if (this.rootElement) {
	      delete this.rootElement;
	    }
	    return this;
	  }
	
	  /**
	   * The root node at which
	   * listeners are attached.
	   *
	   * @type Node
	   */
	  this.rootElement = root;
	
	  // Set up master event listeners
	  for (eventType in listenerMap[1]) {
	    if (listenerMap[1].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, true);
	    }
	  }
	  for (eventType in listenerMap[0]) {
	    if (listenerMap[0].hasOwnProperty(eventType)) {
	      this.rootElement.addEventListener(eventType, this.handle, false);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * @param {string} eventType
	 * @returns boolean
	 */
	Delegate.prototype.captureForType = function(eventType) {
	  return ['blur', 'error', 'focus', 'load', 'resize', 'scroll'].indexOf(eventType) !== -1;
	};
	
	/**
	 * Attach a handler to one
	 * event for all elements
	 * that match the selector,
	 * now or in the future
	 *
	 * The handler function receives
	 * three arguments: the DOM event
	 * object, the node that matched
	 * the selector while the event
	 * was bubbling and a reference
	 * to itself. Within the handler,
	 * 'this' is equal to the second
	 * argument.
	 *
	 * The node that actually received
	 * the event can be accessed via
	 * 'event.target'.
	 *
	 * @param {string} eventType Listen for these events
	 * @param {string|undefined} selector Only handle events on elements matching this selector, if undefined match root element
	 * @param {function()} handler Handler function - event data passed here will be in event.data
	 * @param {Object} [eventData] Data to pass in event.data
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
	  var root, listenerMap, matcher, matcherParam;
	
	  if (!eventType) {
	    throw new TypeError('Invalid event type: ' + eventType);
	  }
	
	  // handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // Fallback to sensible defaults
	  // if useCapture not set
	  if (useCapture === undefined) {
	    useCapture = this.captureForType(eventType);
	  }
	
	  if (typeof handler !== 'function') {
	    throw new TypeError('Handler must be a type of Function');
	  }
	
	  root = this.rootElement;
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	
	  // Add master handler for type if not created yet
	  if (!listenerMap[eventType]) {
	    if (root) {
	      root.addEventListener(eventType, this.handle, useCapture);
	    }
	    listenerMap[eventType] = [];
	  }
	
	  if (!selector) {
	    matcherParam = null;
	
	    // COMPLEX - matchesRoot needs to have access to
	    // this.rootElement, so bind the function to this.
	    matcher = matchesRoot.bind(this);
	
	  // Compile a matcher for the given selector
	  } else if (/^[a-z]+$/i.test(selector)) {
	    matcherParam = selector;
	    matcher = matchesTag;
	  } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
	    matcherParam = selector.slice(1);
	    matcher = matchesId;
	  } else {
	    matcherParam = selector;
	    matcher = matches;
	  }
	
	  // Add to the list of listeners
	  listenerMap[eventType].push({
	    selector: selector,
	    handler: handler,
	    matcher: matcher,
	    matcherParam: matcherParam
	  });
	
	  return this;
	};
	
	/**
	 * Remove an event handler
	 * for elements that match
	 * the selector, forever
	 *
	 * @param {string} [eventType] Remove handlers for events matching this type, considering the other parameters
	 * @param {string} [selector] If this parameter is omitted, only handlers which match the other two will be removed
	 * @param {function()} [handler] If this parameter is omitted, only handlers which match the previous two will be removed
	 * @returns {Delegate} This method is chainable
	 */
	Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
	  var i, listener, listenerMap, listenerList, singleEventType;
	
	  // Handler can be passed as
	  // the second or third argument
	  if (typeof selector === 'function') {
	    useCapture = handler;
	    handler = selector;
	    selector = null;
	  }
	
	  // If useCapture not set, remove
	  // all event listeners
	  if (useCapture === undefined) {
	    this.off(eventType, selector, handler, true);
	    this.off(eventType, selector, handler, false);
	    return this;
	  }
	
	  listenerMap = this.listenerMap[useCapture ? 1 : 0];
	  if (!eventType) {
	    for (singleEventType in listenerMap) {
	      if (listenerMap.hasOwnProperty(singleEventType)) {
	        this.off(singleEventType, selector, handler);
	      }
	    }
	
	    return this;
	  }
	
	  listenerList = listenerMap[eventType];
	  if (!listenerList || !listenerList.length) {
	    return this;
	  }
	
	  // Remove only parameter matches
	  // if specified
	  for (i = listenerList.length - 1; i >= 0; i--) {
	    listener = listenerList[i];
	
	    if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
	      listenerList.splice(i, 1);
	    }
	  }
	
	  // All listeners removed
	  if (!listenerList.length) {
	    delete listenerMap[eventType];
	
	    // Remove the main handler
	    if (this.rootElement) {
	      this.rootElement.removeEventListener(eventType, this.handle, useCapture);
	    }
	  }
	
	  return this;
	};
	
	
	/**
	 * Handle an arbitrary event.
	 *
	 * @param {Event} event
	 */
	Delegate.prototype.handle = function(event) {
	  var i, l, type = event.type, root, phase, listener, returned, listenerList = [], target, /** @const */ EVENTIGNORE = 'ftLabsDelegateIgnore';
	
	  if (event[EVENTIGNORE] === true) {
	    return;
	  }
	
	  target = event.target;
	
	  // Hardcode value of Node.TEXT_NODE
	  // as not defined in IE8
	  if (target.nodeType === 3) {
	    target = target.parentNode;
	  }
	
	  root = this.rootElement;
	
	  phase = event.eventPhase || ( event.target !== event.currentTarget ? 3 : 2 );
	  
	  switch (phase) {
	    case 1: //Event.CAPTURING_PHASE:
	      listenerList = this.listenerMap[1][type];
	    break;
	    case 2: //Event.AT_TARGET:
	      if (this.listenerMap[0] && this.listenerMap[0][type]) listenerList = listenerList.concat(this.listenerMap[0][type]);
	      if (this.listenerMap[1] && this.listenerMap[1][type]) listenerList = listenerList.concat(this.listenerMap[1][type]);
	    break;
	    case 3: //Event.BUBBLING_PHASE:
	      listenerList = this.listenerMap[0][type];
	    break;
	  }
	
	  // Need to continuously check
	  // that the specific list is
	  // still populated in case one
	  // of the callbacks actually
	  // causes the list to be destroyed.
	  l = listenerList.length;
	  while (target && l) {
	    for (i = 0; i < l; i++) {
	      listener = listenerList[i];
	
	      // Bail from this loop if
	      // the length changed and
	      // no more listeners are
	      // defined between i and l.
	      if (!listener) {
	        break;
	      }
	
	      // Check for match and fire
	      // the event if there's one
	      //
	      // TODO:MCG:20120117: Need a way
	      // to check if event#stopImmediatePropagation
	      // was called. If so, break both loops.
	      if (listener.matcher.call(target, listener.matcherParam, target)) {
	        returned = this.fire(event, target, listener);
	      }
	
	      // Stop propagation to subsequent
	      // callbacks if the callback returned
	      // false
	      if (returned === false) {
	        event[EVENTIGNORE] = true;
	        event.preventDefault();
	        return;
	      }
	    }
	
	    // TODO:MCG:20120117: Need a way to
	    // check if event#stopPropagation
	    // was called. If so, break looping
	    // through the DOM. Stop if the
	    // delegation root has been reached
	    if (target === root) {
	      break;
	    }
	
	    l = listenerList.length;
	    target = target.parentElement;
	  }
	};
	
	/**
	 * Fire a listener on a target.
	 *
	 * @param {Event} event
	 * @param {Node} target
	 * @param {Object} listener
	 * @returns {boolean}
	 */
	Delegate.prototype.fire = function(event, target, listener) {
	  return listener.handler.call(target, event, target);
	};
	
	/**
	 * Check whether an element
	 * matches a generic selector.
	 *
	 * @type function()
	 * @param {string} selector A CSS selector
	 */
	var matches = (function(el) {
	  if (!el) return;
	  var p = el.prototype;
	  return (p.matches || p.matchesSelector || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector);
	}(Element));
	
	/**
	 * Check whether an element
	 * matches a tag selector.
	 *
	 * Tags are NOT case-sensitive,
	 * except in XML (and XML-based
	 * languages such as XHTML).
	 *
	 * @param {string} tagName The tag name to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesTag(tagName, element) {
	  return tagName.toLowerCase() === element.tagName.toLowerCase();
	}
	
	/**
	 * Check whether an element
	 * matches the root.
	 *
	 * @param {?String} selector In this case this is always passed through as null and not used
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesRoot(selector, element) {
	  /*jshint validthis:true*/
	  if (this.rootElement === window) return element === document;
	  return this.rootElement === element;
	}
	
	/**
	 * Check whether the ID of
	 * the element in 'this'
	 * matches the given ID.
	 *
	 * IDs are case-sensitive.
	 *
	 * @param {string} id The ID to test against
	 * @param {Element} element The element to test with
	 * @returns boolean
	 */
	function matchesId(id, element) {
	  return id === element.id;
	}
	
	/**
	 * Short hand for off()
	 * and root(), ie both
	 * with no parameters
	 *
	 * @return void
	 */
	Delegate.prototype.destroy = function() {
	  this.off();
	  this.root();
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*jshint browser:true, node:true*/
	
	'use strict';
	
	/**
	 * @preserve Create and manage a DOM event delegator.
	 *
	 * @version 0.3.0
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
	var Delegate = __webpack_require__(10);
	
	module.exports = function(root) {
	  return new Delegate(root);
	};
	
	module.exports.Delegate = Delegate;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Monkberry = __webpack_require__(1);
	
	/**
	 * @class
	 */
	function template() {
	  Monkberry.call(this);
	  var _this = this;
	
	  // Create elements
	  var ol0 = document.createElement('ol');
	  var children0 = new Monkberry.Map();
	  var form1 = document.createElement('form');
	  var input2 = document.createElement('input');
	  var button3 = document.createElement('button');
	  var text4 = document.createTextNode('');
	
	  // Construct dom
	  input2.setAttribute("type", "text")
	  button3.appendChild(document.createTextNode("Add #"));
	  button3.appendChild(text4);
	  button3.setAttribute("type", "submit")
	  form1.appendChild(input2);
	  form1.appendChild(button3);
	
	  // Update functions
	  this.__update__ = {
	    todos: function (todos) {
	      Monkberry.loop(_this, ol0, children0, template_for0, todos, {"key":"i","value":"todo"});
	      text4.textContent = todos.length;
	    }
	  };
	
	  // On update actions
	  this.onUpdate = function (__data__) {
	    children0.forEach(function (view) {
	      view.update(__data__);
	    });
	  };
	
	  // Set root nodes
	  this.nodes = [ol0, form1];
	}
	template.prototype = Object.create(Monkberry.prototype);
	template.prototype.constructor = template;
	template.pool = [];
	template.filters = {};
	template.prototype.update = function (__data__) {
	  if (__data__.todos !== undefined) {
	    this.__update__.todos(__data__.todos);
	  }
	  this.onUpdate(__data__);
	};
	
	/**
	 * @class
	 */
	function template_for0() {
	  Monkberry.call(this);
	  var _this = this;
	
	  // Create elements
	  var li0 = document.createElement('li');
	  var input1 = document.createElement('input');
	  var for0 = document.createComment('if');
	  var child0 = {};
	  var child1 = {};
	
	  // Construct dom
	  input1.setAttribute("type", "checkbox")
	  li0.appendChild(input1);
	  li0.appendChild(for0);
	
	  // Update functions
	  this.__update__ = {
	    todo: function (todo) {
	      var result;
	      input1.checked = todo.complete;
	      result = Monkberry.cond(_this, for0, child0, template_for0_if0, todo.complete);
	      Monkberry.cond(_this, for0, child1, template_for0_else1, !result);
	    },
	    i: function (i) {
	      input1.setAttribute("data-index", i);
	    }
	  };
	
	  // On update actions
	  this.onUpdate = function (__data__) {
	    if (child0.ref) {
	      child0.ref.update(__data__);
	    }
	    if (child1.ref) {
	      child1.ref.update(__data__);
	    }
	  };
	
	  // Set root nodes
	  this.nodes = [li0];
	}
	template_for0.prototype = Object.create(Monkberry.prototype);
	template_for0.prototype.constructor = template_for0;
	template_for0.pool = [];
	template_for0.prototype.update = function (__data__) {
	  if (__data__.todo !== undefined && __data__.__index__ !== undefined) {
	    this.__update__.todo(__data__.todo);
	  }
	  if (__data__.i !== undefined && __data__.__index__ !== undefined) {
	    this.__update__.i(__data__.i);
	  }
	  this.onUpdate(__data__);
	};
	
	/**
	 * @class
	 */
	function template_for0_if0() {
	  Monkberry.call(this);
	
	  // Create elements
	  var del0 = document.createElement('del');
	  var text1 = document.createTextNode('');
	
	  // Construct dom
	  del0.appendChild(text1);
	
	  // Update functions
	  this.__update__ = {
	    todo: function (todo) {
	      text1.textContent = todo.text;
	    }
	  };
	
	  // Set root nodes
	  this.nodes = [del0];
	}
	template_for0_if0.prototype = Object.create(Monkberry.prototype);
	template_for0_if0.prototype.constructor = template_for0_if0;
	template_for0_if0.pool = [];
	template_for0_if0.prototype.update = function (__data__) {
	  if (__data__.todo !== undefined) {
	    this.__update__.todo(__data__.todo);
	  }
	};
	
	/**
	 * @class
	 */
	function template_for0_else1() {
	  Monkberry.call(this);
	
	  // Create elements
	  var em0 = document.createElement('em');
	  var text1 = document.createTextNode('');
	
	  // Construct dom
	  em0.appendChild(text1);
	
	  // Update functions
	  this.__update__ = {
	    todo: function (todo) {
	      text1.textContent = todo.text;
	    }
	  };
	
	  // Set root nodes
	  this.nodes = [em0];
	}
	template_for0_else1.prototype = Object.create(Monkberry.prototype);
	template_for0_else1.prototype.constructor = template_for0_else1;
	template_for0_else1.pool = [];
	template_for0_else1.prototype.update = function (__data__) {
	  if (__data__.todo !== undefined) {
	    this.__update__.todo(__data__.todo);
	  }
	};
	
	module.exports = template;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map