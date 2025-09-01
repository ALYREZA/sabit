import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button } from "@/kits/Button";
import { Heading, Paragraph } from "@/kits/typography";

export function ButtonShowcase() {
  return (
    <ScrollView style={styles.container}>
      <Heading level={1} style={styles.title}>
        Button Themes & Variants
      </Heading>
      
      <View style={styles.section}>
        <Heading level={2}>Primary Theme</Heading>
        <View style={styles.buttonGrid}>
          <View style={styles.buttonColumn}>
            <Paragraph style={styles.columnTitle}>Active States</Paragraph>
            <Button theme="primary" variant="filled">Primary Filled</Button>
            <Button theme="secondary" variant="filled">Secondary Filled</Button>
            <Button theme="secondary" variant="filled">Light Blue Filled</Button>
            <Button theme="primary" variant="outlined">Primary Outlined</Button>
            <Button theme="primary" variant="text">Primary Text</Button>
          </View>
          
          <View style={styles.buttonColumn}>
            <Paragraph style={styles.columnTitle}>Disabled States</Paragraph>
            <Button theme="primary" variant="filled" disabled>Disabled Filled</Button>
            <Button theme="secondary" variant="filled" disabled>Disabled Filled</Button>
            <Button theme="secondary" variant="filled" disabled>Disabled Filled</Button>
            <Button theme="primary" variant="outlined" disabled>Disabled Outlined</Button>
            <Button theme="primary" variant="text" disabled>Disabled Text</Button>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Heading level={2}>Button Sizes</Heading>
        <View style={styles.buttonRow}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </View>
      </View>

      <View style={styles.section}>
        <Heading level={2}>Interactive Examples</Heading>
        <View style={styles.buttonRow}>
          <Button 
            theme="primary" 
            variant="filled"
            onPress={() => console.log("Primary button pressed")}
          >
            Press Me
          </Button>
          <Button 
            theme="secondary" 
            variant="outlined"
            onPress={() => console.log("Secondary button pressed")}
          >
            Outlined
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "#1C39BB",
  },
  section: {
    marginBottom: 40,
  },
  buttonGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonColumn: {
    flex: 1,
    alignItems: "center",
    gap: 16,
  },
  columnTitle: {
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 16,
  },
});
