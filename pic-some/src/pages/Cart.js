import React from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, clearCartItems} = React.useContext(Context)
    const [orderText, setOrderText] = React.useState("Place order")
    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} />
    })
    const totalPrice = 5.99 * cartItems.length

    function placeOrder() {
        setOrderText("Ordering...")
        setTimeout(() => {
            setOrderText("Place order")
            clearCartItems()
        }, 2500)

    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">{`Total: ${totalPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})}`}</p>
            <div className="order-button">
                {cartItems.length > 0 && <button onClick={placeOrder}>{orderText}</button>}
            </div>
        </main>
    )
}

export default Cart