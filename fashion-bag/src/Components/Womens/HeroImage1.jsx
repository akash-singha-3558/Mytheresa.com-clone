import {Box,Text,Button,Image,Center} from "@chakra-ui/react"
import {AiOutlineDoubleRight } from "react-icons/ai";
import {Link} from "react-router-dom";

const HeroImage1=()=>{

return(
<>
<Box m="auto" mt="5" w="79%" h="1000%" position="relative" >
<Image w="100%" h="100%"  src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1" />
<Center><Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif"  color={"white"} fontWeight="400" fontSize={{base:"",sm:"",md:"",lg:"20px",xl:"20px","2xl":"20px"}} position="absolute" top="55%" >YOUR NEW OUTLOOK</Text></Center>
<Center><Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif"fontSize={{base:"30px",sm:"30px",md:"30px",lg:"54px",xl:"54px","2xl":"54px"}}  fontWeight="500" color="white" letterSpacing= '-.9px' position="absolute" top="62%" >
Cruise 2023
</Text></Center>
<Link to="/womensProduct"><Center><Button display={{base:"none",sm:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}} position="absolute" top="80%"  >SHOP NOW <AiOutlineDoubleRight/></Button></Center></Link>

</Box>
 
<Link to="/womensProduct"><Center><Button display={{base:"flex",sm:"flex",md:"flex",lg:"none",xl:"none","2xl":"none"}} position="absolute" mt="20"  >SHOP NOW <AiOutlineDoubleRight/></Button></Center></Link>
</>

)

}

export default HeroImage1;