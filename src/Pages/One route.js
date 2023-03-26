import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "./one_routecss.css"
const OneRoute = () => {
    const {id} = useParams()
const [oneProduct,setOneProduct] = useState([])

    useEffect(()=>{
        axios(`http://localhost:8080/product/${id}`)
            .then(({data})=>setOneProduct(data))
    },[])
    console.log(oneProduct.image)

    return (
        <div>
            <div>
                <div>
                    <img src={`${oneProduct.image===undefined?'':oneProduct.image[0]}`} alt=""/>
                </div>
                <div className="one_route_right">
                    <h1>{oneProduct.name}{oneProduct.brand}</h1>
                    <p>цена:{oneProduct.price}</p>
                    <p>Память:{oneProduct.memory}</p>
                    <p>Цвет:{`${oneProduct.color===undefined?'':oneProduct.color[0]}`}</p>
                </div>
            </div>
        </div>
    );
};

export default OneRoute;