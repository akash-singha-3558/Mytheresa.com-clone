import logo from "../FashionBag2.png"
import {SlHandbag } from "react-icons/sl";
import { Center, color } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Tooltip } from '@chakra-ui/react';
import { useNavigate} from "react-router-dom";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button
  } from '@chakra-ui/react';
import {Flex,Text,Box,Image} from "@chakra-ui/react";
 
const Logo=()=>{
 const {cartcount,isAuth}=useContext(AuthContext);
const style={
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    margin:"auto",
    height:"auto",
    width:"95%",
  //  border:"1px solid tomato"
}
const div1={
    border:"1px solid yellow",width:"60%",display:"flex",justifyContent:"flex-end",height:"129.06px"

}

const counter={
    position: 'absolute',
    top: '140px',
    left: '94.74%',
    paddingLeft: '9px',
    fontSize: '13px',
    fontWeight: '400'
}
const navigate=useNavigate();
return(
    <Flex w="95%" m="auto" mt="5" >
        <Box /* border="1px solid yellow"*/ width={{base:"100%",sm:"100%",md:"100%", lg: '60%',
    xl: '60%','2xl': '60%'}} display="flex" justifyContent={{base:"center",sm:"center",md:"center", lg: 'flex-end',
    xl: 'flex-end','2xl': 'flex-end'}} height="129.06px" >
    <Image onClick={()=>{
      navigate("/");

    }} cursor="pointer" src={logo} style={{width:"350px"}} alt="FB"/>
    </Box>

    <Box  /* border="solid green"*/
    width="40%"
    height="129.06px"
    justifyContent="flex-end"
    alignItems="center"
    display={{base:"none",sm:"none",md:"none", lg: 'flex',
    xl: 'flex','2xl': 'flex'}}>
  
      <Tooltip label={!isAuth?`Your Cart Have ${cartcount} Items,
       You have to LogIn to add Item`:`Your Cart Have ${cartcount} Items`} placement='bottom-start' bg={"white"}color={"black"} padding="10" borderRadius="10" boxShadow={"1px 2px 9px #dbdbdb"}>
      <Text onClick={()=>{
        if(isAuth===true){
          navigate("/cart");
        }
        
      }}>SHOPPING BAG</Text>
    </Tooltip>
   
      <SlHandbag style={{fontSize:"50px",marginTop:"-10px"}} />
      
    <Text position= 'absolute'
    top= '140px'
    left={{lg: '93.5%',
    xl: '95%','2xl': '94.74%'}}
    paddingLeft='9px'
    fontSize='13px'
    fontWeight='bold' >{cartcount}</Text>
    </Box>



    </Flex>
)

}
export default Logo;