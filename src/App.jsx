import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import Login from './pages/Login';
import './responsive.css';


function App() {
    return (
        <div className="font-sans">
                <Routes>
                    <Route element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/auth" element={<Login />} />

                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
        </div>
    );
}

export default App;
