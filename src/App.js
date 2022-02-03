import './App.css';
//React-Router-Dom
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
//Import Components
import Home from './Components/LoggedOut/Home';
import Welcome from './Components/Welcome/Welcome';
import Feed from './Components/Feed/Feed';
import Posts from './Components/Posts/Posts';
import PostProfileOtherUser from './Components/PostProfileOtherUser/PostProfileOtherUser';
//Import Hooks
import useAuthentication from './Hooks/Authentication';
//Import useContext, UserContext from UserContext.js
import { useContext, useEffect, useState } from "react";
import { UserContext } from './Context/UserContext';
function App() {
  const { loginSocial, logout } = useAuthentication();
  const { userGoogle } = useContext(UserContext);
  return (
    <Routes>
      <Route exact path='/' element={userGoogle ? <Navigate to='/welcome/register' /> : <Home loginSocial={loginSocial} />} ></Route>
      <Route exact path='/welcome/register' element={<Welcome />}></Route>
      <Route exact path='/feed' element={<Feed />}></Route>
      <Route exact path='/profileUserA/' element={<Posts logout={logout} />}></Route>
      <Route exact path='/profileUserB/' element={<PostProfileOtherUser />}></Route>
    </Routes>
  );
}

export default App;
