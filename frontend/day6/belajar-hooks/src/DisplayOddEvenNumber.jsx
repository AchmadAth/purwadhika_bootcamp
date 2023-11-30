import { Button, Container, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function DisplayOddEvenNumber() {
    const [number,setNumber] = useState(0)
    const [clickCount,setClickCount] = useState(0)

    const handleIncrementNumber = () =>{
        setNumber((prev)=>prev+1)
    }
    const handleAddClickCount = () => {
        setClickCount((prev)=>prev+1)
    }
    const isNumberOddEven = () => {
        for(let i = 0; i<200;i++);{
            console.log('ini berat');
        }
        return number % 2 === 0 ? "Odd":"Even";
    }
    return (
        <Container mt={5}>
            <Text>Current Number : {number} {isNumberOddEven()}</Text>
            <Button onClick={handleIncrementNumber}>Incerement Count</Button>
            <Text onClick={{handleAddClickCount}}>Click Counter: {clickCount}</Text>
        </Container>
    )
}