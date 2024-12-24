import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Link } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Avatar } from "@/components/Avatar";
import { Theme } from "@/constants/Theme";

// 模拟任务数据
const PRIORITY_TASKS = [
  {
    id: 1,
    title: "落地页设计",
    color: "#4CAF50",
  },
  {
    id: 2,
    title: "移动端设计",
    color: "#F44336",
  },
  {
    id: 3,
    title: "网站设计",
    color: "#00BCD4",
  },
];

const TASKS = [
  {
    id: 1,
    title: "客户会议",
    time: "09:00 - 10:00",
    date: "2024年3月25日",
  },
  {
    id: 2,
    title: "移动端界面",
    time: "11:00 - 12:00",
    date: "2024年3月25日",
  },
  {
    id: 3,
    title: "设计稿审核",
    time: "14:00 - 15:00",
    date: "2024年3月25日",
  },
];

// 在组件内添加动画状态
const scrollY = new Animated.Value(0);
const headerOpacity = scrollY.interpolate({
  inputRange: [0, 100],
  outputRange: [1, 0.8],
  extrapolate: "clamp",
});

export default function TasksScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView>
          <ThemedText style={styles.welcomeText}>欢迎回来，Zen</ThemedText>
          <ThemedText style={styles.dateText}>25 March 2024</ThemedText>
        </ThemedView>
        <TouchableOpacity>
          <Avatar />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>我的优先任务</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ThemedView style={styles.priorityCards}>
            {PRIORITY_TASKS.map((task) => (
              <ThemedView
                key={task.id}
                style={[styles.priorityCard, { backgroundColor: task.color }]}
              >
                <ThemedText style={styles.priorityCardText}>
                  {task.title}
                </ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </ScrollView>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText style={styles.sectionTitle}>My Task List</ThemedText>
        <ThemedView style={styles.taskTabs}>
          <ThemedText style={styles.activeTab}>待办</ThemedText>
          <ThemedText style={styles.tab}>进行中</ThemedText>
          <ThemedText style={styles.tab}>已完成</ThemedText>
        </ThemedView>

        {TASKS.map((task) => (
          <ThemedView key={task.id} style={styles.taskCard}>
            <ThemedText style={styles.taskTitle}>{task.title}</ThemedText>
            <ThemedText style={styles.taskTime}>{task.time}</ThemedText>
            <ThemedText style={styles.taskDate}>{task.date}</ThemedText>
          </ThemedView>
        ))}
      </ThemedView>

      <Link href="/new-task" asChild>
        <TouchableOpacity style={styles.fab}>
          <ThemedText style={styles.fabText}>+</ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Theme.spacing.large,
    paddingTop: 40,
    backgroundColor: Theme.colors.card,
    ...Theme.shadow.small,
  },
  welcomeText: {
    fontSize: Theme.fontSize.large,
    color: Theme.colors.textSecondary,
  },
  dateText: {
    fontSize: Theme.fontSize.xxlarge,
    fontWeight: "bold",
    color: Theme.colors.text,
    marginTop: Theme.spacing.small,
  },
  section: {
    padding: Theme.spacing.large,
  },
  sectionTitle: {
    fontSize: Theme.fontSize.xlarge,
    fontWeight: "bold",
    marginBottom: Theme.spacing.large,
  },
  priorityCards: {
    flexDirection: "row",
    gap: Theme.spacing.medium,
  },
  priorityCard: {
    width: 150,
    height: 100,
    borderRadius: Theme.borderRadius.large,
    padding: Theme.spacing.medium,
    justifyContent: "flex-end",
    ...Theme.shadow.small,
  },
  priorityCardText: {
    color: "#FFFFFF",
    fontSize: Theme.fontSize.large,
    fontWeight: "bold",
  },
  taskTabs: {
    flexDirection: "row",
    marginBottom: Theme.spacing.medium,
    gap: Theme.spacing.xlarge,
  },
  tab: {
    fontSize: Theme.fontSize.large,
    color: Theme.colors.textSecondary,
  },
  activeTab: {
    fontSize: Theme.fontSize.large,
    fontWeight: "bold",
    color: Theme.colors.text,
  },
  taskCard: {
    backgroundColor: Theme.colors.card,
    borderRadius: Theme.borderRadius.medium,
    padding: Theme.spacing.medium,
    marginBottom: Theme.spacing.medium,
    ...Theme.shadow.small,
  },
  taskTitle: {
    fontSize: Theme.fontSize.large,
    fontWeight: "bold",
    marginBottom: Theme.spacing.small,
  },
  taskTime: {
    fontSize: Theme.fontSize.medium,
    color: Theme.colors.textSecondary,
  },
  taskDate: {
    fontSize: Theme.fontSize.medium,
    color: Theme.colors.textSecondary,
  },
  fab: {
    position: "absolute",
    right: Theme.spacing.large,
    bottom: Theme.spacing.large,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Theme.global.primary,
    justifyContent: "center",
    alignItems: "center",
    ...Theme.shadow.medium,
  },
  fabText: {
    fontSize: Theme.fontSize.xxlarge,
    color: "#FFFFFF",
  },
});
