import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Registerform.js";
import Login from "./components/Loginform.js";
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route index element={<Profile />}/>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;