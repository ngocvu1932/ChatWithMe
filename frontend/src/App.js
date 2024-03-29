import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import ChatPage from './pages/chatPage/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/chats' Component={ChatPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
