import ProductCard from "./ProductsCards";
import {useEffect,useState} from "react";
import axios from 'axios';
import {Flex,Grid,GridItem,Box,Text, Button} from "@chakra-ui/react";
import { Sale } from "../Womens/sale";
import SaleText from "../SaleText";
import BottomText from "../BottomText";
import Footer from "../GlobalComponents/Footer";
import Logo from "../Logo";
const MenProducts=()=>{
const[data,setData]=useState([]);
const [cdata,setCdata]=useState([]);
useEffect(()=>{
getData();
},[data])
async function getData() {
    try {
      const response = await axios.get(`https://thankful-loafers-hare.cyclic.app/mens`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }


return(
<>
<Logo/>
<Sale/>
<SaleText/>
<Flex m="auto" flexDirection={{base:"row"}} mt="10" mb="10" >
<Box w="20%"  ml="10"  >
    <Text  fontFamily="Futura-Medium,Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" fontSize="20px">Sort By Price</Text>
<Button bg="black" color="white" mt="5" _hover={{bg:"teal"}} onClick={()=>{
  let newdata1= data.sort((a,b)=>Number(b.price)-Number(a.price));
  setCdata(newdata1);
  console.log(newdata1)
}}>High To Low</Button><br/>

<Button bg="black" color="white" mt="5" _hover={{bg:"teal"}} onClick={()=>{
      let newdata= data.sort((a,b)=>(Number(a.price)-Number(b.price)));
      setCdata(newdata);
}}> Low To High</Button>

<br/><br/>
 <Text  fontFamily="Futura-Medium,Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" fontSize="20px">Sort By Name</Text>
<Button bg="black" color="white" mt="5" _hover={{bg:"teal"}} onClick={()=>{
      let newdata= data.sort((a,b)=>{
        if(a.firstname < b.firstname){
            return -1;
        }
        if (a.name > b.name) {
            return 1;
          }
          return 0;
      });
      setCdata(newdata);
}}> A to Z</Button>
<br/>
<Button bg="black" color="white" mt="5" _hover={{bg:"teal"}} onClick={()=>{
      let newdata=  data.sort((a,b)=>{
        if(a.firstname < b.firstname){
            return 1;
        }
        if (a.name > b.name) {
            return -1;
          }
          return 0;
      });
      setCdata(newdata);
}}>  Z to A</Button>

</Box>
<Box w="70%" ml="10" > 
<Grid templateColumns={{base:'repeat(2,1fr)',sm: 'repeat(2,1fr)',
  md: 'repeat(2,1fr)',
  lg: "repeat(3,1fr)",
  xl: "repeat(3,1fr)",
  '2xl': "repeat(3,1fr)",}} gap="6">
{



cdata.length===0?data.map((el,i)=>(
    <GridItem key={i}>  <ProductCard key={i} image_url={el.image_url} name={el.name} description={el.description} price={el.price}
      strikedoffprice={el.strikedoffprice}
      /></GridItem>
  )):cdata.map((el)=>(
    <GridItem key={el.name}>  <ProductCard key={el.name} image_url={el.image_url} name={el.name} description={el.description} price={el.price}
      strikedoffprice={el.strikedoffprice}
      /></GridItem>
  ))


}
</Grid>
</Box>
</Flex>
<BottomText/>
<Footer/>
</>



)




}

export default MenProducts;