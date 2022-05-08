import React from 'react';
import ListElement from "./ListElement";
import products from "./etsy.json";

const Listing = () => {
    return (
        <>
            {products.map((el, index) =>
                <ListElement key={index} listing_id={el.listing_id}
                             state={el.state}
                             url={el.url}
                             mainImage={el.MainImage}
                             title={el.title}
                             currency_code={el.currency_code}
                             price={el.price}
                             quantity={el.quantity} />
            )}
        </>
    )
}

export default Listing;

