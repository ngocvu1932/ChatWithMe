import React, { useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {

  const fetchChat = async ()=> {
      const {data} = await axios.get('/api/chat');

      console.log(data);
  }

  useEffect(()=> {  
    fetchChat();
  }, [])


  // console.log('ChatPage');
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage