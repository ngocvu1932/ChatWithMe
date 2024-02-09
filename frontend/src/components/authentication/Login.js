import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const submitHandler = async() => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: 'Hãy điền đầy đủ thông tin!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        }
      }


      const { data } = await axios.post(
        "/api/user/login", 
        { email, password },
        config
      );

      toast({
        title: 'Đăng nhập thành công!',
        status: 'success',
        duration: 10000,
        isClosable: true,
        position: 'bottom'
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      // console.log("2");
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      // console.log(error);
      toast({
        title: 'Đăng nhập thất bại!',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom'
      });
      setLoading(false);
    }
  };

  
  return (
    <VStack>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input backgroundColor='#EDF2F7' placeholder='Email của bạn' value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Mật khẩu</FormLabel>
        <InputGroup>
          <Input backgroundColor='#EDF2F7' type={showPassword ? 'text' : 'password'} value={password}  placeholder='Nhập mật khẩu' onChange={(e)=>setPassword(e.target.value)}></Input>
          <InputRightElement>
          <Button backgroundColor='#EDF2F7'height='30px' marginRight='10px' onClick={()=> setShowPassword(!showPassword)}>
            {showPassword ? 'Ẩn' : 'Hiện'}
          </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button colorScheme='blue' width={'100%'} onClick={submitHandler} isLoading={loading}>
        Đăng nhập
      </Button>

      <Button colorScheme='red' width={'100%'} onClick={()=> {
        setEmail('guest@example.com');
        setPassword('123456');
      }}>
        Đăng nhập với tài khoản guest
      </Button>
    </VStack>
  )
}

export default Login