import Logo from "../Logo";
import {Box,Flex,Grid,Text,Image,Button,GridItem,Center} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import BottomText from "../BottomText";
import Footer from "../GlobalComponents/Footer";
import Carousal from "./Carousal";
import Carousal2 from "./Carousal2";
const Home=()=>{
const navigate=useNavigate();
return(
<>
<Logo/>
<Box m="auto" mt="5" w="79%"  h="535px" bgImage="url('https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1')"  bgPosition="center"
  bgRepeat="no-repeat" >

<Flex fontSize="54px" color="white" alignItems="center" w="68%" justifyContent="space-between" m="auto" 
 h="100%" fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif">
<Text cursor="pointer"
 onClick={()=>{
navigate("/women")

}}>Women</Text>
<Text cursor="pointer" onClick={()=>{
navigate("/men")

}}>Men</Text>
</Flex>
</Box>

<Box m="auto" mt="5" w="79%"  h="360px" bgImage="url('https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1')"  bgPosition="center"
  bgRepeat="no-repeat" >
<Flex w="100%" h="100%"justifyContent="center" alignItems="center" color="white">
 <Link to ="/kids">  <Text fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif" fontSize="54px">Kids</Text></Link>
</Flex>
</Box>

<Box m="auto" mt="5" w="79%"  h="360px" bgImage="url('https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1')"  bgPosition="center"
  bgRepeat="no-repeat" >
<Flex w="100%" h="100%"justifyContent="center" alignItems="center" color="white">
<Link to ="/life">  <Text fontFamily="Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif" fontSize="54px">Life</Text></Link>
</Flex>
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