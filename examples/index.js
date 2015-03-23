var 
  Handlebars = require('handlebars'),
  fs = require('fs'),
  template = fs.readFileSync('./template.hbs', 'utf8'),
  compiled;

require('..')(require, Handlebars);
compiled = Handlebars.compile(template);

console.log(compiled({}));
