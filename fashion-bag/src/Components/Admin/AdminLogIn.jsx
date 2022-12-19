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
  import { AuthContext } from '../../Context/AuthContext';
  import { useContext,useState } from 'react';
  export default function AdminLogin() {
    const {AdminLogIn}=useContext(AuthContext);
    let obj={
        email:"",
        password:""
    }
    const[form,setForm]=useState(obj);
 const {email,password}=form;

    const HandleChange=(e)=>{

    setForm({...form,[e.target.name]:e.target.value});

    }
    const HandleClick=(e)=>{
        e.preventDefault();
        if(email=="" && password==""){
         alert("Fill All the fields");
         return;
        }
       AdminLogIn(form)
       
        setForm(obj);
        
    }
 

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Admin LogIn</Heading>

          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={email} onChange={HandleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={password}  onChange={HandleChange}/>
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
                  }}  
                  
                  onClick={HandleClick}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }