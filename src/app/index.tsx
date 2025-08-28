import { Background } from "../kits/Background";
import { GestureExample } from "../kits/GestureExample";
import { Paragraph } from "../kits/typography/Paragraph";

export default function Index() {
  return (
    <Background>
      <Paragraph>React Native Gesture Handler Demo</Paragraph>
      <GestureExample title="Try the gestures below!" />
    </Background>
  );
}
