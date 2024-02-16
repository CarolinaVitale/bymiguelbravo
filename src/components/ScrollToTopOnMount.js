import { useEffect } from "react"; 
import { useLocation } from "react-router-dom"; 


function ScrollToTopOnMount() { 
    const { pathname } = useLocation(); 
    
        useEffect(() => { 
            window.scrollTo(0, 0); // Hace scroll hacia arriba cuando el componente se monta 
        }, [pathname]); // Se ejecutará cada vez que cambie la ubicación (ruta) 
        
        return null;
    } 
    
    export default ScrollToTopOnMount;
