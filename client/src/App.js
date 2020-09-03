import React from 'react';
import './App.css';
import Header from "./components/header";
import Home from './components/home';
import Banner from './components/banner'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div>
        <Home />
      </div>

    </div>
  );
}

export default App;
