import {Box,Flex,Grid,Text,Center,GridItem,Input,Button} from "@chakra-ui/react";
import ItemBar from "../GlobalComponents/Itembar";
import Logo from "../Logo";
import ItemCart from "./ItemCart";
import { useContext,useEffect ,useState} from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useToast } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
const Cart=()=>{
  const {navigate}=useNavigate();
const{cartData,total,CartCounter,DeleteCart}=useContext(AuthContext);
const [del,selDel]=useState(40);
useEffect(()=>{
CartCounter();
},[cartData])
const toast = useToast()
return(
<>
<Logo/>


<Flex w="90%" h="540px"  m="auto" >
<Box w="70%"  >
<Grid gridTemplateColumns="repeat(3,1fr)"> 
{
  
cartData.map((el)=>(  <GridItem key={el.id}><ItemCart key={el.id} image_url={el.image_url} name={el.name} price={el.price} strikedoffprice={el.strikedoffprice} id={el.id}/></GridItem>))

}
</Grid>

</Box>
<Box w="20%"
></Box>

<Box w="30%" borderLeft="1px solid grey" padding="4" mt="-5px">
 <Center><Box fontFamily="soleilBook" bg="tomato" color="white"fontSize="16px" padding="5"mb="5" fontWeight="bold">Checkout & Payment</Box></Center>   
<Input placeholder="Enter your Full Name" type="text" isRequired padding="5"/>
 <Input placeholder="Address Line1" type="text" isRequired padding="5" />   
 <Input placeholder="Address Line2" type="text" isRequired padding="5"/>   
 <Input placeholder="Address Line2" type="text" isRequired padding="5"/> 
 <Input placeholder="Postal Code" type="number" isRequired padding="5"/> 
 <Input placeholder="City" type="text" isRequired padding="5"/> 
 <Input placeholder="+91...Contact Number" type="text" isRequired padding="5"/> 
 <Input placeholder="email" type="email" isRequired padding="5"/> 
  <Flex justifyContent="space-between">  <Text fontFamily="Arial, Helvetica, sans-serif"
fontSize="18px"
textAlign="left" fontWeight="bold">Items :</Text> <span style={{color:"tomato",fontWeight:"bold"}}> {total==0?total:`€${total}`}</span></Flex>
 
 <Flex justifyContent="space-between">  <Text fontFamily="Arial, Helvetica, sans-serif"
fontSize="18px"
textAlign="left" fontWeight="bold">Delivery :</Text> <span style={{color:"tomato",fontWeight:"bold"}}>{`€${del}`} </span></Flex>
 <Flex justifyContent="space-between"><Button  bg="teal" color="white" _hover={{bg:"black"}} display="flex" onClick={()=>{
setTimeout(()=>{
  toast({
    position:"top",
    title: 'Order Placed!',
    description: "Your Product will be delivered shortly!",
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
go();

},3000)
function go(){
    for(let i=0;i<cartData.length;i++)
    {
     DeleteCart(cartData[i].id);
    }
    navigate("/");
}


 }}>Place Order</Button> <Text color="tomato" fontWeight="bold">{`€${total+del}`}</Text></Flex>
</Box>




</Flex>




</>



)

}
export default Cart;