import CodeInput from "@/components/CodeInput";
import { Button } from "@/kits/Button";
import { Heading, Paragraph } from "@/kits/typography";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

function Confirmation() {
  const [code, setCode] = useState("");
  const { mobile } = useLocalSearchParams();
  return (
    <>
      <Heading level={1}>ورود کد یک بار مصرف</Heading>
      <Paragraph>لطفا کد ارسال شده به شماره {mobile} را وارد کنید:</Paragraph>
      <CodeInput value={code} setValue={setCode} />
      <Button onPress={() => router.push("/(auth)/newPassword")}>تایید</Button>
      <Paragraph>کد ارسال شده تا 24 ساعت اعتبار دارد.</Paragraph>
    </>
  );
}

export default Confirmation;
