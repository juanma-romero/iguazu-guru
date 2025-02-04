import ModalClima from "./ModalClima";
import ModalExchange from "./ModalExchange";
import ModalMapa from "./ModalMapa";


function Footer() {
    
    return (
        <footer>
            <nav className="py-4">
                <div className="flex justify-around">
                {/* clima */}
                <ModalClima />
                {/* cotizacion */}
                <ModalExchange />
                {/* ubicacion */}
                <ModalMapa />
                
                </div>
            </nav>
        </footer>
    );
}

export default Footer;