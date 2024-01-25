import facebookLogo from '../Media/LogoFacebook.png';
import gitHubLogo from '../Media/GitHub.png';
import inLogo from '../Media/LogoIn.png';
import instagramLogo from '../Media/LogoInstagram.png';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center p-3">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <h4 className="footer-menu-title text-start">Menu</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/home">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/documentos">Documentos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/libros">Libros</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <h4 className="mb-3">Redes Sociales</h4>
                        <div className="d-flex">
                            <a href="https://www.facebook.com/julianandresgm?mibextid=LQQJ4d" className="mx-1">
                                <img src={facebookLogo} alt="Facebook" className="img-fluid" style={{ maxHeight: '30px' }} />
                            </a>
                            <a href="https://www.instagram.com/jgm_0813?igsh=c21qN2lybHJ6bDMz" className="mx-1">
                                <img src={instagramLogo} alt="Instagram" className="img-fluid" style={{ maxHeight: '30px' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/juliangarciam" className="mx-1">
                                <img src={inLogo} alt="LinkedIn" className="img-fluid" style={{ maxHeight: '30px' }} />
                            </a>
                            <a href="https://github.com/Juliangarciam13?tab=repositories" className="mx-1">
                                <img src={gitHubLogo} alt="GitHub" className="img-fluid" style={{ maxHeight: '30px' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        © Abogadocs.com, Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
