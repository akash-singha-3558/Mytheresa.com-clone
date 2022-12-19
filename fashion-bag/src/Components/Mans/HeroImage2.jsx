import{Box,Flex,Text,Center,Button,Image} from "@chakra-ui/react";
import { transform } from "framer-motion";
import {AiOutlineDoubleRight } from "react-icons/ai";
import {Link} from "react-router-dom";


const HeroImage2=()=>{


return(
<>
<Flex w="79%" m="auto" mt="5" h="580" mb="40" flexDirection={{base:"column",sm: 'column',
  md: 'row',
  lg: 'row',
  xl: 'row',
  '2xl': 'row',}}>
<Box w="50%" bg="black" h="100%">
<Center><Text mt="40" fontSize="54px" lineheight="65px" fontFamily="Futura-Medium, Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" color="white" 

_hover={{color:"grey", transition:"0.8s"}}>
    
    
    Winter shoes</Text></Center>
  <Center> <Text fontFamily="Arial, Helvetica, sans-serif" fontSize="14px" lineheight="19px" ml="5px" color="white">The temperature may rise and fall but style is constant</Text></Center>
 <Flex  w="50%" m="auto" mt="5" justifyContent="flex-start"> <Link to="/mensProduct"><Button bg="white" 
 display={{base:"none",sm: 'none',
 md: 'none',
 lg: 'flex',
 xl: 'flex',
 '2xl': 'flex'}}
 _hover={{background:"#979797",color:"white"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Link></Flex>
</Box>
<Box  w="50%" h="100%" >
<Image src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG2/BIG_2_2X_20221212123720.jpg?imwidth=1180&imdensity=1"/>
</Box>

</Flex>


</>

)






}

export default HeroImage2;