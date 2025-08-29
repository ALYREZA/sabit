import { View } from "react-native";
import { Col } from "@/components/Col";
import { Row } from "@/components/Row";
import { Background } from "@/kits/Background";

export default function Index() {
  return (
    <Background>
      {/* Test Col with height */}
      <Col height="200" backgroundColor="lightgray" p="4">
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 1, backgroundColor: "blue" }} />
        <View style={{ flex: 1, backgroundColor: "green" }} />
      </Col>

      {/* Test Row with height */}
      <Row height="100" backgroundColor="lightblue" p="4" mt="4">
        <View style={{ flex: 1, backgroundColor: "orange" }} />
        <View style={{ flex: 1, backgroundColor: "purple" }} />
        <View style={{ flex: 1, backgroundColor: "yellow" }} />
      </Row>
    </Background>
  );
}
