import {Box,Text,Flex,Image,Center,Button} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const ProductCard=({image_url,name,description,price,strikedoffprice})=>{
const {AddToCart,isAuth}=useContext(AuthContext);
const navigate= useNavigate();
return(
<>
<Box w="300px" h="auto" >
<Image src={image_url}/>
<Center><Text mt="5" fontFamily="Futura-Medium,Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" lineHeight="20px">{name.toUpperCase()}</Text></Center>
<Center><Text fontFamily="Arial, Helvetica, sans-serif">{description}</Text></Center>
<Center><Text textDecoration={'line-through'}  color="grey" fontFamily="Arial, Helvetica, sans-serif">{strikedoffprice}</Text> &nbsp;<Text fontFamily="Arial, Helvetica, sans-serif" color="tomato">€{price}</Text></Center>
<Button bg="black" color="white" _hover={{bg:"teal"}} onClick={()=>{
     if(isAuth===false){
     navigate("/signup");
     return;
     }
    let obj={name,image_url,price};
    AddToCart(obj);
    navigate("/cart")
}} >Add to Cart</Button>

</Box>

</>

)


}
export default ProductCard;