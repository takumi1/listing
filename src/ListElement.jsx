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
    const showTitle = () => {
        return String(props.title).length > 50 ? `${props.title.slice(0, 50)}...` : props.title
    }
    const chooseRemainColor = () => {
       return `${props.quantity === '' ? '' : 'item-quantity'}
                         ${remainsStyle(props.quantity)}`
    }

    return (
        <>
            {props.state === 'active' ?
            <div className="item-list">
                <div className="item">
                    <div className="item__inline__wrapper">
                    <div className="item-image">
                        <a href={props.url}>
                            <img src={props.mainImage.url_570xN} alt=''/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{showTitle()}</p>
                        <p className="item-price">{itemCurrency(props.currency_code, props.price)}</p>
                        <p className={chooseRemainColor()}>
                            {props.quantity}{props.quantity === '' ? '' : ' left'}
                        </p>
                     </div>
                    </div>
                </div>
            </div> :
            ''}
        </>
    );
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