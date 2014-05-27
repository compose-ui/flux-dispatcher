#Flux Dispatcher
 > A basic Dispatcher based on [Facebook's Flux architecture.](http://facebook.github.io/react/docs/flux-overview.html)

##Usage

```javascript
var Dispatcher = require('compose-flux-dispatcher')
  , my_dispatcher = new Dispatcher()

my_dispatcher.register(function() {
/* 
  This will get called _everytime_ 
  my_dispatcher.dispatch() is 
*/
})

my_dispatcher.dispatch(/* data you want to dispatch */)
```

##Caveats and Conventions

In true Flux fashion there is **only one** dispatcher. You can instantiate as many as you like within the same process but all dispatches will be shared to all registered callbacks. Instead, favor filtering by the payload in your callbacks.

```javascript
my_dispatcher.register(function(payload) {
  if (payload.source !== 'pugs')
    return

  /* Continue execution */
})
```

Use multiple instantiations for simplifying payloads

```javascript
var pug_dispatcher = new Dispatcher()

pug_dispatcher.send_pug = function(pug_name) {
  this.dispatch({
    source: 'pugs',
    name: pug_name
  })
}
```
