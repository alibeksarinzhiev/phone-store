import React from 'react';

const Samsung = ({product}) => {
    return (
        <div>
            <div className={"cards"}>
                {product.filter((el,idx)=>(
                    el.brand==='Samsung'
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
    );
};

export default Samsung;