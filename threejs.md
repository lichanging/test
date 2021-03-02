<h1>three js实现两个几何体联动</h1>

复制两个相机的状态。有两个技巧 ：
一个是左下角的内容， 相机可以和你在主场景相机一样；
二就是将左下角覆盖渲染一个新的场景。

两个要点很到位，小的场景设置viewport就好


最终实现下来总结：
用到两个scene、一个render、两个camera、其中一个相机是另外一个相机的clone，并用setViewpoint()设置视口
关键代码：

```
render () {
  this.renderer.clear()
  this.renderer.setViewport(0, 0, window.innerWidth,  window.innerHeight - 150);
  this.renderer.render (this.scene, this.camera)

  this.controlSystemCamera = this.camera.clone()
  this.controlSystemCamera.lookAt(0,0,0)
  this.renderer.setViewport(60, 60, 80, 80)
  this.renderer.render(this.controlSystemScene, this.controlSystemCamera)
}
```
