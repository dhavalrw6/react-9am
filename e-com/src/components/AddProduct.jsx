import axios from 'axios';
import React, { useState } from 'react'

function AddProduct({ handlePost }) {

    let [product, setProduct] = useState({});

    let handleChange = (e) => {
        let { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        handlePost(product);
        setProduct({});
    }

    

    return (
        <>
            <div className="container">
                <form className='form w-50 mx-auto mt-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name='title'
                            onChange={handleChange}
                            value={product.title || ''}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            name='price'
                            onChange={handleChange}
                            value={product.price || ''}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">image Url</label>
                        <input
                            type="text"
                            className="form-control"
                            name='url'
                            onChange={handleChange}
                            value={product.url || ''}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddProduct
