import React, { useRef } from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import AddMovie from './component/AddMovie';
import ProtectedRoute from './component/ProtectedRoute';

const App = () => {

  return (
    <>
      {/* <Login /> */}
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/AddMovie" element={<ProtectedRoute><AddMovie /></ProtectedRoute>}></Route>
      </Routes>
    </>
  )
}

export default App