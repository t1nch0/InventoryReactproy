import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

import Navbar from './component/layout/Navbar';
import Newmodal from './component/layout/Newmodal';
import Footer from './component/layout/Footer';
import Login from './component/layout/Login';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Newmodal />
      <Login />
      <Footer />

    </div >
  );
}

export default App;
