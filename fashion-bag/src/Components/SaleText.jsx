import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const SaleText=()=>{
const {saleText}=useContext(AuthContext);
    



return(

<p style={{color:"#fc1000",fontFamily:"Futura-Medium,Century Gothic, Gill Sans, Helvetica, Arial, sans-serif"}}>{saleText}</p>

)




}
export default SaleText;