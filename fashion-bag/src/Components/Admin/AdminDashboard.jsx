import {Box,Flex,Text,Grid,Center,Input,Select,Button} from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios";
const AdminDashboard=()=>{
    const [url,setUrl]=useState("ihttps://thankful-loafers-hare.cyclic.app/mens");
const obj={
name:"",
price:"",
description:"",
image_url:"",
strikedoffprice:"",
option:url,
}
const [data,setData]=useState(obj);

const {name,price,description,image_url,strikedoffprice,option}=data;

const HandleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value});

}

const HandleClick=(e)=>{
    e.preventDefault();
    let give={
        name:data.name,
price:data.price,
description:data.description,
image_url:data.image_url,
strikedoffprice:data.strikedoffprice,
    }
     PostData(data.name,data.price,data.description,data.image_url,data.strikedoffprice)
    console.log(data.option,give)
}

const PostData=(name,price,description,image_url,strikedoffprice)=>{
    axios.post('https://thankful-loafers-hare.cyclic.app/mens', {
        name:name,
        price:price,
        description:description,
        image_url:image_url,
        strikedoffprice:strikedoffprice,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}
return(
<>
<center><Box bg="black" w="30%"><Text fontSize="20px" fontWeight="bold" color="white" mt="5">Admin Dashboard</Text></Box></center>
<Flex w="90%" h="600" border="4px solid grey" m="auto" mt="5" borderRadius="10PX">
<Box w="40%" borderRight="1px solid grey" p="10px">
     
<Input placeholder="Product Name" type="text"  name="name" onChange={HandleChange} />

<Input placeholder="Price" type="number" mt="5"  name="price" onChange={HandleChange}/>
<Input placeholder="Strikedoff Price" type="number" mt="5" name="strikedoffprice" onChange={HandleChange}/>
<Input placeholder="Description" type="text" mt="5"  name="description" onChange={HandleChange} />
<Input placeholder="Image Url" type="text" mt="5"  name="image_url" onChange={HandleChange}/>
<Select placeholder='Select option' mt="5" onChange={HandleChange} name="option"  >
  <option value='https://thankful-loafers-hare.cyclic.app/mens'>Men's Page</option>
  <option value='https://thankful-loafers-hare.cyclic.app/women'>Women's Page</option>
 
</Select>
<Button bg="black" color="white" _hover={{bg:"teal"}} mt="5" w="100%" onClick={HandleClick}>Add Product</Button>
</Box>

</Flex>
</>

)


}

export default AdminDashboard;