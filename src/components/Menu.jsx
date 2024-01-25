import '../styles/menu.css';
import Logo from '../media/LogoAbogadocs.svg';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src={Logo} alt='logoAbogadocs' className='logoImg' />
                </Link>
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mt-0">
                            <Link className="nav-link" to="/home">INICIO</Link>
                        </li>
                        <li className="nav-item mt-0">
                            <Link className="nav-link" to="/documentos">DOCUMENTOS</Link>
                        </li>
                        <li className="nav-item mt-0">
                            <Link className="nav-link" to="/libros">LIBROS</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;

