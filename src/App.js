import React, {useEffect, useState} from 'react';
import {Route,Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Iphone from "./Pages/iphone/Ipfone";
import axios from "axios";
import Samsung from "./Pages/Sumsung/Samsung";
import OneRoute from "./Pages/One route";

const App = () => {
    const [product,setProduct] =useState([])
    useEffect(()=>{
        axios("http://localhost:8080/product").then(({data})=>{
            setProduct(data)
        })
    },[])
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home product={product}/>}/>
                    <Route path='about' element={<About/>}/>
                    <Route path='iphone' element={<Iphone product={product}/>}/>
                    <Route path='samsung' element={<Samsung product={product}/>}/>
                    <Route path='/:id' element={<OneRoute/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;