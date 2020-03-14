### 作业信息

| 这个作业属于哪个课程 |[2020春w班（福州大学）](https://edu.cnblogs.com/campus/fzu/2020SpringW)|
| -------------------- | ---------------------------------------------------- |
| 这个作业要求在哪里   | [作业要求](https://edu.cnblogs.com/campus/fzu/2020SpringW/homework/10456) |
|结对学号|221701418&221701435|
| 这个作业的目标       | 某次疫情统计可视化的实现                           |
| 作业正文             | ....                                                 |
| 其他参考文献         | [手机适配](http://npm.taobao.org/package/resize-detector) [灵感](https://github.com/BlankerL/DXY-COVID-19-Crawler)     
### 程序基本介绍

1. 数据来自 [腾讯新闻JSON](https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5)
2. 图表以及地图采用echarts插件(引入了vue-eaharts模块).
3. VUE项目
5. [在线演示]()

### 快速开始
```
#下载安装NODE.js环境

# 安装依赖
npm i

# 本地运行
npm run serve
```

### 未实现
1. 腾讯新闻JSON在近日将日期与人数关系表取消，导致图表曲线失效