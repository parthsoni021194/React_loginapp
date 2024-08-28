import React, { useState, lazy, Suspense } from 'react';
import './App.css';
// import './style.scss';
// import Spinner from './Spinner.gif';
import Profile from './Pages/Profile';
import Login from "./Pages/Login";
import Calculator from "./Pages/Calculator";
// import Home from "./Pages/Home";
import Signin from './Pages/Signin';
import Navbar from './Pages/Navbar';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
const Home = lazy(() => import('./Pages/Home'));
// const Login = lazy(() => import('./Pages/Login'));
function App() {
  // const [userData, SetData] = useState('');
  // const handleData = (data) => {
  //   SetData(data);
  //   console.log(userData);
  // }
  // !localStorage.getItem("token") ? <Navigate to="/signin" /> :
  return (
    <div>
      <Navbar />
      <div className='App'>
        {/* <video src={vid} autoPlay muted loop className='myvid'></video> */}
        {/* <div className='overlay'></div> */}

        <div >
          {/* <div class="home-content"> */}
          {/* <h2>{userData}</h2> */}
          <Routes>
            <Route exact path="/" element={<Suspense fallback={<div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>}><Home /></Suspense>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signin" element={<Signin />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
