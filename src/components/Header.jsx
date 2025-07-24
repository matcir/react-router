import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="bg-light p-2">

                <h1>Benvenuto sul tuo sito e-Commerce</h1>

                <nav className="nav justify-content-center">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                    <NavLink className="nav-link" to="/contacts">About Us</NavLink>
                </nav>

            </div>
        </>
    )
}