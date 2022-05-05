import React from 'react';
import './App.css'
import PropTypes from "prop-types";

const ListElement = (props) => {
   const remainsStyle = (q) => {
        if (q < 10) return 'level-low'
       else if (q > 20) return 'level-high'
       else return 'level-medium'
    }
    const itemCurrency = (curr, price) => {
        if (curr === 'USD') return `$${price}`
        else if (curr === 'EUR') return `€${price}`
        else if (curr === 'GBP') return `${price} GBP`
        else return ''
    }

    return (
        <>
            <div className="item-list">
                <div className="item">
                    <div className="item-image">
                        <a href={props.url}>
                            <img src={props.mainImage.url_570xN} alt=''/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{String(props.title).length > 50 ? `${props.title.slice(0, 50)}...` : props.title}</p>
                        <p className="item-price">{itemCurrency(props.currency_code, props.price)}</p>
                        <p className={`${props.quantity === '' ? '' : 'item-quantity'}
                         ${remainsStyle(props.quantity)}`}>
                            {props.quantity}{props.quantity === '' ? '' : ' left'}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

ListElement.defaultProps = {
    mainImage: '',
    title: 'Товар недоступен.',
    currency_code: '',
    price: '',
    quantity: ''
};
ListElement.propTypes = {
    listing_id: PropTypes.number,
    url: PropTypes.string,
    mainImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
}

export default ListElement;