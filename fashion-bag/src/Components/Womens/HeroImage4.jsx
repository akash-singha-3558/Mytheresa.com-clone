import {Grid,GridItem,Image,Center,Button,Text} from "@chakra-ui/react";
import {AiOutlineDoubleRight } from "react-icons/ai";
import {Link} from "react-router-dom";
const HeroImage4=()=>{

return(
<Grid justifyContent="center" templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(1,1fr)", lg: "repeat(2,1fr)", 
    xl: "repeat(2,1fr)",'2xl': "repeat(2,1fr)"}} gap="6"  width="79%"  m="auto" fontFamily="Futura-Medium, Century Gothic, Gill Sans, Helvetica, Arial, sans-serif">
<GridItem ><Image src={"https://img.mytheresa.com/media/static/raw/cms/l/LIFE_HP_2022_CW50/Paris-Texas-ActboxTall_2x_20221212102147.jpg?imwidth=600&imdensity=1"} />
<Center><Link to="/womensProduct"> <Button mt="30px"  bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Link></Center>
</GridItem>
<GridItem><Image src={"https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_3_2x_20221212110651.jpg?imwidth=600&imdensity=1"}/>
<Center> <Link to="/womensProduct"><Button mt="30px" mb="30px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Link></Center>
<hr/>
<Center><Text mt="20px" fontSize="18px">CONTEMPORARY JEWELRY</Text></Center>
<Center><Text mt="30px" fontSize="34px" lineHeight="44px">Craft and style rolled into <br/> one</Text></Center>
<Center mt="40px" ><Image src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW50/CW50_WW_HP_ActboxSmall_4_2x_20221212110650.jpg?imwidth=600&imdensity=1"/></Center>
<Center><Link  to="/womensProduct"> <Button mt="35px" mb="30px" bg="black" color="white"_hover={{bg:"black"}}>SHOP NOW <AiOutlineDoubleRight/></Button></Link></Center>

</GridItem>
</Grid>

)


}
export default HeroImage4;