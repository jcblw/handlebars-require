Require Helper
==============
Require helper allows for including ephemeral or "components" into your application. Right now it is mostly a experiment to see if this typeof data into Handlebar templates. The api is a bit rough right now but that should be ephemeral as well.

Usage
--------------

To get the helper injected into your instance of Handlebars require in the module and pass it the current require function and Handlebars.

```javascript
var 
  Handlebars = require('handlebars');

require('handlebars-require')(require, Handlebars); 
// now you should have the require helper
```

In the template now you can do this.

```handlebars
{{require './path/to/component'}} {{!-- This is a referance to a js file --}}
<div class="component-container">
  {{MyComponent property=value}} {{!-- exported value is based of contructor.name --}}
</div>
```

Setting ephemeral helper name

```handlebars
{{require './path/to/component' exports="NamedComponent"}}
{{NamedComponent property=value}} {{!-- exports changed the ref --}}
```

What is a Component
---------------------
Right now in the simplist form a component is a contructor that has a render function. This is loosly based off of [Backbone views](http://backbonejs.org/#View).
