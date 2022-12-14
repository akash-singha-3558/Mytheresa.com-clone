import {createContext,useState} from "react";
export const AuthContext=createContext();

const AuthContextProvider=({children})=>{
const [cartcount,setCartCount]=useState(0);

return(
<AuthContext.Provider value={{cartcount}}>

{children}


</AuthContext.Provider>

)


}

export default AuthContextProvider;