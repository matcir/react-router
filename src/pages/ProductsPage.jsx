import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ProductsPage() {

    const productsUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(productsUrl)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false);
            })
    }, [productsUrl])

    if (loading) {
        <div className="text-center p-5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading data...</span>
            </div>
        </div>
    }

    return (
        <>
            <h1 className="p-3">Acquista dalla nostra vasta gamma di prodotti</h1>
            <div className="container p-3">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {products?.map(product => (
                        <div key={product.id} className="col">
                            <div className="card h-100">
                                <Link to={`/products/${product.id}`}>
                                    <figure>
                                        <img src={product.image} className="card-img-top img-fluid img-fixed" alt={product.title} />
                                    </figure>
                                </Link>
                                <div className="my-card-body card-body">
                                    <h4 className="card-title">{product.title}</h4>
                                    <p className="card-text">{`${product.price.toFixed(2)}€`}</p>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}