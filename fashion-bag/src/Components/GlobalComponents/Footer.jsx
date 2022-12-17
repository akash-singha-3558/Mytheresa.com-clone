import {Box,Flex,Grid,GridItem,Text,Center,Image,Link,Input,FormControl,Checkbox} from "@chakra-ui/react";
import {CheckIcon } from '@chakra-ui/icons'
import {FaRegHeart,FaTwitter,FaMobileAlt}  from "react-icons/fa";

import { SiFacebook } from "react-icons/si";
import { AiFillLinkedin ,AiOutlineInstagram,AiFillYoutube,AiOutlineWechat,AiOutlineWeibo} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer=()=>{
    
let col2=["About us",
   " Trust & services",
    "Sustainability",
    "Press",
    "Careers",
   "Investor Relations",
    "Affiliates",
    "Tax-Free Shopping"];
let col3=[
   " Contact us",
"Shipping information",
"Secure payment",
"Exchanges",
"Returns",
"After sale service",
"Gift card"
]
return(
<>
<Box w="79%" m="auto" mt="10">
<Center fontFamily="Futura-Medium,Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" color="black" fontSize="18px"><Text>SHOP WHENEVER, WHEREVER WITH THE APP</Text></Center>
<Center mt="5"><Box><Link href="https://apps.apple.com/app/id484615570?mt=8" isExternal><Image w="118px" mr="2" h="34.96px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"/></Link></Box>

<Box><Link href="https://apps.apple.com/app/id484615570?mt=8" isExternal><Image w="118px" h="34.96px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/800px-Google_Play_Store_badge_EN.svg.png"/></Link></Box>
</Center>
<Box mt="5">
<hr/>
</Box>
<Grid mt="5" justifyContent="center" templateColumns='repeat(5, 1fr)' gap={8}>
<GridItem textAlign="left"><Box ><Text fontFamily="Futura-Medium,Century Gothic, Gill Sans, Helvetica, Arial, sans-serif">SERVICE & SECURITY</Text></Box>
<Box   fontFamily="Arial, Helvetica, sans-serif" mt="5" ><Text><span style={{color:"#979797"}}><CheckIcon/></span>&nbsp;Fast Delivery</Text>
<Text color="#979797" cursor="pointer">Delivery within 2 business days</Text>
</Box>
<Box   fontFamily="Arial, Helvetica, sans-serif" mt="5"><Text><span style={{color:"#979797" ,cursor:"pointer"}}><CheckIcon/></span>&nbsp;Free returns within 30 days </Text>
<Text color="#979797" cursor="pointer">Convenient return service</Text>
</Box>
<Box   fontFamily="Arial, Helvetica, sans-serif" mt="5"><Text><span style={{color:"#979797" ,cursor:"pointer"}}><CheckIcon/></span>&nbsp;Secure payment and data protection</Text>
<Text color="#979797" cursor="pointer">SSL encryption for secure transactions and personal data</Text>
</Box>
</GridItem>


<GridItem textAlign="left"><Box ><Text fontFamily="Futura-Medium,Century Gothic, Gill Sans, Helvetica, Arial, sans-serif">MYTHERESA</Text></Box>
{
    col2.map((el,i)=>(<Box mt="2" key={i} fontFamily="Arial, Helvetica, sans-serif">
    <Text color="#979797" _hover={{color:"black"}} cursor="pointer">{el}</Text>
    </Box>))
}
</GridItem>
<GridItem textAlign="left"><Box ><Text fontFamily="Futura-Medium,Century Gothic, Gill Sans, Helvetica, Arial, sans-serif">CUSTOMER CARE</Text></Box>
{
    col3.map((el,i)=>(<Box mt="2" key={i} fontFamily="Arial, Helvetica, sans-serif">
    <Text color="#979797" _hover={{color:"black"}} cursor="pointer">{el}</Text>
    </Box>))
}
</GridItem>

<GridItem  colSpan="2" textAlign="left"><Box ><Text  fontFamily="Futura-Medium,Century Gothic, Gill Sans, Helvetica, Arial, sans-serif">GET TREND UPDATES, STYLE TIPS AND MORE</Text></Box>
<Box w="400"><Flex><FormControl id="email" isRequired><Input   placeholder="your email address here..."/></FormControl><FormControl id="submit" ><Input w="40%" type="submit" value="SIGN UP" /></FormControl></Flex>

<Box>
   <Flex mt="5"> <Text >Wish list</Text> &nbsp;<Box mt="1"><FaRegHeart /></Box></Flex>
   </Box>

</Box>
<Box color="grey" _hover={{color:"black"}}><Text>Receive personal notifications</Text></Box>
<Box mt="2">Follow us on</Box>

<Box ml="-13px" w="70%" mt="4"><Flex fontSize="24px" alignItems="center" justifyContent="space-evenly"><Box><AiFillLinkedin/></Box> <Box><SiFacebook/></Box> <Box><FaTwitter/></Box><Box><BsPinterest/></Box> <Box><AiOutlineInstagram/></Box> 
<Box><AiFillYoutube/></Box> <Box><FaMobileAlt/></Box>  <Box><AiOutlineWechat/></Box><Box><AiOutlineWeibo/></Box> 

</Flex></Box>
</GridItem>



</Grid>

<Box mt="5"><hr/></Box>
<Flex justifyContent="space-between" fontFamily="Arial, Helvetica, sans-serif" color="#757575">
    <Box ><Text>copyright © 2006-2022 mytheresa.com </Text></Box>
    <Box>
        <Flex justifyContent="space-evenly" margin="auto">
           <Box><Text>terms of use </Text></Box>   
           <Box>  <Text> privacy policy</Text></Box> 
           <Box><Text>imprint</Text></Box>
          
            
        </Flex>
    </Box>
</Flex>
</Box>

</>

)

}

export default Footer;