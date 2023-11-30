import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

function HomePage() {
  const [counter, setCounter] = useState(0);
  let counter2 = 0;
  return (
    <Center h={"100vh"} w={"100%"}>
      <Center
        h={"100vh"}
        maxW={"500px"}
        w="100%"
        gap={"20px"}
        flexDir={"column"}
      >
        <Heading>State</Heading>
        <Flex gap="10px">
          <Button onClick={() => setCounter(counter - 1)}>decrement</Button>
          <b>{counter}</b>
          <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
        </Flex>
      </Center>
      <Center
        h={"100vh"}
        maxW={"500px"}
        w="100%"
        gap={"20px"}
        flexDir={"column"}
      >
        <Heading>NoState</Heading>
        <Flex gap="10px">
          <Button onClick={() => counter2--}>decrement</Button>
          <b>{counter2}</b>
          <Button onClick={() => counter2++}>Increment</Button>
        </Flex>
      </Center>
    </Center>
  );
}
export default HomePage;
