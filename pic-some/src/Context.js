import React, { Children } from "react";

const Context = React.createContext()

function ContextProvider(props) {
    const [allPhotos, setAllPhotos] = React.useState([])
    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(response => response.json())
        .then(data => setAllPhotos(data))
    }, [])
    
    
    return(
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
