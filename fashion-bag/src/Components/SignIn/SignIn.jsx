import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
import React from 'react';

  import { useContext,useState } from 'react';
  import { AuthContext } from '../../Context/AuthContext';
  import {useNavigate} from "react-router-dom";
  
const SignIn=()=>{
const {isAuth,CheckLogIn}=useContext(AuthContext);
const navigate=useNavigate();
let userDetails={
    email:"",
    password:""
}
const [form,setFormData]=useState(userDetails);
const {email,password}=form;
const HandleChange=(e)=>{

setFormData({...form,[e.target.name]:e.target.value});


}

const HandleClick=(e)=>{
    e.preventDefault();
   
    // SendSignUpData(form);

      if(CheckLogIn(form)==true){
        setFormData(userDetails);
        navigate("/");
        
      }
      
      
      else if(CheckLogIn(form)==false){
        alert("wrong credentials");
        setFormData(userDetails);
      }
     
}

return(
<>



    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to buy your favourite brand & <Link color={'blue.400'}>products</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" value={email} type="email" onChange={HandleChange} isRequired={true}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input  name="password" type="password" value={password} onChange={HandleChange}  isRequired={true} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={HandleClick}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  



</>

)

}
export default SignIn;