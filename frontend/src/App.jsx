import React from "react";
import {Routes,Route,Link} from 'react-router';
import Login from './Pages/Login';
import Register from "./Pages/Register";
// import Notes from "./Pages/Notes";
// import AI_Assistant from "./Pages/AI_Assistand";
// import Dashboard from "./Pages/Dashboard";
// import Search from "./Pages/Search";

export default function App() {
  return (
    <>
    {/* <Nav className="text-3xl font-bold text-blue-600 underline">
      Tailwind is working!
    </Nav> */}

    <Routes>
      <Route path="/" element={<Login/>}></Route>
       <Route path="/Register" element={<Register/>}></Route>
    </Routes>
    </>
  )
}

