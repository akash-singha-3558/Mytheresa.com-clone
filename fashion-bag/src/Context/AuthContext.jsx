import {createContext,useState} from "react";
export const AuthContext=createContext();

const AuthContextProvider=({children})=>{
const [cartcount,setCartCount]=useState(0);
const[saleText,setSaleText]=useState("up to 30% off on selected styles");
const[isAuth,setAuth]=useState(false);

let delay=setTimeout(()=>{
    setSaleText(saleText=="up to 30% off on selected styles"?"Last day; Jacquemus Private Sale":"up to 30% off on selected styles")
},2000)

setInterval(delay,2000);




return(
<AuthContext.Provider value={{cartcount,isAuth,saleText}}>

{children}


</AuthContext.Provider>

)


}

export default AuthContextProvider;