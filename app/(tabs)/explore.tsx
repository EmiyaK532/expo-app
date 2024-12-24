import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Theme } from "@/constants/Theme";

const TASK_GROUPS = [
  {
    id: 1,
    title: "重要任务",
    tasks: [
      {
        id: 1,
        title: "客户会议",
        time: "09:00 - 10:00",
        date: "2024年3月25日",
        priority: "high",
      },
      {
        id: 2,
        title: "项目评审",
        time: "14:00 - 15:00",
        date: "2024年3月25日",
        priority: "high",
      },
    ],
  },
  {
    id: 2,
    title: "进行中任务",
    tasks: [
      {
        id: 3,
        title: "移动端界面设计",
        time: "11:00 - 12:00",
        date: "2024年3月25日",
        priority: "medium",
      },
      {
        id: 4,
        title: "原型设计",
        time: "15:00 - 16:00",
        date: "2024年3月25日",
        priority: "medium",
      },
    ],
  },
  {
    id: 3,
    title: "待处理任务",
    tasks: [
      {
        id: 5,
        title: "文档整理",
        time: "16:00 - 17:00",
        date: "2024年3月25日",
        priority: "low",
      },
      {
        id: 6,
        title: "周报撰写",
        time: "17:00 - 18:00",
        date: "2024年3月25日",
        priority: "low",
      },
    ],
  },
];

export default function ExploreScreen() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return Theme.global.danger;
      case "medium":
        return Theme.global.primary;
      case "low":
        return Theme.global.success;
      default:
        return Theme.global.primary;
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerTitle}>任务视图</ThemedText>
      </ThemedView>

      <ScrollView style={styles.content}>
        {TASK_GROUPS.map((group) => (
          <ThemedView key={group.id} style={styles.taskGroup}>
            <ThemedText style={styles.groupTitle}>{group.title}</ThemedText>
            {group.tasks.map((task) => (
              <TouchableOpacity key={task.id}>
                <ThemedView style={styles.taskCard}>
                  <ThemedView style={styles.taskHeader}>
                    <ThemedText style={styles.taskTitle}>
                      {task.title}
                    </ThemedText>
                    <ThemedView
                      style={[
                        styles.priorityIndicator,
                        { backgroundColor: getPriorityColor(task.priority) },
                      ]}
                    />
                  </ThemedView>
                  <ThemedText style={styles.taskTime}>{task.time}</ThemedText>
                  <ThemedText style={styles.taskDate}>{task.date}</ThemedText>
                </ThemedView>
              </TouchableOpacity>
            ))}
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  header: {
    padding: Theme.spacing.large,
    paddingTop: 40,
    backgroundColor: Theme.colors.card,
    ...Theme.shadow.small,
  },
  headerTitle: {
    fontSize: Theme.fontSize.xxlarge,
    fontWeight: "bold",
    color: Theme.colors.text,
  },
  content: {
    flex: 1,
    padding: Theme.spacing.medium,
  },
  taskGroup: {
    marginBottom: Theme.spacing.large,
  },
  groupTitle: {
    fontSize: Theme.fontSize.large,
    fontWeight: "600",
    marginBottom: Theme.spacing.medium,
    color: Theme.colors.text,
  },
  taskCard: {
    backgroundColor: Theme.colors.card,
    borderRadius: Theme.borderRadius.medium,
    padding: Theme.spacing.medium,
    marginBottom: Theme.spacing.small,
    ...Theme.shadow.small,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Theme.spacing.small,
  },
  taskTitle: {
    fontSize: Theme.fontSize.large,
    fontWeight: "500",
    color: Theme.colors.text,
  },
  priorityIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  taskTime: {
    fontSize: Theme.fontSize.medium,
    color: Theme.colors.textSecondary,
    marginBottom: 4,
  },
  taskDate: {
    fontSize: Theme.fontSize.medium,
    color: Theme.colors.textSecondary,
  },
});
