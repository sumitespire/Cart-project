import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from './components/MainHeader/MainHeader'
import Login from './components/Login/Login';

import { useEffect } from 'react';

const App = () => {
    let [UserActive, SetActive] = React.useState(false);
    let [loginAuth, SetLogin] = React.useState(false);
    let [cartlength, UpdateLength] = React.useState();

    useEffect(() => {
        const setLocalStorage = sessionStorage.getItem('isLoggedIn');
        if (setLocalStorage === '1') {
            SetLogin(true);
        } else {
            SetLogin(false);
        }
    }, [])

    const Logout = () => {
        sessionStorage.removeItem('isLoggedIn');
        SetLogin(false);
    }


    return (
        <>
            <MainHeader isAuthenticated={loginAuth} onLogout={Logout} cart={cartlength} />

            <Cart cartLength={UpdateLength} />

            <div className="container">
                <div className="row" style={{ padding: '90px 0 0 0' }} >
                    <div className="col-md-12">
                        <h1></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <ProductList user={SetActive} loginUser={loginAuth} />
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>

            <Login loginActive={UserActive} user={SetLogin} loginfun={SetActive} />


        </>

    );
}

export default App;
