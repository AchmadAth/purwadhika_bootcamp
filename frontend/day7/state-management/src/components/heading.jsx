import { Heading } from "@chakra-ui/react";

function HeadingComponent(props) {
  return (
    <Heading>
      {props.value} {props.ayam}
    </Heading>
  );
}
export default HeadingComponent;
