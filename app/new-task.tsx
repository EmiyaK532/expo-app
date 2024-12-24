import { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Animated,
} from "react-native";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Avatar } from "@/components/Avatar";
import { Theme } from "@/constants/Theme";

const PRIORITY_OPTIONS = [
  { id: "high", label: "高", color: "#F44336" },
  { id: "medium", label: "中", color: "#00BCD4" },
  { id: "low", label: "低", color: "#4CAF50" },
];

const TIME_SLOTS = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  label: `${i.toString().padStart(2, "0")}:00`,
}));

export default function NewTaskScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedPriority, setSelectedPriority] = useState<string>("medium");
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("14:00");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const slideAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 1,
      useNativeDriver: true,
      tension: 30,
      friction: 7,
    }).start();
  }, []);

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // TODO: 保存任务逻辑
    router.back();
  };

  const renderPriorityOption = (option: (typeof PRIORITY_OPTIONS)[0]) => {
    const isSelected = selectedPriority === option.id;
    return (
      <TouchableOpacity
        key={option.id}
        style={[
          styles.priorityOption,
          { backgroundColor: option.color },
          isSelected && styles.selectedPriorityOption,
        ]}
        onPress={() => setSelectedPriority(option.id)}
      >
        <Animated.View
          style={[
            styles.priorityContent,
            {
              transform: [
                {
                  scale: isSelected ? 1.05 : 1,
                },
              ],
            },
          ]}
        >
          <ThemedText style={styles.priorityText}>{option.label}</ThemedText>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [400, 0],
              }),
            },
          ],
        },
      ]}
    >
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <ThemedText style={styles.backButton}>←</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>创建新任务</ThemedText>
      </ThemedView>

      <ScrollView style={styles.content}>
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>选择日期</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ThemedView style={styles.dateList}>
              {Array.from({ length: 7 }, (_, i) => {
                const date = new Date();
                date.setDate(date.getDate() + i);
                return (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.dateItem,
                      date.toDateString() === selectedDate.toDateString() &&
                        styles.selectedDateItem,
                    ]}
                    onPress={() => setSelectedDate(date)}
                  >
                    <ThemedText style={styles.dateDay}>
                      {date.getDate()}
                    </ThemedText>
                    <ThemedText style={styles.dateWeekday}>
                      {date.toLocaleDateString("en-US", { weekday: "short" })}
                    </ThemedText>
                  </TouchableOpacity>
                );
              })}
            </ThemedView>
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>选择时间</ThemedText>
          <ThemedView style={styles.timeContainer}>
            <ThemedView style={styles.timeSelector}>
              <ThemedText>从</ThemedText>
              <TextInput
                style={styles.timeInput}
                value={startTime}
                onChangeText={setStartTime}
              />
            </ThemedView>
            <ThemedText>至</ThemedText>
            <ThemedView style={styles.timeSelector}>
              <TextInput
                style={styles.timeInput}
                value={endTime}
                onChangeText={setEndTime}
              />
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>优先级</ThemedText>
          <ThemedView style={styles.priorityContainer}>
            {PRIORITY_OPTIONS.map(renderPriorityOption)}
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>任务标题</ThemedText>
          <TextInput
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            placeholder="输入任务标题"
            placeholderTextColor="#666666"
          />
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>添加成员</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ThemedView style={styles.memberList}>
              <Avatar />
              <Avatar />
              <Avatar />
              <TouchableOpacity style={styles.addMemberButton}>
                <ThemedText style={styles.addMemberText}>+</ThemedText>
              </TouchableOpacity>
            </ThemedView>
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>备注</ThemedText>
          <TextInput
            style={styles.noteInput}
            value={note}
            onChangeText={setNote}
            placeholder="输入备注"
            placeholderTextColor="#666666"
            multiline
          />
        </ThemedView>
      </ScrollView>

      <ThemedView style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.cancelButton]}
          onPress={handleBack}
        >
          <ThemedText style={styles.footerButtonText}>取消</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.createButton]}
          onPress={handleSave}
        >
          <ThemedText
            style={[styles.footerButtonText, styles.createButtonText]}
          >
            创建
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    backgroundColor: Theme.colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  dateList: {
    flexDirection: "row",
    gap: 12,
  },
  dateItem: {
    width: 48,
    height: 64,
    borderRadius: Theme.borderRadius.full,
    backgroundColor: Theme.colors.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    ...Theme.shadow.small,
  },
  selectedDateItem: {
    backgroundColor: Theme.colors.primary,
  },
  dateDay: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dateWeekday: {
    fontSize: 12,
    color: "#666666",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  timeSelector: {
    flex: 1,
  },
  timeInput: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: Theme.borderRadius.small,
    padding: 12,
    color: Theme.colors.text,
    borderWidth: 1,
    borderColor: Theme.colors.divider,
  },
  priorityContainer: {
    flexDirection: "row",
    gap: 16,
  },
  priorityOption: {
    flex: 1,
    height: 48,
    borderRadius: Theme.borderRadius.medium,
    overflow: "hidden",
  },
  priorityContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedPriorityOption: {
    borderWidth: 2,
    borderColor: Theme.colors.text,
  },
  priorityText: {
    color: Theme.colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
  titleInput: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: Theme.borderRadius.small,
    padding: 12,
    color: Theme.colors.text,
    borderWidth: 1,
    borderColor: Theme.colors.divider,
  },
  memberList: {
    flexDirection: "row",
    gap: 12,
  },
  addMemberButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  addMemberText: {
    fontSize: 24,
    color: "#666666",
  },
  noteInput: {
    backgroundColor: Theme.colors.cardBackground,
    borderRadius: Theme.borderRadius.small,
    padding: 12,
    color: Theme.colors.text,
    height: 100,
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: Theme.colors.divider,
  },
  footer: {
    flexDirection: "row",
    padding: Theme.spacing.large,
    gap: Theme.spacing.medium,
  },
  footerButton: {
    flex: 1,
    padding: Theme.spacing.medium,
    borderRadius: Theme.borderRadius.medium,
    alignItems: "center",
    ...Theme.shadow.small,
  },
  cancelButton: {
    backgroundColor: Theme.colors.card,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  createButton: {
    backgroundColor: Theme.global.primary,
  },
  footerButtonText: {
    fontSize: Theme.fontSize.large,
    fontWeight: "600",
    color: Theme.colors.text,
  },
  createButtonText: {
    color: "#FFFFFF",
  },
});
