import { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 


function ScrollToTopOnMount() { 
    const { pathname, hash } = useLocation();
    
        useEffect(() => { 
            if (hash) {
                window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }));
            } else {
                window.scrollTo(0, 0);
            }
        }, [pathname, hash]);
        
        return null;
    } 
    
    export default ScrollToTopOnMount;
