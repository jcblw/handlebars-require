module.exports = List

function List(options){
  this.options = options || {}
}

List.prototype.render = function(options) {
  var 
    list = (options.hash.items || '').split(',')
    ret = '<ul class="list-component">'

  list.forEach(function(label) {
    ret += '<li>' + label + '</li>'
  });

  ret += '</ul>'
  return ret;
}