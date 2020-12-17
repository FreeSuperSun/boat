---
title: 浏览器内多个标签页之间的通信方式有哪些
---

实现方法:

1. WebSocket(需要服务器配合)
2. localStorage(同源)
3. cookie+setInterval(不建议使用)
4. BroadcastChannel(同源)
5. Worker ServiceWorker SharedWorker
6. window.postMessage

## WebSocket

WebSocket本身是一种网络通信协议,能够实现客户端与服务器进行全双工的通信.

通过服务器中转,就可以实现多个标签页之间的通信.

## localStorage

localStorage是以源为单位进行存储的,即协议 端口 域名相同的会使用同样的localStorage.

在localStorage发生变化时,会触发storage事件,通过监听该事件,便可以进行跨域通信.

## cookie+setInterval

cookie可以根据设置的domain和path来确定cookie对哪些页面有效.在同一cookie都生效的几个页面
内,可以使用cookie来进行通信.

但是因为cookie在更改时没有触发事件,所以需要设置一个定时器对cookie进行轮询,这样会增加资源
的占用,所以不建议使用这种方式实现通信.

## BroadcastChannel

BroadcastChannel允许同源的不同上下文(不同标签 窗口 框架等)的多个页面订阅同一个通道,
通过发送和接收广播来实面跨页面通信.

## 参考链接

[Github解析页](https://github.com/haizlin/fe-interview/issues/25)

[跨页面通讯](https://g.yuque.com/robinson/fe-guide/hbk9b4)