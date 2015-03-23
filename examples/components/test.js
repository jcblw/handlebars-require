module.exports = TestComponent

function TestComponent(options){
  this.options = options || {}
}

TestComponent.prototype.render = function(options) {
  return (
    '<div class="' + (options.hash.className || 'test-component') + '">' + 
      options.hash.label + 
    '</div>'
  )
}