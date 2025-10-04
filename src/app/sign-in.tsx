import { useAuth } from "@/contexts/AuthContext";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
  const { signIn } = useAuth();

  const handleSignIn = () => {
    // Mock user data - replace with your actual authentication logic
    const mockUser = {
      id: "1",
      email: "user@example.com",
      name: "John Doe",
      avatar: "https://via.placeholder.com/150",
    };
    const mockToken = "mock-jwt-token-123";

    signIn(mockUser, mockToken);
    // Navigate after signing in
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sabit</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>
      <Text style={styles.button} onPress={handleSignIn}>
        Sign In
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 32,
    color: "#666",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    color: "white",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: "600",
    overflow: "hidden",
  },
});
