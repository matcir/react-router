import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SelectedProduct() {
    const { id } = useParams()
    const apiUrl = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

    return (
        <>
            <div className="container">



                <div className="card h-100">
                    <figure>
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