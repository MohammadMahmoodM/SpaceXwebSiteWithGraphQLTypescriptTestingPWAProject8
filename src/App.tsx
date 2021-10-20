import React from 'react';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Routes, Route, Outlet } from 'react-router-dom';
import { LaunchesAll } from './components/LaunchesAll/LaunchesAll';
import { LaunchDetails } from './components/LaunchDetails/LaunchDetails';
import { History } from './components/History/History';
import { About } from './components/About/About'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches-all" element={<div><Outlet /></div>}>
          <Route path="/launches-all/" element={<LaunchesAll />} />
          <Route path=":flightNumber" element={<LaunchDetails />}></Route>  
          {/* flightNumber */}
        </Route>
        <Route path="/history" element={<History />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

