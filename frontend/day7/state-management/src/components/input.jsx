import { Input } from "@chakra-ui/react";

function InputComponent({ set }) {
  return <Input onChange={(e) => set(e.target.value)}></Input>;
}

export default InputComponent;
