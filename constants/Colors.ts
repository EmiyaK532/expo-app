/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const primary = "#00A3C4"; // 主色调：明亮的青色
const secondary = "#38BDF8"; // 次要色：浅蓝色
const success = "#22C55E"; // 成功色：绿色
const warning = "#F59E0B"; // 警告色：橙色
const danger = "#EF4444"; // 危险色：红色

export const Colors = {
  light: {
    text: "#1E293B", // 深色文字
    textSecondary: "#64748B", // 次要文字
    background: "#F8FAFC", // 浅灰背景
    card: "#FFFFFF", // 卡片背景
    border: "#E2E8F0", // 边框颜色
    tint: primary,
    icon: "#64748B",
    tabIconDefault: "#94A3B8",
    tabIconSelected: primary,
  },
  dark: {
    text: "#F1F5F9", // 浅色文字
    textSecondary: "#94A3B8", // 次要文字
    background: "#0F172A", // 深蓝背景
    card: "#1E293B", // 卡片背景
    border: "#334155", // 边框颜色
    tint: secondary,
    icon: "#94A3B8",
    tabIconDefault: "#64748B",
    tabIconSelected: secondary,
  },
};

// 导出常用颜色供全局使用
export const GlobalColors = {
  primary,
  secondary,
  success,
  warning,
  danger,
};
