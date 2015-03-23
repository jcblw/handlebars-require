Require Helper
==============
Require helper allows for including ephemeral or "components" into your application. Right now it is mostly a experiment to see if this typeof data into Handlebar templates. The api is a bit rough right now but that should be ephemeral as well.

detachHelper
---------------
This detached helpers from Handlebars after the runtime is cleared.

- @param helperName {String} - the helper name that was registered.
- @param Handlbars {Object} - the Handlebars instance that has the registered helper

renderSafe
---------------
This pretty much wraps the render function of an component an spits out a SafeString wrapped return to allow for html in Handlebars templates without triple mustache

- @param component {Object} - the component object.
- @param Handlbars {Object} - the Handlebars instance that has the registered helper
- @returns html {SafeString|Object} - a instance of Handlebars.SafeString.

requireHandlebars
---------------
this is the main function that is exported it registers the helper and does some basic type checking, hopefully this will be expanded to support multiple types of requires. Eg. data / components

- @param _require {Function} - the main files require function to have a better referance into modules.
- @param Handlbars {Object} - the Handlebars instance to register helpers on. 
- @returns helpers {Object} - Object with currently just the require method on it, mostly for testing purposes.

require helper
---------------
the actual require helper pretty much proxies require into a helper. Also does some initializing of views and rendering of them.

- @param path {String} - required string to point to a module.
- @param options {Object} - this is passed from Handlebars itself when inside a helper, mostly used for attributes on helper (aka options.hash) options.hash.exports can be set to change exported helper name.