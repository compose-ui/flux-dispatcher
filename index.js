var _callbacks = []

module.exports = Dispatcher

function Dispatcher(){}

Dispatcher.prototype.register = function(cb) {
  _callbacks.push(cb)
  return true;
}

Dispatcher.prototype.dispatch = function(payload) {
  _callbacks.forEach(function(cb) {
    cb.call(cb, payload)
  })
}
