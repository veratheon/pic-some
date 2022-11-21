import React from "react"
import PropTypes from 'prop-types';
import {Context} from "../Context"
import useHover from "../hooks/useHover";

function Image({className, img}) {
    const [hovered, ref] = useHover()
    const {toggleFavourite, addCartItem, cartItems, removeCartItem} = React.useContext(Context)

    function heartIcon() {
        if(img.isFavourite) {
            return <i onClick={() => toggleFavourite(img.id)} className="ri-heart-fill favorite" ></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavourite(img.id)}></i>
        }
    }

    function cartIcon() {
        if(cartItems.some(item => item.id === img.id)) {
            return <i onClick={() => removeCartItem(img.id)} className="ri-shopping-cart-fill cart"></i>
        } else if(hovered) {
            return <i onClick={() => addCartItem(img)}className="ri-add-circle-line cart"></i>
        }
    }

    return (
        <div 
        ref={ref}
        className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        isFavourite: PropTypes.bool
    })
}

export default Image
