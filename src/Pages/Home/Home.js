import React from 'react';
import homecss from "./home.scss"
import {Link} from "react-router-dom";
const Home = ({product}) => {

    return (
        <section>
            <homecss/>
            <div className="container">
                <div className="cards">
                    {product.map((el,idx)=>(
                        <div className='card'>
                            <Link to={`${el.id}`}>
                            <img src={el.image[0]} alt=""/>
                            <h1>{el.name}{el.brand}</h1>
                            <p>цена:{el.price}</p>
                            <p>Память:{el.memory}</p>
                            <p>Цвет:{el.color[0]}</p>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;