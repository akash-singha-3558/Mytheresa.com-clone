import {Grid,GridItem,Image,Text,Center,Box,Button,Divider} from "@chakra-ui/react";

import {AiOutlineDoubleRight } from "react-icons/ai";
const Cards08=()=>{

return(
<>
<Grid templateColumns={{base:"repeat(2,1fr)",sm:"repeat(2,1fr)",md:"repeat(4,1fr)", lg: "repeat(4,1fr)", 
    xl: "repeat(4,1fr)",'2xl': "repeat(4,1fr)"}} w="79%"  gap="6" m="auto" fontFamily="Futura-Medium, Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" fontSize="18px">
<GridItem><Image  w="255.8px" h="255.8px"  src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_1_2x_20221212102029.jpg"/>
<Center><Text mt="5px">Self-Portrait</Text></Center>
</GridItem>
<GridItem><Image  w="255.8px" h="255.8px" src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_2_2x_20221212102030.jpg"/>
<Center><Text mt="5px">Gucci</Text></Center>
</GridItem>
<GridItem><Image  w="255.8px" h="255.8px" src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_3_2x_20221212102029.jpg"/>
<Center><Text mt="5px">Valentino</Text></Center>
</GridItem>
<GridItem><Image  w="255.8px" h="255.8px" src="https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/CW50_WW_HP_Finest_edit_4_2x_20221212102028.jpg"/>
<Center><Text mt="5px">Oscar de la Renta</Text></Center>
</GridItem>

</Grid>
<Box mt="10">
<Button mt="10px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button>
</Box>
<Box  w="79%"  m="auto" mt="10" mb="10">
<Divider orientation='horizontal' border="solid"/>
</Box>
</>





)

}
export default Cards08;