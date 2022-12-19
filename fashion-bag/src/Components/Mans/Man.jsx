import BottomText from "../BottomText";
import Footer from "../GlobalComponents/Footer";
import ItemBar from "../GlobalComponents/Itembar";
import Logo from "../Logo";
import SaleText from "../SaleText";


import HeroImage1 from "./HeroImage1";
import HeroImage2 from "./HeroImage2";
import HeroImage3 from "./HeroImage3";
const Man=()=>{

    return(
        <>
        
        <Logo/>
    <ItemBar/>
    <SaleText/>
    <HeroImage1/>
 {/* <Carousal/> */}
 <HeroImage2/>
 <HeroImage3/>
 <BottomText/>
 <Footer/>
        </>
  
    
    
    )
    
    }
    export default Man;