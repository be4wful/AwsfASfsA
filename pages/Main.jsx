import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Main({products, setProducts}) {
    useEffect(() => {
        fetch('http://api-shop.alabuga.space/api-shop/products', {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(resp => resp.json())
        .then(resp => setProducts(resp))
    }, [])
    return (
        <>
        <Header />
        <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {products.data?.map((product, index) => (
                    <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">{product.name}</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">{product.price}</h1>
                            <p>{product.description}</p>
                            <button type="button" class="w-100 btn btn-lg btn-outline-primary">Добавить в корзину</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </main>
        <Footer />
        </>
        
    )
}
export default Main;