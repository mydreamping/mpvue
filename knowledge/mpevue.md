

#### 教程

###### 安装

```
# 全局安装 vue-cli
$ npm install --global vue-cli

# 创建一个基于 mpvue-quickstart 模板的新项目
$ vue init mpvue/mpvue-quickstart my-project

# 安装依赖
$ cd my-project
$ npm install
# 启动构建
$ npm run dev

ps:
1.使用mpvue无法直接看到效果，打开小程序微信开发者工具
2.npm run bulid打包，并在小程序开发者工具输入地址查看
3.小程序开发工具中，打开dist的打包文件即可
```



###### 注意点
```
支持vue的语法，也支持小程序的语法

实例生命周期：
vue语法的以及小程序语法的
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
及
app 部分：
onLaunch，初始化
onShow，当小程序启动，或从后台进入前台显示
onHide，当小程序从前台进入后台
page 部分：
onLoad，监听页面加载
onShow，监听页面显示
onReady，监听页面初次渲染完成
onHide，监听页面隐藏
onUnload，监听页面卸载
onPullDownRefresh，监听用户下拉动作
onReachBottom，页面上拉触底事件的处理函数
onShareAppMessage，用户点击右上角分享
onPageScroll，页面滚动
onTabItemTap, 当前是 tab 页时，点击 tab 时触发 （mpvue 0.0.16 支持）
```

