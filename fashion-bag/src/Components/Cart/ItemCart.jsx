import {Box,Text,Flex,Image,Center,Button} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const ItemCart=({image_url,name,description,price,strikedoffprice,id})=>{

const {DeleteCart}=useContext(AuthContext);
return(
<>
<Box w="240px" h="auto" >
<Image w="240px" h="240px" src={image_url}/>
<Center><Text mt="5" fontFamily="Futura-Medium,Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" lineHeight="20px">{name.toUpperCase()}</Text></Center>
<Center><Text fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif">{description}</Text></Center>
<Center><Text textDecoration={'line-through'}  color="grey" fontFamily="Arial, Helvetica, sans-serif">{strikedoffprice}</Text> &nbsp;<Text fontFamily="Arial, Helvetica, sans-serif" color="tomato">€{price}</Text></Center>
<Button bg="black" color="white" _hover={{bg:"teal"}} onClick={()=>{
   DeleteCart(id);
}} >Remove From Cart</Button>


</Box>

</>

)


}
export default ItemCart;



// import {
//     Box,
//     Center,
//     useColorModeValue,
//     Heading,
//     Text,
//     Stack,
//     Image,
//   } from '@chakra-ui/react';
//   import { useContext } from "react";
// import { AuthContext } from "../../Context/AuthContext";
// import { useNavigate } from "react-router-dom";

  
//   export default function ItemCart({image_url,name,price,strikedoffprice,id}) {
//     return (
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'230px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//               backgroundImage: `url(${image_url})`,
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//             <Image
//               rounded={'lg'}
//               height={230}
//               width={282}
//               objectFit={'cover'}
//               src={image_url}
//             />
//           </Box>
//           <Stack pt={10} align={'center'}>
            
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//              {name}
//             </Heading>
//             <Stack direction={'row'} align={'center'}>
//               <Text fontWeight={800} fontSize={'xl'}>
//                {price}
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 {strikedoffprice}
//               </Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Center>
//     );
//   }