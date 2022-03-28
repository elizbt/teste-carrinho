import React, { useState } from 'react'
import { overPrice, belowPrice } from '../functionJson'
import { Container } from './style'

 export default function Cart () {

    const [products, setProducts] = useState(belowPrice)


    return (

        <Container>
            <div className= "cart">
                <div className= "header">
                    <h2>Meu carrinho</h2>
                </div>
                
                <div className= "inside">
                    <label> Frete grátis</label>
                    <button onClick={() => setProducts(overPrice)}> o </button>

                    {products.items.map((product) => { 
                        return (
                        <div className="products">
                            <div className="image" key={product.id}>
                                <img src={product.imageUrl}/>
                            </div>
                            <div className="details">
                                <p> <strong>{product.name} </strong></p>
                                <p> R${product.price/100} </p> 
                                <p> <strong>R${product.sellingPrice/100}</strong></p>
                            </div>
                        </div>

                        ) 
                    })}
                    <div className="footer">
                        <div className="amount">
                           <h3> Total</h3>
                           <span>R${products.value/100}</span>
                        </div>
                        <div className="discount">
                            {(products.value/100 )> 10 && <span> Parabéns, sua compra tem frete grátis !</span>}
                        </div>
                        <hr/>
                        <div>
                            <button>Finalizar compra</button>
                        </div>
                    </div>
                </div>
            </div> 
        </Container>
    )
}
