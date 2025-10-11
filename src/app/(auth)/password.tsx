import { useLogin } from "@/hooks/requests/mutations/auth";
import { Button } from "@/kits/Button";
import { PasswordInput } from "@/kits/PasswordInput";
import { Heading, Paragraph } from "@/kits/typography";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

function Password() {
  const { mobile } = useLocalSearchParams();
  const [password, setPassword] = useState("");
  const { mutateAsync, isPending, error } = useLogin({
    username: mobile as string,
  });
  return (
    <>
      <Heading level={1}> رمز عبور </Heading>
      {error && <Paragraph>{error.error_description}</Paragraph>}
      <PasswordInput
        keyboardType="twitter"
        onChangeText={setPassword}
        label="رمز عبور"
      />
      <Button onPress={() => mutateAsync({ password })} loading={isPending}>
        تایید
      </Button>
    </>
  );
}

export default Password;
