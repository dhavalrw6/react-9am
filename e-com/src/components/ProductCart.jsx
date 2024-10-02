import React from 'react'

function ProductCart({ cartList, removeItemFromCart }) {
    return (
        <div className="container">
            {
                cartList.length > 0 ? (

                    cartList.map((item, index) => (
                        <div className="card mb-3" style={{ maxWidth: '540px' }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.url} className="img-fluid rounded-start" alt={item.title} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">Price : <span className='fw-bolder'>Rs.{item.price}</span></p>
                                        <button className='btn btn-danger' onClick={() => { removeItemFromCart(item.id) }}>Remove</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )))
                    : (
                        <h3 className='text-center mt-3'>Missing Cart items?</h3>
                    )

            }
        </div>
    )
}

export default ProductCart
