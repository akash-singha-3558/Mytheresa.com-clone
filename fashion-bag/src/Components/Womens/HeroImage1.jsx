import {Box, Center,Text,Button} from "@chakra-ui/react"



const HeroImage1=()=>{

return(
<Center>
<Box
 backgroundImage="url('https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_WW_HP_DESK_BIG_2x_20221213114037.jpg?imwidth=1180&imdensity=1')"
 backgroundPosition="center"
 backgroundRepeat="no-repeat"
 width="1180px"
 height="535.33px"
 mt="10px"


>
<Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" mt="320px" color={"white"} fontWeight="400" fontSize="20px">YOUR NEW OUTLOOK</Text>
<Text fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif"fontSize="54px" lineHeight="65px" fontWeight="500" color="white" letter-spacing= '-.9px'>Cruise 2023</Text>
<Button mt="20px">SHOP NOW </Button>
</Box>
 
  


</Center>
)

}

export default HeroImage1;