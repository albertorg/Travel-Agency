import { useEffect, useRef, useState } from "react";


export const useFixedNav = () => {
    const [fixedNavbar, setFixedNavbar] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > navbarRef.current.offsetTop) {
                setFixedNavbar(true)
            } else {
                setFixedNavbar(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const navbarHeight = navbarRef.current.clientHeight
        const content = document.querySelector('.content')
        if (fixedNavbar) {
            content.style.marginTop = `${navbarHeight + 32}px`
        } else {
            console.log(content)
            content.style.marginTop = '2rem'
        }
    }, [fixedNavbar])

    return {fixedNavbar, navbarRef}
}
