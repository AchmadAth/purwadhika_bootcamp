import {
  Box,
  Center,
  Heading,
  Button,
  Text,
  Divider,
  Input,
  VStack,
} from "@chakra-ui/react";
import "./App.css";
import { Checkbox } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Box bgColor={"#1C1F2D"}>
        <Box>
          <Center>
            <Text fontSize="3xl" color={"white"}>
              Chores ToDo List
            </Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Checkbox padding={"10px"} colorScheme={"green"}></Checkbox>
            <Text padding={"10px"} paddingRight={"25px"} color={"white"}>
              Create Guest Experience mobile check-in
            </Text>
            <Button>
              <DeleteIcon color={"red"} />
            </Button>
          </Center>
          <Center>
            <Checkbox padding={"10px"}></Checkbox>
            <Text padding={"10px"} paddingRight={"25px"} color={"white"}>
              Create Guest Experience mobile check-in
            </Text>
            <Button>
              <DeleteIcon color={"red"} />
            </Button>
          </Center>
          <Center>
            <Checkbox padding={"10px"}></Checkbox>
            <Text padding={"10px"} paddingRight={"25px"} color={"white"}>
              Create Guest Experience mobile check-in
            </Text>
            <Button>
              <DeleteIcon color={"red"} />
            </Button>
          </Center>
          <Center>
            <Checkbox padding={"10px"}></Checkbox>
            <Text padding={"10px"} paddingRight={"25px"} color={"white"}>
              Create Guest Experience mobile check-in
            </Text>
            <Button>
              <DeleteIcon color={"red"} />
            </Button>
          </Center>
          <Center>
            <Checkbox padding={"10px"}></Checkbox>
            <Text padding={"10px"} paddingRight={"25px"} color={"white"}>
              Create Guest Experience mobile check-in
            </Text>
            <Button>
              <DeleteIcon color={"red"} />
            </Button>
          </Center>
          <Center>
            <Checkbox padding={"10px"}></Checkbox>
            <Text padding={"10px"} paddingRight={"25px"} color={"white"}>
              Create Guest Experience mobile check-in
            </Text>
            <Button>
              <DeleteIcon color={"red"} />
            </Button>
          </Center>
          <Center>
            <Checkbox padding={"10px"}></Checkbox>
            <Text padding={"10px"} paddingRight={"25px"} color={"white"}>
              Create Guest Experience mobile check-in
            </Text>
            <Button>
              <DeleteIcon color={"red"} />
            </Button>
          </Center>
          <Divider orientation="horizontal" />
          <Center>
            <Text fontSize={"30px"} color={"white"}>
              Done : 0
            </Text>
          </Center>
          <Center>
            <VStack alignItems={"flex-start"}>
              <Text color={"white"}>Add Todo</Text>
              <Input width={"500px"} />
              <Button>Add Task</Button>
            </VStack>
          </Center>
        </Box>
      </Box>
    </>
  );
}

export default App;
