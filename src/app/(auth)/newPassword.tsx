import { Button } from "@/kits/Button";
import { Input } from "@/kits/Input";
import { Heading } from "@/kits/typography";
import { router } from "expo-router";

function NewPassword() {
  return (
    <>
      <Heading level={1}>ایجاد رمز عبور ثابت</Heading>
      <Input keyboardType="twitter" secureTextEntry />
      <Input keyboardType="twitter" secureTextEntry />
      <Button onPress={router.back}>تایید</Button>
    </>
  );
}

export default NewPassword;
