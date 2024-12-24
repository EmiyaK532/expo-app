import { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Link, router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Theme } from "@/constants/Theme";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";

// 配置
const GITHUB_CLIENT_ID = process.env.EXPO_PUBLIC_GITHUB_CLIENT_ID || "";
const WECHAT_APP_ID = process.env.EXPO_PUBLIC_WECHAT_APP_ID || "";

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
  const [loading, setLoading] = useState(false);

  // 处理 GitHub 登录
  const handleGithubLogin = async () => {
    try {
      setLoading(true);
      const redirectUri = makeRedirectUri({
        scheme: "your.app.scheme",
      });

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=user`;
      const result = await WebBrowser.openAuthSessionAsync(
        authUrl,
        redirectUri
      );

      if (result.type === "success") {
        const { url } = result;
        const code = url.split("code=")[1];
        // 这里调用你的后端 API 处理授权码
        router.replace("/tasks");
      }
    } catch (error) {
      console.error("GitHub登录错误:", error);
    } finally {
      setLoading(false);
    }
  };

  // 处理微信登录
  const handleWechatLogin = async () => {
    try {
      setLoading(true);
      // 实现微信登录逻辑
      router.replace("/tasks");
    } catch (error) {
      console.error("微信登录错误:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={styles.backButton}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>登录</ThemedText>
      </ThemedView>

      <ThemedView style={styles.content}>
        <ThemedText style={styles.subtitle}>选择你喜欢的方式登录</ThemedText>

        <TouchableOpacity
          style={[styles.loginButton, styles.githubButton]}
          onPress={handleGithubLogin}
          disabled={loading}
        >
          <Image
            source={require("@/assets/images/github-logo.png")}
            style={styles.buttonIcon}
          />
          <ThemedText style={styles.buttonText}>使用 GitHub 登录</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginButton, styles.wechatButton]}
          onPress={handleWechatLogin}
          disabled={loading}
        >
          <Image
            source={require("@/assets/images/wechat-logo.png")}
            style={styles.buttonIcon}
          />
          <ThemedText style={styles.buttonText}>使用微信登录</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: Theme.spacing.large,
    paddingTop: 40,
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: Theme.fontSize.xxlarge,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: Theme.spacing.large,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: Theme.fontSize.large,
    textAlign: "center",
    marginBottom: Theme.spacing.xlarge,
    color: Theme.colors.textSecondary,
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Theme.spacing.medium,
    borderRadius: Theme.borderRadius.medium,
    marginBottom: Theme.spacing.medium,
    ...Theme.shadow.small,
  },
  githubButton: {
    backgroundColor: "#24292e",
  },
  wechatButton: {
    backgroundColor: "#07C160",
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: Theme.spacing.medium,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: Theme.fontSize.large,
    fontWeight: "600",
  },
});
