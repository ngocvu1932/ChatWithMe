import React from 'react'
import { Container, Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import './style.css'
import Signup from '../../components/authentication/Signup'
import Login from '../../components/authentication/Login'

const HomePage = () => {
  return (
    <Container maxW='xl' centerContent >
      <Box className='box_title'>
        <Text className='title_text'>CHAT WITH ME</Text>
      </Box>

      <Box className='box_content'>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList margin={'5px 0px 5px 5px'}>
            <Tab>Đăng nhập</Tab>
            <Tab>Đăng ký</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* <Text> Đăng nhập </Text> */}
                <Login />
            </TabPanel>
            <TabPanel>
              {/* <Text> Đăng ký </Text> */}
                <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* <Text></Text> */}
    </Container>
  )
}

export default HomePage