import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
const SignUp=()=>{
  const navigate=useNavigate();
  const {SendSignUpData}=useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
   const obj={
    firstname:"",
    lastname:"",
    email:"",
    password:""
   }
   const [form,setForm]=useState(obj);
const {firstname,lastname,email,password}=form;
   const HandleChange=(e)=>{
 setForm({...form,[e.target.name]:e.target.value});
   }

   const HandleClick=(e)=>{
    e.preventDefault();
    if(form.email=="" && form.password=="" && form.firstname=="" && form.lastname==""){
        alert("Input Field is empty can't create an account");
        return;
    }
    else if(password.length<8){
        alert("password length is less than 8");
        setForm(obj);
        return;
    }
     SendSignUpData(form);

      setForm(obj);
      
      navigate("/signin");
     
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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input name="firstname" type="text" onChange={HandleChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input name="lastname" type="text" onChange={HandleChange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" type="email" onChange={HandleChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input    name="password"  type={showPassword ? 'text' : 'password'} onChange={HandleChange}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}  onClick={HandleClick}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} onClick={()=>{
              navigate("/signin");
              }}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </>
)


}
export default SignUp;