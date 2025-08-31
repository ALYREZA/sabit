import { Button } from "@/kits/Button";
import { Input } from "@/kits/Input";
import { Text } from "@/kits/typography/Text";
import { StyleSheet, View } from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      <Text>ورود یا ثبت نام</Text>
      <View style={styles.form}>
        <Input keyboardType="number-pad" />
        <Button>ورود یا ثبت نام</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  form: {
    gap: 37,
  },
});

export default Login;
