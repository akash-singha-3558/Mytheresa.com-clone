import {Grid,GridItem,Image,Center,Button,Text,Box} from "@chakra-ui/react";
import {AiOutlineDoubleRight } from "react-icons/ai";
const HeroImage6=()=>{

return(
    <>
<Grid  templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(1,1fr)", lg: "repeat(2,1fr)", 
    xl: "repeat(2,1fr)",'2xl': "repeat(2,1fr)"}} gap="6"  width="79%" m="auto" mt="20" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif">

<GridItem><Image src={"https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_1_2x_20221212110608.jpg?imwidth=600&imdensity=1"}/>
<Center> <Button mt="30px" mb="30px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Center>
<hr/>
<Center><Text mt="20px" fontSize="18px">YOUR NEW FLEX</Text></Center>
<Center><Text mt="30px" fontSize="34px" lineHeight="44px">The Antigona Stretch Bag <br/> from Givenchy</Text></Center>
<Center mt="40px" ><Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_2_2x_20221212110608.jpg?imwidth=600&imdensity=1"/></Center>
<Center> <Button mt="35px" mb="30px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Center>

</GridItem>

<GridItem><Image src={"https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/NEW_BIG/CW50_ActboxTall_2_2x_20221213120617.jpg?imwidth=600&imdensity=1"} />
<Center> <Button mt="30px" mb="30px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Center>
</GridItem>

</Grid>
<Box  width="1180px"  m="auto" mt="20px">
    <hr width="1180px" />
</Box>
</>
)


}
export default HeroImage6;