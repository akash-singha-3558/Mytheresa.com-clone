import {Box,Text,Center,Image} from "@chakra-ui/react";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousal=()=>{
  
 const data= ["https://img.mytheresa.com/420/475/95/jpeg/catalog/product/13/P00777806.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/93/P00737482.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/0e/P00734044.jpg",
"  https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a7/P00737670.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/a4/P00726570.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/ca/P00734285.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/b2/P00706286.jpg",
"  https://img.mytheresa.com/420/475/95/jpeg/catalog/product/2c/P00689123.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4c/P00748974.jpg",
"  https://img.mytheresa.com/420/475/95/jpeg/catalog/product/6b/P00745661.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/39/P00770930.jpg",
"  https://img.mytheresa.com/420/475/95/jpeg/catalog/product/d3/P00738270.jpg",
  "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/56/P00737581.jpg",
"  https://img.mytheresa.com/420/475/95/jpeg/catalog/product/1a/P00739363.jpg",
  "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/6e/P00737614.jpg",
  "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/4e/P00688473.jpg",
  "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/70/P00737496.jpg",
  "https://img.mytheresa.com/420/475/95/jpeg/catalog/product/fa/P00745712.jpg",
 " https://img.mytheresa.com/420/475/95/jpeg/catalog/product/e6/P00739348.jpg"]
return(
<>
<Box w="79%" m="auto" mt="20">
<Center><Text fontFamily="Futura-Medium,Century Gothic,Gill Sans, Helvetica, Arial, sans-serif" 

fontSize="32px" lineHeight="42px"
>New Arrivals</Text></Center>
</Box>
<>
{data.map((el)=>(
  <div className="card">
 <div className="card-top"><Image src={el}/></div>
  <div className="card-bottom"></div>
</div>

))}

</>
</>

)

}
export default Carousal;