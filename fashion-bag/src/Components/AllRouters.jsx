import {Routes,Route} from "react-router-dom";
import Women from "./Womens/Women";
import Kids from "./Kids";
import Man from "./Man";
import Life from "./Life";

const AllRoutes=()=>{

return(
<Routes>
 <Route path="/" element={<Women/>}></Route>
 <Route path="/man" element={<Man/>}></Route>
 <Route path="/life" element={<Life/>}></Route>
 <Route path="/kids" element={<Kids/>}></Route>
 
</Routes>

)

}
export default AllRoutes;