import { useRegister } from "@/hooks/requests/mutations/auth";
import { Button } from "@/kits/Button";
import { Input } from "@/kits/Input";
import { Heading, Paragraph } from "@/kits/typography";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

function Login() {
  const [mobile, setMobile] = useState("");
  const { mutate, error, isPending } = useRegister();
  const onSubmit = () => {
    mutate(
      { username: mobile },
      {
        onSuccess(data, variables, context) {
          console.log("====================================");
          console.log({ data, variables, context });
          console.log("====================================");
        },
      },
    );
  };

  console.log("====================================");
  console.log({ error });
  console.log("====================================");
  return (
    <>
      <Heading level={1} style={styles.title}>
        ورود یا ثبت نام
      </Heading>
      <Paragraph>{error?.error_description}</Paragraph>
      <View style={styles.form}>
        <Input
          label="شماره موبایل"
          keyboardType="number-pad"
          onChangeText={setMobile}
        />
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
