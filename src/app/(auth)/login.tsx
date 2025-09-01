import { Button } from "@/kits/Button";
import { Input } from "@/kits/Input";
import { Heading } from "@/kits/typography";
import { StyleSheet, View } from "react-native";

function Login() {
  return (
    <>
      <Heading level={1} style={styles.title}>
        ورود یا ثبت نام
      </Heading>

      <View style={styles.form}>
        <Input keyboardType="number-pad" />
        <Button>ورود یا ثبت نام</Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "#1C39BB",
  },
  form: {
    gap: 37,
    marginBottom: 40,
  },
});

export default Login;
