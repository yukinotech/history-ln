# H5 history API和history库简单学习

### 如何启动调试项目

shell根目录下，执行
```js
node ./packages/native-event/server.js
```
native-event换成对应项目名称即可

### 原生事件如何完成监听？
1. 原生history.pushState调用时，无法触发任何监听事件。如果要硬处理，可以改写native code
```js
// 普通用法
history.pushState({}, '', '/a')
// 改写后
history.pushState = ()=>{
  // 执行native code逻辑
  // 执行监听cb
}
```
2. 浏览器自带的前进和后退按钮点击的时候有监听事件，为'popstate'

### history库调push如何完成监听？
1. history.listen传入要执行的callback，存起来到一个数组
2. history库调push时，会把listen之前存的数组遍历一遍，触发回调

### 