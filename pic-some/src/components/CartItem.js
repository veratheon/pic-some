import React from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeCartItem} = React.useContext(Context)
    const deleteClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i 
            ref={ref}
            onClick={() => removeCartItem(item.id)} 
            className={deleteClassName}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem