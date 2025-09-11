import { Box } from "@/kits/Box";
import { Text } from "@/kits/typography";
import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface CircularProgressProps {
  currentTime: string; // Format: "00:30:25"
  remainingTime: string; // Format: "۵۰ دقیقه مانده تا رسیدن به هدف"
  progress: number; // 0-1 (0.67 for 67% complete)
  size?: number;
  strokeWidth?: number;
  completedColor?: string;
  remainingColor?: string;
  backgroundColor?: string;
}

export function CircularProgress({
  currentTime,
  remainingTime,
  progress,
  size = 200,
  strokeWidth = 12,
  completedColor = "#20B2AA", // Teal color
  remainingColor = "#EAFBEF", // Mint green color
  backgroundColor = "#000000", // Black background
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const halfCircumference = Math.PI * radius; // Half circle circumference

  // Calculate path points for half-circle (bottom arc)
  const centerX = size / 2;
  const centerY = size / 2;
  const startX = centerX - radius;
  const startY = centerY;
  const endX = centerX + radius;
  const endY = centerY;

  // Create half-circle path (bottom arc)
  const halfCirclePath = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;

  return (
    <Box height="200" style={[styles.container]}>
      <Svg width={size} height={size / 1.2} style={styles.svg}>
        {/* Background half circle */}
        <Path
          d={halfCirclePath}
          stroke={remainingColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${halfCircumference} ${halfCircumference}`}
          strokeDashoffset={0}
        />

        {/* Progress half circle */}
        <Path
          d={halfCirclePath}
          stroke={completedColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${halfCircumference * progress} ${halfCircumference}`}
          strokeDashoffset={0}
        />
      </Svg>

      {/* Center content */}
      <View style={styles.centerContent}>
        <Text style={styles.title}>مطالعه امروز</Text>
        <Text style={styles.timer}>{currentTime}</Text>
        <Text style={styles.remaining}>{remainingTime}</Text>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  svg: {
    position: "absolute",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  title: {
    color: "#666666",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
    textAlign: "center",
  },
  timer: {
    color: "#666666",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "monospace",
  },
  remaining: {
    color: "#666666",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 20,
  },
});
