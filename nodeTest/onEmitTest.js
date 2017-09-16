var commander = {} //订阅发布者
commander.list = [] //缓存数组
commander.listen = function(key, fn) {
  if (!this.list[key]) {
    // 如果还没有订阅该消息，就创建一个缓存列表
    this.list[key] = []
  }
  // 订阅消息添加到缓存列表
  this.list[key].push(fn)
}

commander.trigger = function() {
  console.log(arguments)
  var key = Array.prototype.shift.call(arguments) // 取出key
  var fns = this.list[key] // 取出缓存列表
  console.log(arguments)

  //没有订阅的话 返回
  if (!fns || fns.length === 0) {
    return
  }
  for (var i = 0, fn; (fn = fns[i++]); ) {
    fn.apply(this, arguments)
  }
}

//订阅消息
commander.listen('攻击', function(aims) {
  console.log('攻击: ' + aims)
})
commander.listen('防御', function(aims) {
  console.log('防御: ' + aims)
})
commander.trigger('攻击', '12.12.13')
