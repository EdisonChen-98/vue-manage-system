<!--
 * @Author: Edison Chen
 * @Date: 2022-01-10 09:22:41
-->
# vue-manage-system

## 关于
很适合node新手入门，更多模块还在开发中  
外卖商户后台管理平台的前端部分，基于Vue 2，配合后端项目食用：[后端项目地址](https://github.com/EdisonChen-98/node-manage-system)

## 技术栈
前端: vue 2 + element-ui + axios + ES6  
后端: nodejs + express + mysql  

## 模块
已完成：登录注册模块，用户信息模块，token鉴权，商铺总览模块  
正在做: 个人商铺管理模块，角色模块

## 项目运行
```
确保安装了mysql并启动
db/index.js修改本地数据库配置
db/tableData文件夹下的cvs数据文件导入到mysql（mac会乱码要转一下）
```
```
git clone https://github.com/EdisonChen-98/vue-manage-system.git
npm install
npm run serve
```
