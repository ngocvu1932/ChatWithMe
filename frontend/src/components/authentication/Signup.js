import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();


  const postDetails = (pics) => {
    // setLoading(true);
    // if (pics === undefined) {
    //   toast({
    //     title: 'Hãy chọn hình ảnh!',
    //     status: 'warning',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'bottom'
    //   });
    //   return;
    // }

    // if (pics.type ==="image/jpeg" || pics.type === "image/png") {
    //   const data = new FormData();
    //   data.append('file', pics);
    //   data.append('upload_preset', "chat-app");
    //   data.append('cloud_name', "ngocvu1932");
    //   fetch("https://api.cloudinary.com/v1_1/ngocvu1932/image/upload", {
    //     method: 'post',
    //     body: data
    //   })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPic(data.url.toString());
    //     // console.log(data.url.toString());
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });
    // } else {
    //   toast({
    //     title: 'Hãy chọn hình ảnh!',
    //     status: 'warning',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'bottom'
    //   });
    //   setLoading(false);
    //   return;
    // }
  };

  const submitHandler = async () => {
    // setLoading(true);
    // if (!name || !email || !password || !confirmPassword) {
    //   toast({
    //     title: 'Hãy điền đầy đủ thông tin!',
    //     status: 'warning',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'bottom'
    //   });
    //   setLoading(false);
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   toast({
    //     title: 'Mật khẩu không khớp!',
    //     status: 'warning',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'bottom'
    //   });
    //   setLoading(false);
    //   return;
    // }

    // console.log(name, email, password, pic);

    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //   };

    //   const {data} = await axios.post("/api/user", {name, email, password, pic}, config);

    //   toast({
    //     title: "Đăng ký thành công!",
    //     status: "success",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom"
    //   });

    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   setLoading(false);
    //   navigate("/chats");
    // } catch (error) {
    //   // console.log(error);
    //   toast({
    //     title: "Đăng ký thất bại!",
        
    //     status: "error",
    //     duration: 5000, 
    //     isClosable: true,
    //     position: "bottom"
    //   });
    //   // console.log("OWr ddaya ne");
    //   setLoading(false);
    // }
  };


  return (
    <VStack>
      <FormControl id='first_name' isRequired>
        <FormLabel>Tên</FormLabel>
        <Input backgroundColor='#EDF2F7' placeholder='Tên của bạn' onChange={(e)=>setName(e.target.value)}></Input>
      </FormControl>

      <FormControl id='email1' isRequired>
        <FormLabel>Email</FormLabel>
        <Input backgroundColor='#EDF2F7' placeholder='Email của bạn' onChange={(e)=>setEmail(e.target.value)}></Input>
      </FormControl>

      <FormControl id='password1' isRequired>
        <FormLabel>Mật khẩu</FormLabel>
        <InputGroup>
          <Input  backgroundColor='#EDF2F7' type={showPassword ? 'text' : 'password'} placeholder='Nhập mật khẩu' onChange={(e)=>setPassword(e.target.value)}></Input>
          <InputRightElement>
          <Button backgroundColor='#EDF2F7' height='30px' marginRight='10px' onClick={()=> setShowPassword(!showPassword)}>
            {showPassword ? 'Ẩn' : 'Hiện'}
          </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='confirmPassword' isRequired>
        <FormLabel>Xác nhận mật khẩu</FormLabel>
        <InputGroup>
          <Input backgroundColor='#EDF2F7' type={showPassword ? 'text' : 'password'} placeholder='Xác nhận mật khẩu' onChange={(e)=>setConfirmPassword(e.target.value)}></Input>
          <InputRightElement>
          <Button backgroundColor='#EDF2F7' height='30px' marginRight='10px' onClick={()=> setShowPassword(!showPassword)}>
            {showPassword ? 'Ẩn' : 'Hiện'}
          </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='pic'>
        <FormLabel>Hình ảnh</FormLabel>
        <Input type='file' padding={1} accept='image/*' onChange={(e)=> postDetails(e.target.files[0])} ></Input>
      </FormControl>

      <Button colorScheme='blue' width={'100%'}  >
        Đăng ký
      </Button>
    </VStack>
  )
}

export default Signup 