# promise含义
promise是一个对象,可以获取异步操作的消息.  
# promise特点
1. 对象状态不收外界影响.  
promise对象代表一个异步操作,有三种状态pendding,fulfilled,rejected.只有异步操作的结果可以改变状态.
2. 状态一旦改变,就不会不在变.  
promise对象状态改变只有两种情况,pendding到fulfilled或者pendding到rejected.只要这两种情况发生,状态就会发生凝固(resolved),不会再变,会一直保持这个结果.

# 基本用法
es6 规定 promise对象是一个构造函数,用来生成promise实例.  

promise接受一个函数作为参数,该函数有两个参数,分别为resolve rejecte,它们是两个函数,由js引擎提供.

resolve函数将promise对象状态从pedding改变为resolved ,在异步操作成功时调用,并将异步操作结果,作为参数传出去.

reject函数将promise状态从pedding改变为rejected,在异步操作结果失败时调用,并将异步操作报出的错误,作为参数传出去.


