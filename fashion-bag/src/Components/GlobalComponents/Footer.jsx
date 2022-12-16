import {Box,Flex,Grid,GridItem,Text,Center,Image,Link} from "@chakra-ui/react";


const Footer=()=>{

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
<Grid mt="5" justifyContent="center" templateColumns='repeat(4, 1fr)' gap={6}>
<GridItem><Box><Text fontFamily="Futura-Medium,Century Gothic, Gill Sans, Helvetica, Arial, sans-serif">SERVICE & SECURITY</Text></Box></GridItem>
<GridItem></GridItem>
<GridItem></GridItem>
<GridItem></GridItem>

</Grid>

</Box>
</>

)

}

export default Footer;