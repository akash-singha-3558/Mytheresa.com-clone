import {Box,Text} from "@chakra-ui/react";
import { Input,InputGroup,InputRightElement,InputLeftElement } from '@chakra-ui/react';
import {SearchIcon}from "@chakra-ui/icons";
import { Tooltip } from '@chakra-ui/react'
const ItemBar=()=>{
const font={
    fontFamily:"Futura-Medium, Century Gothic,Gill Sans, Helvetica, Arial, sans-serif",
    fontSize:"13px",
    
}
return(
    <>
<Box   display={{base:"none",sm: 'none',
  md: 'none',
  lg: 'flex',
  xl: 'flex',
  '2xl': 'flex',}} justifyContent={"space-around"} alignItems="center" mt="20"  width={"100%"} m={"auto"}>
<Box display="flex" justifyContent="space-around"   width={"79%"} >
<span style={font}> <Tooltip >
NEW ARRIVALS
</Tooltip></span>
<span style={font}>DESIGNERS</span>
<span style={font}>CLOTHING</span>
<span style={font}>SHOES</span>
<span style={font}>BAGS</span>
<span style={font}>ACCESSORIES</span>
<span style={font}>JEWELRY</span>
<span style={font}>FESTIVE SEASON</span>
<span style={{ color:`#fc1000`, fontFamily:"Futura-Medium, Century Gothic,Gill Sans, Helvetica, Arial, sans-serif",  fontSize:"13px"}}>SALE</span>
</Box>

<Box mr='10px'>
<InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
     
    />
    <Input placeholder='Search for...' />
    <InputRightElement children={<SearchIcon color='green.500' />} />
  </InputGroup>
</Box>
</Box>
<div style={{marginTop:"10px"}}>
<hr color="#dfdfdf"/>
</div>
</>


)



}
export default ItemBar;