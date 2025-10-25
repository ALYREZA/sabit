import { useColor } from "@/hooks";
import { Text } from "@/kits/typography";
import React from "react";
import { StyleSheet, View } from "react-native";

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  stepLabels?: string[];
}

export function Stepper({
  currentStep,
  totalSteps,
  stepLabels = [],
}: StepperProps) {
  const primaryColor = useColor("primary");
  const borderColor = useColor("border");
  const textColor = useColor("text");
  const backgroundColor = useColor("background");

  return (
    <View style={styles.container}>
      <View style={styles.stepperContainer}>
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <View key={stepNumber} style={styles.stepContainer}>
              {/* Step Circle */}
              <View
                style={[
                  styles.stepCircle,
                  {
                    backgroundColor:
                      isActive || isCompleted ? primaryColor : backgroundColor,
                    borderColor:
                      isActive || isCompleted ? primaryColor : borderColor,
                  },
                ]}
              >
                <Text
                  color={isActive || isCompleted ? "white" : "gray"}
                  style={styles.stepNumber}
                >
                  {stepNumber}
                </Text>
              </View>

              {/* Step Label */}
              {stepLabels[index] && (
                <Text
                  color={isActive ? "blue" : "gray"}
                  size={2}
                  style={styles.stepLabel}
                >
                  {stepLabels[index]}
                </Text>
              )}

              {/* Connecting Line */}
              {index < totalSteps - 1 && (
                <View
                  style={[
                    styles.connectingLine,
                    {
                      backgroundColor: isCompleted ? primaryColor : borderColor,
                    },
                  ]}
                />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  stepperContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: "600",
  },
  stepLabel: {
    position: "absolute",
    top: -30,
    right: -10,
    textAlign: "center",
    minWidth: 60,
  },
  connectingLine: {
    height: 2,
    width: 60,
    marginHorizontal: -1,
    zIndex: 1,
  },
});
