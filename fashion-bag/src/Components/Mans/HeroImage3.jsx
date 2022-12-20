import{Box,Flex,Text,Button,Image} from "@chakra-ui/react";
import { transform } from "framer-motion";
import {AiOutlineDoubleRight } from "react-icons/ai";
import {Link} from "react-router-dom";
import BottomText from "../BottomText";


const HeroImage3=()=>{


return(
<>
<Flex w="79%" m="auto" mt="5" h="580" mb="10" flexDirection={{base:"column",sm: 'column',
  md: 'row',
  lg: 'row',
  xl: 'row',
  '2xl': 'row',}}>

<Box  w="50%" h="100%" >
<Image w="100%" h="100%" src="https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW49/BIG3/EN_ACTBOX1_DESKTOP_2x_20221205114710.jpg?imwidth=1180&imdensity=1"/>
</Box>
<Box w="50%" bg="black" h="100%">
<Text textAlign="left" mt="40" ml="20" fontSize="54px" lineheight="65px" fontFamily="Futura-Medium, Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" color="white" 

_hover={{color:"grey", transition:"0.8s"}}>
    
    
    SALE</Text>
   <Text textAlign="left" ml="20" fontFamily="Arial, Helvetica, sans-serif" fontSize="14px" lineheight="19px" color="white">Starts now – up to 50% off</Text>
  <Link to="/mensProduct"><Button mt="40px" ml="-301px" bg="white" _hover={{background:"#979797",color:"white"}}>SHOP SELL <AiOutlineDoubleRight/></Button></Link>
</Box>
</Flex>

</>

)






}

export default HeroImage3;