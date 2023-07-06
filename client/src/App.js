import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/Pages/UserContext.js";
import Register from "./components/Pages/Registerform.js";
import Login from "./components/Pages/Loginform.js";
import Navbar from './components/Navbar.js';
import Profile from './components/Pages/Profile.js';
import Home from './components/Pages/Home.js';
import Post from './components/Pages/Post.js';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Navbar />}>
              <Route index element={<Home />}/>
              <Route path= "profile" element={<Profile/>}/>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="post" element={<Post/>} />
            </Route>
          </Routes>
          </UserProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;