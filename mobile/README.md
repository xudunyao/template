# 跨平台移动应用框架 - React Native
跨平台移动应用框架模板，使用
 - React Native
 - React Navigation
 - React Query
 - Mobx

## 环境配置
[https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)

## 调试工具 React Native Debugger
  - VS Code
  - [https://github.com/jhen0409/react-native-debugger](https://github.com/jhen0409/react-native-debugger)

## 命令
可运行命令如下：

### `yarn start`
启动本地的Bundle server

### `yarn ios`
在iOS模拟器运行本地项目，若没有执行`yarn start`则启动本地的Bundle server

### `yarn ios --device xxx`
在iOS真机中运行本地项目，若没有执行`yarn start`则启动本地的Bundle server

### `yarn android`
在Android模拟器运行本地项目，若没有执行`yarn start`则启动本地的Bundle server 

### `yarn build:android`
打包Android .AAB 文件，具体配置参考[https://reactnative.dev/docs/signed-apk-android]https://reactnative.dev/docs/signed-apk-android

## 支持svg
移除svg文件中的所有`fill="xxx"`, 并设置`<svg fill="none"`> 即可实现通过`fill`属性设置颜色，`width/height`属性设置尺寸