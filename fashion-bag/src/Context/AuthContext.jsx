import {createContext,useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { SiToptal } from "react-icons/si";
import { useToast } from '@chakra-ui/react'
export const AuthContext=createContext();

const AuthContextProvider=({children})=>{

  const toast = useToast();
  const[total,setTotal]=useState(0);
const [cartcount,setCartCount]=useState(0);
const[cartData,setCartData]=useState(0);
const[username,setUserName]=useState("");
const[saleText,setSaleText]=useState("up to 30% off on selected styles");
const[isAuth,setIsAuth]=useState(false);
const navigate=useNavigate();

let delay=setTimeout(()=>{
    setSaleText(saleText=="up to 30% off on selected styles"?"Last day; Jacquemus Private Sale":"up to 30% off on selected styles")
},2000)

setInterval(delay,2000);

const SendSignUpData=(form)=>{
    axios.post('https://thankful-loafers-hare.cyclic.app/users', {
        ...form
       })
       .then(function (response) {
         console.log(response,"hi");
         setIsAuth(true);
       
       })
       .catch(function (error) {
         console.log(error);
       });
   
}

const CheckLogIn=async (Data)=>{

  try {
    const response = await axios.get('https://thankful-loafers-hare.cyclic.app/users');
    
    let data = response.data;
    console.log(Data)
    for(let i=0;i<data.length;i++)
    {
      if(data[i].email==Data.email && data[i].password==Data.password){
        setUserName(data[i].firstname);
         setIsAuth(true);
         CartCounter();
         navigate("/");
         
         toast({
          position:"top",
          title: `Log In Successful`,
          status: "success",
          isClosable: true,
        })
         return true;

      }
      else if(i===data.length-1 && data[i].email!==Data.email && data[i].password!==Data.password){
        
        return false;
        
      }
    }
    

  } catch (error) {
    console.error(error);
    
  }


}


const LogOut=()=>{
    setIsAuth(false);
    toast({
      position:"top",
      title: `Logout Successful`,
      status: "success",
      isClosable: true,
    })
}


const AddToCart=(formdata)=>{

  axios.post('https://thankful-loafers-hare.cyclic.app/cart', {
    ...formdata
   })
   .then(function (response) {
     console.log(response);
     toast({
      position:"top",
      title: `Your Product has been added to the cart`,
      status: "info",
      isClosable: true,
    })

     
   })
   .catch(function (error) {
     console.log(error);
   });


   CartCounter();
  
}

async function CartCounter (){

  try {
    const response = await axios.get('https://thankful-loafers-hare.cyclic.app/cart');
    
    let data = response.data;
    setCartCount(data.length);
    setCartData(data);
    let tp=0;
    for(let i=0;i<data.length;i++){
      tp=tp+Number(data[i].price);
    }
    setTotal(tp);
    }
    

   catch (error) {
    console.error(error);
    
  }




}

const DeleteCart=(id)=>{
  axios({
    baseURL:`https://thankful-loafers-hare.cyclic.app/cart`,
    url:`/${id}`,
    method:"delete"
   })
CartCounter();
}

const AdminLogIn=async (obj)=>{
  try {
    const response = await axios.get('https://thankful-loafers-hare.cyclic.app/admin');
    
   for(let i=0;i<response.data.length;i++){
    if(response.data[i].email==obj.email && response.data[i].password==obj.password ){
      setIsAuth(true);
      setUserName(response.data[i].firstname);
      toast({
        position:"top",
        title: `Log In Successful`,
        status: "success",
        isClosable: true,
      })
      navigate("/admindashboard");
      return true;
    }
    else{
      toast({
        position:"top",
        title: `Wrong Credentials`,
        status: "error",
        isClosable: true,
      })
     
     return false;
    }
   }
  } catch (error) {
    console.error(error);
  }


}










return(
<AuthContext.Provider value={{cartcount,isAuth,saleText,SendSignUpData,LogOut,CheckLogIn,username,AddToCart,total,cartData,DeleteCart,CartCounter,AdminLogIn}}>

{children}


</AuthContext.Provider>

)


}

export default AuthContextProvider;