# BroadCast-3D
原生JS实现好玩的3D轮播图旋转特效。支持多参数注入。
唯一的不足点：由于开始写插件（轮子）吧，IE兼容性的做的不太好，后面会慢慢填补上这个坑。

**实例**：

![实例](./material/1.png)

## 依赖
原生JS实现，无需任何依赖
## 下载
```git
  https://github.com/hubvue/BroadCast-3D.git
```
或者点击上方 Clone or download
## 使用
```HTML
  <script src="BroadCast-3D/BroadCast.js"> </script>
```
## 实例
HTML文件
```HTML
  <div id="box"></div>
```
JavaScript文件
```javascript
  new Broadcast('#app', ["img/1.png","img/2.png","img/1.png","img/2.png","img/1.png","img/2.png","img/1.png", "img/2.png"],300,0.1);
```
或者
```javascript
  Broadcast('#app', ["img/1.png","img/2.png","img/1.png","img/2.png","img/1.png","img/2.png","img/1.png", "img/2.png"],300,0.1);
```
## API
  多参数注入
  **第一个参数**
   第一个参数为盒子，所有的Img元素会自动生成为其子元素。可支持输入选择器或者Dom元素。例：
```HTML
  <div id="box"></div>
  <script>
    var box = document.getElementById("box");
    new Broadcast(box);
    //或者
    new Broadcast("#box");
  </script>
```



