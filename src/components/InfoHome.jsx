import initialImg from '../Media/initialImg.png';
import computer from '../Media/computer.png';
import customer1 from '../Media/customer1.png';
import customer2 from '../Media/customer2.png';
import customer3 from '../Media/customer3.png';
import '../styles/infoHome.css'

const InfoHome = () => {
    return (
        <div className='infoHome'>
            <div className="container-fluid p-5">
                <div id="mainText" className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <h3 className="text-dark mt-5 me-5">En Abogadocs tendras acceso a expertos legales, descarga de documentos y una colección selecta de libros en negocios, política y filosofía.
                        </h3>
                        <h2 className="text-primary mt-5">JUSTICIA PARA TODOS</h2>
                        <hr />
                    </div>
                    <div className="col-md-6">
                        <img id="initialImg" src={initialImg} alt="Shake Hands" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div id="BannerStatistics" className="container">
                <h2 className="text-center mb-5 mt-5 text-primary">¡NUESTRAS ESTADÍSTICAS!</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                    <div className="col mt-5">
                        <div className="card h-100 card-hover shadow" onMouseOver={(e) => e.currentTarget.classList.add('shadow-lg')} onMouseOut={(e) => e.currentTarget.classList.remove('shadow-lg')}>
                            <div className="card-body text-center">
                                <h3 className="card-title">+10.000</h3>
                                <p className="card-text">DESCARGAS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-5">
                        <div className="card h-100 card-hover shadow" onMouseOver={(e) => e.currentTarget.classList.add('shadow-lg')} onMouseOut={(e) => e.currentTarget.classList.remove('shadow-lg')}>
                            <div className="card-body text-center">
                                <h3 className="card-title">+100</h3>
                                <p className="card-text">LIBROS</p>
                            </div>
                        </div>
                    </div>
                    <div className="col mt-5">
                        <div className="card h-100 card-hover shadow" onMouseOver={(e) => e.currentTarget.classList.add('shadow-lg')} onMouseOut={(e) => e.currentTarget.classList.remove('shadow-lg')}>
                            <div className="card-body text-center">
                                <h3 className="card-title">+7000</h3>
                                <p className="card-text">USUARIOS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="WCU" className="container-fluid my-5">
                <div className="row align-items-center">
                    <div className="col-md-6 p-0">
                        <img src={computer} alt="computer" className="img-fluid w-100" />
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-primary mb-5'>¿POR QUE NOSOTROS?</h2>
                        <p className='text-dark'>
                            En Abogadocs podras descargar documentos jurídicos de forma rápida y en distintos formatos para modificarlos fácilmente. La descarga es segura y rápida, por lo que obtendras los documentos al instante.
                        </p>
                    </div>
                </div>
            </div>
            <div id="BannerCustomers" className="container my-5">
                <h1 className="text-center mb-5">CONOCE A NUESTROS CLIENTES</h1>
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm">
                            <img src={customer1} className="card-img-top" alt="Emily" />
                            <div className="card-body text-center">
                                <h3 className="card-title">Emily</h3>
                                <p className="card-text">
                                    "Me sorprendió gratamente lo fácil que fue encontrar y descargar los documentos jurídicos que necesitaba en esta plataforma."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm">
                            <img src={customer2} className="card-img-top" alt="David" />
                            <div className="card-body text-center">
                                <h3 className="card-title">David</h3>
                                <p className="card-text">
                                    "Recomiendo encarecidamente esta plataforma a cualquiera que busque documentos jurídicos de alta calidad."
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card shadow-sm">
                            <img src={customer3} className="card-img-top" alt="Sarah" />
                            <div className="card-body text-center">
                                <h3 className="card-title">Sarah</h3>
                                <p className="card-text">
                                    "No se mucho de terminología jurídica, me preocupaba que encontrar y descargar los documentos necesarios fuera un dolor de cabeza."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoHome;