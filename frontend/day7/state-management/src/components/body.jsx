import { useState } from "react";
import HeadingComponent from "./heading";
import { Box, Stack } from "@chakra-ui/react";
import InputComponent from "./input";

function BodyComponent() {
  const [content, setContent] = useState("ini kontent");
  return (
    <Stack>
      <HeadingComponent value={content} ayam={"ayam goreng"} />
      <Box>{content}</Box>
      <InputComponent set={setContent} />
    </Stack>
  );
}
export default BodyComponent;
