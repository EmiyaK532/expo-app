# Expo Todo App 📝

这是一个基于 [Expo](https://expo.dev) 开发的待办事项应用，使用 [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) 创建。

## 功能特点

- 🎨 支持亮色/暗色主题
- 🔐 GitHub 和微信第三方登录
- 📱 响应式设计，支持多平台
- 🔄 任务管理与状态同步
- 💫 流畅的动画效果

## 开始使用

1. 安装依赖

   ```bash
   pnpm install
   ```

2. 配置环境变量

   在项目根目录创建 `.env` 文件：

   ```
   EXPO_PUBLIC_GITHUB_CLIENT_ID=你的GitHub客户端ID
   EXPO_PUBLIC_WECHAT_APP_ID=你的微信AppID
   ```

3. 启动项目

   ```bash
   npx expo start
   ```

## 开发环境

你可以选择以下方式运行应用：

- 📱 [Expo Go](https://expo.dev/go)：快速预览和开发
- 📱 [开发构建](https://docs.expo.dev/develop/development-builds/introduction/)：完整功能测试
- 🤖 [Android 模拟器](https://docs.expo.dev/workflow/android-studio-emulator/)
- 🍎 [iOS 模拟器](https://docs.expo.dev/workflow/ios-simulator/)

## 项目结构

```
expo-app/
├── app/                # 应用页面和路由
├── assets/            # 静态资源
├── components/        # 可复用组件
├── constants/         # 常量定义
├── hooks/            # 自定义 Hooks
└── types/            # TypeScript 类型定义
```

## 技术栈

- [Expo](https://expo.dev)
- [React Native](https://reactnative.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Expo Router](https://docs.expo.dev/router/introduction)

## 学习资源

- [Expo 文档](https://docs.expo.dev/)
- [React Native 文档](https://reactnative.dev/docs/getting-started)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情
