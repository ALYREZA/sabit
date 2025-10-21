import { Text } from "@/kits/typography";
import { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";

// Enable LayoutAnimation on Android
if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPress?: () => void;
  children?: React.ReactNode;
  isAccordion?: boolean;
  defaultExpanded?: boolean;
  style?: any;
}

export function Card({
  title,
  icon,
  rightIcon,
  onPress,
  children,
  isAccordion = false,
  defaultExpanded = false,
  style,
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handlePress = () => {
    if (isAccordion) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsExpanded(!isExpanded);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <View style={[styles.card, style]}>
      <TouchableOpacity
        style={styles.cardHeader}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={styles.cardContent}>
          <View style={styles.leftSection}>
            {rightIcon && (
              <View style={styles.rightIconContainer}>{rightIcon}</View>
            )}
            <View style={styles.titleSection}>
              {icon && <View style={styles.iconContainer}>{icon}</View>}
              <Text size={3} weight="medium" color="gray" style={styles.title}>
                {title}
              </Text>
            </View>
          </View>
          {isAccordion && (
            <View style={styles.chevronContainer}>
              <Text
                size={2}
                color="gray"
                style={[styles.chevron, isExpanded && styles.chevronExpanded]}
              >
                ▼
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      {isAccordion && isExpanded && children && (
        <View style={styles.cardChildren}>{children}</View>
      )}

      {!isAccordion && children && (
        <View style={styles.cardChildren}>{children}</View>
      )}
    </View>
  );
}

// Expandable Card Component
interface ExpandableCardProps {
  title: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  isAccordion?: boolean;
  defaultExpanded?: boolean;
  children?: React.ReactNode;
}

export function ExpandableCard({
  title,
  icon,
  onPress,
  isAccordion = false,
  defaultExpanded = false,
  children,
}: ExpandableCardProps) {
  return (
    <Card
      title={title}
      icon={icon}
      onPress={onPress}
      isAccordion={isAccordion}
      defaultExpanded={defaultExpanded}
      style={styles.expandableCard}
    >
      {children}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  expandableCard: {
    marginBottom: 16,
  },
  cardHeader: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  chevronContainer: {
    marginRight: 12,
  },
  chevron: {
    fontSize: 12,
    transform: [{ rotate: "0deg" }],
  },
  chevronExpanded: {
    transform: [{ rotate: "180deg" }],
  },
  titleSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  title: {
    marginRight: 8,
  },
  iconContainer: {
    marginLeft: 8,
  },
  rightIconContainer: {
    marginLeft: 12,
  },
  securityIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },
  cardChildren: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default Card;
