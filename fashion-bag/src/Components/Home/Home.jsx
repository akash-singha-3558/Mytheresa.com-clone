import Logo from "../Logo";
import {Box,Flex,Grid,Text,Image,Button,GridItem,Center} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import BottomText from "../BottomText";
import Footer from "../GlobalComponents/Footer";
import Carousal from "./Carousal";
import Carousal2 from "./Carousal2";
import SaleText from "../SaleText";
const Home=()=>{
const navigate=useNavigate();
return(
<>
<Logo/>
<SaleText/>
<Box m="auto" mt="5" w="79%"  h="1000%"  
   position="relative"  color="white"   >
<Image src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1" w="100%"/> 
<Box fontSize={{base:"",sm:"",md:"40px",lg:"54px",xl:"54px","2xl":"54px"}} fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif"><Link to="/women"><Text position="absolute" top="44%" left="20%">Women</Text>
</Link>
<Link to="/men"><Text position="absolute" top="44%" right="20%">Men</Text></Link>
</Box>
</Box>

<Box m="auto" mt="5" w="79%" position="relative" color="white" h="1000%" opacity="0.5 green"  fontSize={{base:"",sm:"20px",md:"30px",lg:"54px",xl:"54px","2xl":"54px"}}  fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif"
  bg="black" >
    <Image opacity="0.8" src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1"/>
   <Link to="/kid"><Text position="absolute" left="45%" top="40%">Kids</Text></Link> 

</Box>
<Box m="auto" mt="5" w="79%" bg="black" position="relative" color="white" h="1000%"  fontSize={{base:"",sm:"20px",md:"30px",lg:"54px",xl:"54px","2xl":"54px"}}  fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif"
   >
    <Image src="https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1" opacity="0.8"/>
  <Link to="/life"><Text position="absolute" left="45%" top="40%">Life</Text></Link> 

</Box>


<Flex w="79%" m="auto" alignItems="center" justifyContent="center"  mt="10" mb="10">
<Center><Text fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif" fontSize="30px">Women's New Arrivals</Text></Center>
</Flex>
<Carousal/>
<Flex w="79%" m="auto" alignItems="center" justifyContent="center"  mt="10" mb="10">
<Center><Text fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif" fontSize="30px">Men's New Arrivals</Text></Center>
</Flex>
<Carousal2/>

<Box width="79%" margin="auto" mt="10"><hr style={{width:"79%",margin:"auto"}}/></Box>
<hr style={{width:"79%",margin:"auto",marginTop:"10"}}/>
<Box width="79%" margin="auto" mt="10"><hr style={{width:"79%",margin:"auto"}}/></Box>
<hr style={{width:"79%",margin:"auto",marginTop:"10"}}/>
<BottomText />
<Footer/>
</>

//Men's New Arrivals

)



}
export default Home;