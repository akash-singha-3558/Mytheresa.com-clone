import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from "react-router-dom";
import {AiOutlineDoubleRight } from "react-icons/ai";
import './carou.css';
// import { dataDigitalBestSeller } from './data';

import axios from 'axios';
import { Button } from '@chakra-ui/react';

function Carousal1() {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 

  const [getData,setGetData] = useState([]);
  
  useEffect(() => {
    fetchData();
    console.log("data",getData)
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://thankful-loafers-hare.cyclic.app/mytheresaMENScAROUSAL`);
      let x = res.data;
      x.length=10;
      setGetData(x);
    } catch (err) {
      return console.log(err);
    }
  }

  console.log("after useEffect",getData)


  return (
    <div className="Karu" style={{ backgroundColor:"#865e3e",width:"79%",margin:"auto", marginTop:"20px",padding:"30px",boxSizing:"border-box"}}>
      <Slider {...settings}>
        {getData.map((item) => (
          <div className="card" >
            <div className="card-top">
                <div style={{width:"100%", height:"auto"}}>
                <img
               style={{height:"90%",width:"100%"}}
                src={
                 item.image
                }
                alt={item.title}
               
              />
                </div>
              
              <h1 style={{ maxWidth: '40ch',  overflow:'hidden' ,textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'}}>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>€ <span style={{color:"#865e3e"}}>{item.price}</span></h3>
            
            </div>
            
          </div>
        ))}
      </Slider>
      <Link to="/mensProduct"><Button mt="30px" bg="black" color="white"_hover={{bg:"black"}}>SEE ALL <AiOutlineDoubleRight/></Button></Link>
    </div>
  );
}

export default Carousal1;