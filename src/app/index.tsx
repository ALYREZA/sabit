import { Col } from "@/components/Col";
import { Background } from "@/kits/Background";
import { Button } from "@/kits/Button";
import { Input } from "@/kits/Input";

export default function Index() {
  return (
    <Background>
      {/* Test Col with height */}
      <Col gap="20">
        <Input />
        <Button>Submit</Button>
      </Col>
    </Background>
  );
}
