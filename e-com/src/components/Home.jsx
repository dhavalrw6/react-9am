import React, { useEffect, useState } from 'react'


function Home({ products, cartProduct }) {
    let [productList, setProductList] = useState([]);


    useEffect(() => {
        setProductList(products);
    }, [products]);


    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        productList.map((product, index) => (
                            <div className="col-4 my-3">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img src={product.url} className="card-img-top " alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">Rs. {product.price}</p>
                                        <button 
                                            className="btn btn-primary"
                                            onClick={() => cartProduct(index)}
                                        >
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home
