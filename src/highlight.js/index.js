const hljs = require('./highlight');
hljs.registerLanguage('js', require('./languages/javascript'));
hljs.registerLanguage('xml', require('./languages/xml'));
hljs.registerLanguage('monk', require('./languages/monk'));

hljs.configure({
  languages: [
    'js',
    'xml',
    'monk'
  ]
});

export default hljs;
