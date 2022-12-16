import {Text,Box,Center,Button} from "@chakra-ui/react"

import {AiOutlineDoubleRight } from "react-icons/ai";
//AiOutlineDoubleRight
export default function HeroImage2() {
  return (
    <Center>
   <Box  width="79%" height="258.67px" mt="20px" bg="#f6f6f6 ">
   <Text mt="40px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontWeight="400" fontSize="20px">DON'T MISS OUT</Text>
   <Text mt="20px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" color="#000000" fontSize="34px" fontWeight="400" lineHeight="44px" >New Arrivals</Text>
   <Text mt="30px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontSize="18px" lineHeight="22px">Palm Angels, Acne Studios, Aquazzura, The Attico...</Text>
   <Button mt="10px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button>
   </Box>
   </Center>
)};