import{Box,Flex,Text,Center,Button,Image} from "@chakra-ui/react";
import { transform } from "framer-motion";
import {AiOutlineDoubleRight } from "react-icons/ai";
import {Link} from "react-router-dom";


const HeroImage2=()=>{


return(
<>
<Flex w="79%" m="auto" mt="5" h="580" mb="40" flexDirection={{base:"column",sm: 'column',
  md: 'column',
  lg: 'row',
  xl: 'row',
  '2xl': 'row',}} >
<Box w={{base:"100%",sm: '100%',
  md: '100%',
  lg: '50%',
  xl: '50%',
  '2xl': '50%',}} bg="black" h="580">
<Center><Text mt={{base:"20",sm: '20',
  md: '20',
  lg: '40',
  xl: '40',
  '2xl': '40',}} fontSize="54px"  fontFamily="Futura-Medium, Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" color="white" 

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
<Box  w={{base:"100%",sm: '100%',
  md: '100%',
  lg: '50%',
  xl: '50%',
  '2xl': '50%',}} h="580" >
<Image w="100%" h="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG2/BIG_2_2X_20221212123720.jpg?imwidth=1180&imdensity=1"/>
</Box>

</Flex>


</>

)






}

export default HeroImage2;