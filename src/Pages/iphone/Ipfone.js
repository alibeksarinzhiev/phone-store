import React from 'react';
const Iphone = ({product}) => {
    return (
        <section>
            <div className="container">
                <div className={"cards"}>
                {product.filter((el,idx)=>(
                    el.brand==='Apple'
                )).map((el)=>(

                    <div className='card'>
                        <img src={el.image[0]} alt=""/>
                        <h1>{el.name}{el.brand}</h1>
                        <p>цена:{el.price}</p>
                        <p>Память:{el.memory}</p>
                        <p>Цвет:{el.color[0]}</p>
                    </div>

                ))}
                </div>
            </div>
        </section>
    );
};

export default Iphone;