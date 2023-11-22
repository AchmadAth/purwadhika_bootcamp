import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAddOneCount = () => {
    setCount(count + 1);
  };
  return (
    <Container>
      <Heading>Purwadhika</Heading>
      <Box>
        <Text>Counter: {count}</Text>
      </Box>
      <Box>
        <Button onClick={handleAddOneCount}>add1</Button>
      </Box>
    </Container>
  );
}
