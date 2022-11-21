import React from "react"

function useHover() {
    const [hovered,setHovered] = React.useState(false)
    const ref = React.useRef()

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    React.useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        console.log(ref.current)
    }, [])

    return [hovered, ref]
}

export default useHover