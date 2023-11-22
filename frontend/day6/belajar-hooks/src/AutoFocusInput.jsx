import { Button, Container, Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);
  const handleFocusChange = () => {
    inputRef.current.focus();
  };
  return (
    <Container mt={10}>
      <Input ref={inputRef} />
      <Button mt={3} onClick={handleFocusChange}>
        Focus To Input
      </Button>
    </Container>
  );
}
