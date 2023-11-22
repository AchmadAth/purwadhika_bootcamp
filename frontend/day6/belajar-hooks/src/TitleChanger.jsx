import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function TitleChanger() {
  const [title, setTitle] = useState("Purwadhika");

  useEffect(() => {
    alert("Welcome");
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <Container>
      <FormControl>
        <FormLabel> New Title</FormLabel>
        <Input value={title} onChange={handleInputChange} />
      </FormControl>
    </Container>
  );
}
