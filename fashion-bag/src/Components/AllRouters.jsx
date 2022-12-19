import {Routes,Route} from "react-router-dom";
import Women from "./Womens/Women";
import Kids from "./Kids";
import Man from "./Mans/Man";
import Life from "./Life";
import WomenProducts from "./Products/productwomen";
import MenProducts from "./Products/Productsman";
import SignIn from "./SignIn/SignIn";
import SignUp from "./Signup/Signup";
import PrivateRoute from "./PrivateRoute/privateroute";
import Cart from "./Cart/cart";
const AllRoutes=()=>{

return(
<Routes>
 <Route path="/" element={<Women/>}></Route>
 <Route path="/man" element={<Man/>}></Route>
 <Route path="/life" element={<Life/>}></Route>
 <Route path="/kids" element={<Kids/>}></Route>
 <Route path="/womensProduct" element={<WomenProducts/>}></Route>
 <Route path="/mensProduct" element={<MenProducts/>}></Route>
 <Route path="/signin" element={<SignIn/>}></Route>
 <Route path="/signup" element={<SignUp/>}></Route>
 <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}></Route>
</Routes>

)

}
export default AllRoutes;