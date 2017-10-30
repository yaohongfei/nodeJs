var event = require('events');
var eventEmitter = new event.EventEmitter();


eventEmitter.on("many_data",function(arg1, arg2){
    console.log("data is ",arg1,arg2);
});

eventEmitter.emit("many_data","yhf", "good");

var yhf = function(m,n)
{
    console.log("result is ",m+n);
}

eventEmitter.on("add",yhf);

eventEmitter.emit("add",1,2);

//on 函数用于绑定事件函数，emit 属性用于触发一个事件