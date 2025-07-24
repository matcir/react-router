import { useState, useEffect } from "react"

export default function ProductsPage() {

    const productsUrl = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(productsUrl)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [productsUrl])


    return (
        <>
            <h1 className="p-3">Acquista dalla nostra vasta gamma di prodotti</h1>
            <div className="container p-3">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {products?.map(product => (
                        <div key={product.id} className="col">
                            <div className="card h-100">
                                <figure>
                                    <img src={product.image} className="card-img-top img-fluid img-fixed" alt={product.title} />
                                </figure>
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