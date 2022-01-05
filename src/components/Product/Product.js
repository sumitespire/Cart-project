import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    // componentDidUpdate() {
    //     console.log('cartpage');
    // }

    componentDidMount() {
        console.log('cartpage');
        const setLocalStorage = sessionStorage.getItem('isLoggedIn');
        if (setLocalStorage === '1') {
            this.setState({
                isLoggedIn: true
            })
        }
    }



    loginHandler = (email, password) => {
        // sessionStorage.setItem('isLoggedIn', '1')
        this.setState({
            isLoggedIn: true
        })
    };

    logoutHandler = () => {
        this.setState({
            isLoggedIn: false
        })
        // sessionStorage.removeItem('isLoggedIn');
    };

    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }



    render() {
        const { name, description, author, publishDate, duration, image, isInCart, user, loginUser } = this.props;
        console.log('___product page',)

        return (

            <>
                <td>{name}</td>
                <td>{description}</td>
                <td>{author}</td>
                <td>{publishDate}</td>
                <td>{duration}</td>
                <td className="activebutton">
                    <img src={image} alt="" style={{ width: 100 }} />
                    {!loginUser ? <button
                        className="btn btn-primary" onClick={() => user(true)}
                    >
                        Add to cart
                    </button> :
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    }

                </td>

            </>

        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
