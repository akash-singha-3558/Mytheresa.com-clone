import ProductCard from "./ProductsCards";
import {useEffect,useState} from "react";
import axios from 'axios';
import {Flex,Grid,GridItem,Box,Text, Button} from "@chakra-ui/react";
import { Sale } from "../Womens/sale";
import SaleText from "../SaleText";
import BottomText from "../BottomText";
import Footer from "../GlobalComponents/Footer";
import Logo from "../Logo";
const WomenProducts=()=>{
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

<SaleText/>
<Flex m="auto" flexDirection={{base:'column',sm: 'column',
  md: 'column',
  lg: "row",
  xl: "row",
  '2xl': "row",}} mt="10" mb="10">
<Box w={{base:'100%',sm: '100%',
  md: '100%',
  lg: "20%",
  xl: "20%",
  '2xl': "20%",}}    p="10" position="fixed" top={{base:'0px',sm: '0px',
  md: '0px',
  lg: "290px",
  xl: "290px",
  '2xl': "290px",}} bg="white" zIndex={{base:'5',sm: '5',
  md: 5,
  lg: 0,
  xl: 0,
  '2xl': "0",}}  >
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
<Box w={{base:'100%',sm: '100%',
  md: '100%',
  lg: "80%",
  xl: "80%",
  '2xl': "80%",}} m="auto" p="10" ml= {{base:'0',sm: '0',
  md: '0',
  lg: "250px",
  xl: "250px",
  '2xl': "250px",}} mt={{base:"100",sm:"100",md:"100",lg:0,xl:0,"2xl":0}} > 
<Grid templateColumns={{base:'repeat(1,1fr)',sm: 'repeat(1,1fr)',
  md: 'repeat(2,1fr)',
  lg: "repeat(3,1fr)",
  xl: "repeat(3,1fr)",
  '2xl': "repeat(3,1fr)",}} gap="6" >
{



cdata.length===0?data.map((el)=>(
    <GridItem key={el.name}>  <ProductCard key={el.name} image_url={el.image_url} name={el.name} description={el.description} price={el.price}
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
<BottomText />
<Footer/>
</>



)




}

export default WomenProducts;