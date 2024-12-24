import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Link, router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Theme } from "@/constants/Theme";

export default function WelcomeScreen() {
  // 创建动画值
  const [scaleAnim] = useState(new Animated.Value(1));
  const [fadeAnim] = useState(new Animated.Value(1));

  // 处理点击事件
  const handlePress = () => {
    // 按钮缩放动画
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    // 页面淡出动画
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      // 动画结束后进行导航
      router.push("/tasks");
    });
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image
        source={require("@/assets/images/welcome-illustration.png")}
        style={styles.illustration}
      />

      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title" style={styles.title}>
          让我们开始管理你的待办事项
        </ThemedText>

        <ThemedText style={styles.subtitle}>
          在笔记中记录待办事项，管理你的日常优先任务，实现你的目标。
        </ThemedText>

        <Animated.View
          style={[
            styles.getStartedButton,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={handlePress}
            activeOpacity={0.8}
          >
            <ThemedText style={styles.buttonText}>开始使用</ThemedText>
          </TouchableOpacity>
        </Animated.View>

        <ThemedView style={styles.signInContainer}>
          <ThemedText>已有账号？</ThemedText>
          <Link href="/signin">
            <ThemedText style={styles.signInText}>登录</ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  illustration: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 32,
    color: Theme.colors.textSecondary,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    width: "100%",
    backgroundColor: Theme.global.primary,
    borderRadius: 16,
    shadowColor: Theme.global.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonTouchable: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  signInContainer: {
    flexDirection: "row",
    marginTop: 32,
    backgroundColor: Theme.colors.card,
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  signInText: {
    color: Theme.global.primary,
    fontWeight: "600",
  },
});
