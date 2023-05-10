# 前端管理后台模板-主应用

管理后台模板，使用React + React Router + Mobx + AntDesign + Styled Component

微前端框架使用 [乾坤](https://qiankun.umijs.org/zh)

此模板作为微前端项目的主应用

## 注意事项
- 子应用配置中的`entry`必须以`/`结尾，否则找不到对应资源
- 子应用的activeRule不能与自身静态访问path相同，否则会造成资源混乱，一旦刷新，将会直接加载子应用

## 环境变量配置

环境变量使用`REACT_APP`开头， 在HTML文件中可通过`%REACT_APP_XXX%`获取，JS文件中可通过`process.env.REACT_APP_XXX`获取

##### 微前端相关环境变量
- `REACT_APP_MICRO_APP_${micro_app_name}` 需要与`./src/registerMicroApps`中的`microApps`和子应用的`package.json`中的`name`保持一致

- 与子应用进行交互通过`props`的进行参数传递

### 开发环境

开发环境下项目启动时默认使用根目录下 `.env.local`或`.env`运行，`.env.local`优先级更高，建议开发人员创建.env.local在本地（.local文件已经添加到git忽略目录）

### 线上环境

线上环境的环境变量位于`env`目录下，文件后缀对应环境名称

## 命令

可运行命令如下：

### `yarn start`

开发模式下运行项目， 默认端口3000
浏览器中访问 [http://localhost:3000](http://localhost:3000)

### `yarn build:xxx`

打包项目，编译后的文件位于`build`目录下

### `yarn analyze`

分析项目打包后体积，在项目编译`yarn build:xxx`完成后运行， 参考[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
