

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SelectedProductPage() {
    const { id } = useParams()
    const apiUrl = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState()
    let navigate = useNavigate();

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [id])

    return (
        <>
            <div className="container">

                <div className="d-flex justify-content-around">
                    <button className="btn" onClick={(e) => navigate(`/products/${product.id - 1}`)}>Prev</button>
                    <button className="btn" onClick={(e) => navigate(`/products/${product.id + 1}`)}>Next</button>
                </div>

                <div className="card h-100">
                    <figure className="p-3">
                        <img src={product?.image} className="card-img-top img-fluid img-fixed" alt={product?.title} />
                    </figure>
                    <div className="my-card-body card-body">
                        <h4 className="card-title">{product?.title}</h4>
                        <p className="card-text">{`${product?.price.toFixed(2)}€`}</p>
                        <p className="card-text">{product?.description}</p>
                        <p className="card-text">{product?.category}</p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-primary w-25">Aggiungi al carrello</button>
                </div>
            </div>
        </>
    )
}