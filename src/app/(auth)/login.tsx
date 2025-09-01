import { Button } from "@/kits/Button";
import { Input } from "@/kits/Input";
import { Heading } from "@/kits/typography";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

function Login() {
  const [mobile, setMobile] = useState("");

  const onSubmit = () => {
    router.push({
      pathname: "/(auth)/confirmation",
      params: { mobile },
    });
  };
  return (
    <>
      <Heading level={1} style={styles.title}>
        ورود یا ثبت نام
      </Heading>

      <View style={styles.form}>
        <Input keyboardType="number-pad" onChangeText={setMobile} />
        <Button onPress={onSubmit}>ورود یا ثبت نام</Button>
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
