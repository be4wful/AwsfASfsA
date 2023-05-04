import React from "react";
import { Link } from "react-router-dom";

const Header = ({isAuth, setIsAuth, setToken}) => {

    return (
        <>
            <header>
                <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                        <span class="fs-4">«Just buy»</span>
                    </a>
                    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        {isAuth == false ? (
                            <>
                                <Link to = '/signup' class="me-3 py-2 text-dark text-decoration-none" href="#">Регистрация</Link>
                                <Link to = '/login' class="me-3 py-2 text-dark text-decoration-none" href="#">Авторизация</Link>
                            </>
                        ) : (
                            <>
                                <Link to = '/order' class="me-3 py-2 text-dark text-decoration-none" href="#">Мои заказы</Link>
                                <Link to = '/cart' class="me-3 py-2 text-dark text-decoration-none" href="#">Корзина</Link>
                                <Link to = '/' class="me-3 py-2 text-dark text-decoration-none" href="#" onClick ={() => {setIsAuth(false); setToken('')}}>Выйти</Link>
                            </>
                        )}
                    </nav>
                </div>
                <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 class="display-4 fw-normal">Каталог товаров</h1>
                </div>
            </header>
        </>
    )
}
export default Header;