import BottomText from "../BottomText";
import Footer from "../GlobalComponents/Footer";
import ItemBar from "../GlobalComponents/Itembar";
import Logo from "../Logo";
import SaleText from "../SaleText";
import Carousal1 from "./Carousal1";
import {Flex,Center,Text,Box} from "@chakra-ui/react";

import HeroImage1 from "./HeroImage1";
import HeroImage2 from "./HeroImage2";
import HeroImage3 from "./HeroImage3";
import Carousal2 from "./Carousal2";

const Man=()=>{

    return(
        <>
        
        <Logo/>
    <ItemBar/>
    <SaleText/>
    <HeroImage1/>
    <Flex w="79%" m="auto" alignItems="center" justifyContent="center"  mt="10" mb="10">
<Center><Text fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif" fontSize="30px"> New Arrivals</Text></Center>
</Flex>
 <Carousal1/>
 <HeroImage2/>
<Carousal2/>
 <HeroImage3/>
 <Box w="79%" m="auto"><hr style={{width:"100%"}}/></Box>
 <Box w="79%" m="auto" mt="10"><hr style={{width:"100%"}}/></Box>
 <BottomText/>
 <Footer/>
        </>
  
    
    
    )
    
    }
    export default Man;