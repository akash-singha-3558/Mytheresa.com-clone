import {Box,color,Flex,Text} from "@chakra-ui/react";

const HeroImage3=()=>{
return(
    <>
    <Box style={{width:"79%",   margin:"auto", mt:"20px" }}  >
   <hr style={{width:"100%",   margin:"auto"}}/>
    </Box>
<Flex  width="79%" h="258.67px"   margin="auto"  alignItems="center" >
<Box w="50%" h="50%" >
<Text  color="black" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontWeight="400" fontSize={{base:"16px",sm:"16px",md:"16px", lg: '20px',
    xl: '20px','2xl': '20px'}}>WHAT'S THE ANGLE?</Text>
<Text mt="20px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontWeight="400" fontSize={{base:"25px",sm:"25px",md:"25px", lg: '34px',
    xl: '34px','2xl': '34px'}} lineHeight="44px">Sharpen your edit of <br/>winter-sun shades</Text>
</Box>
<Box w="50%" h="50%" >
<Text color="black" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontWeight="400" fontSize={{base:"16px",sm:"16px",md:"16px", lg: '20px',
    xl: '20px','2xl': '20px'}}>GLAMOROUS GOWNS</Text>
<Text mt="20px" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif" fontWeight="400" fontSize={{base:"25px",sm:"25px",md:"25px", lg: '34px',
    xl: '34px','2xl': '34px'}} lineHeight="44px">Designed to make a <br/>statement</Text>
</Box>


</Flex>



</>

)


}
export default HeroImage3;