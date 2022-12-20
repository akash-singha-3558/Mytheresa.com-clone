import {Text,Box,Center,Button} from "@chakra-ui/react"
import {Link} from "react-router-dom";
import {AiOutlineDoubleRight } from "react-icons/ai";
//AiOutlineDoubleRight
export default function HeroImage2() {
  return (
    <>
    <Box w="79%" m="auto" mt={{base:"70px",sm:"70px",md:"70px",lg:"40px",xl:"40px","2xl":"40px"}}>
      <hr style={{width:"100%"}}/>
    </Box>
    <Center>
   <Box  width="79%" height="258.67px" mt="10px" bg="#f6f6f6 ">
   <Text mt="40px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontWeight="400" fontSize="20px">DON'T MISS OUT</Text>
   <Text mt="20px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" color="#000000" fontSize="34px" fontWeight="400" lineHeight="44px" >New Arrivals</Text>
   <Text mt="30px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontSize="18px" lineHeight="22px">Palm Angels, Acne Studios, Aquazzura, The Attico...</Text>
   <Link to="/womensProduct"><Button mt="10px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Link>
   </Box>
   </Center>
   </>
)};