import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, author, onClick }) => {
    return (
        <div className="cart-item">
            <div className="col-md-12">
                <div className='row'>
                    <div className="col-md-2"><button className="btn btn-danger btn-xs" onClick={onClick}>X</button></div>
                    <div className="col-md-6">{name}</div>
                    <div className="col-md-4">{author}</div>
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default CartItem;
