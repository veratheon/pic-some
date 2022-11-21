import React, { Children } from "react";

const Context = React.createContext()



function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(response => response.json())
        .then(data => setAllPhotos(data))
    }, [])

    function toggleFavourite(id) {
        const newPhotosArray = allPhotos.map(photo => {
            if(photo.id == id) {
                return {...photo, isFavourite: !photo.isFavourite}
            }
            return photo
        })
        setAllPhotos(newPhotosArray)
    }

    function isAdded(img) {
        return cartItems.some(item => item.id === img.id)
    }

    function addCartItem(img) {
        setCartItems(prev => [...prev, img])
    }

    function removeCartItem(id) {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== id))
    }

    function clearCartItems() {
        setCartItems([])
    }
    
    return(
        <Context.Provider value={{allPhotos, toggleFavourite, addCartItem, cartItems, removeCartItem, clearCartItems}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
