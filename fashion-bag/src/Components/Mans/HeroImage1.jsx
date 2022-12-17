import {Box, Center,Text,Button} from "@chakra-ui/react"
import {AiOutlineDoubleRight } from "react-icons/ai";


const HeroImage1=()=>{

return(
<Center>
<Box
 backgroundImage="url('https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2022_CW50/BIG1_NEW/DESKTOP_2X_20221213142316.jpg?imwidth=1180&imdensity=1')"
 backgroundPosition="center"
 backgroundRepeat="no-repeat"
 width="79%"
 height="535.33px"
 mt="10px"


>
<Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" mt="320px" color={"white"} fontWeight="400" fontSize="20px">_IT'S THE SEASON</Text>
<Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif"fontSize="54px" lineHeight="65px" fontWeight="500" color="white" letterSpacing= '-.9px'>Smart looks</Text>
<Button mt="20px" >SHOP NOW <AiOutlineDoubleRight/></Button>
</Box>
 
  


</Center>
)

}

export default HeroImage1;