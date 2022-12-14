import logo from "../FashionBag2.png"
import {SlHandbag } from "react-icons/sl";
import { Center } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
const Logo=()=>{
 const {cartcount}=useContext(AuthContext);
const style={
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    margin:"auto",
    height:"auto",
    width:"95%",
   border:"1px solid tomato"
}
const div1={
    border:"1px solid yellow",width:"60%",display:"flex",justifyContent:"flex-end",height:"129.06px"

}
const div2={
    border:"solid green",
    width:"40%" ,
    height:"129.06px",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center"
}
const counter={
    position: 'absolute',
    top: '119px',
    left: '94.74%',
    paddingLeft: '9px',
    fontSize: '13px',
    fontWeight: '400'
}
return(
    <div style={style}>
        <div style={div1}>
    <img  src={logo} style={{width:"350px",border:"1px solid green",}} alt="FB"/>
    </div>
    <div style={div2}>
      <p>SHOPPING BAG</p>
      <SlHandbag style={{fontSize:"50px",marginTop:"-10px"}}/>
    <p style={counter}>{cartcount}</p>
    </div>
    </div>
)

}
export default Logo;