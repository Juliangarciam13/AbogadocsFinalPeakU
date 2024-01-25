import '../styles/documentos.css'
import { init as filestackInit } from 'filestack-js'
import Menu from './Menu'
import Footer from './Footer'
import Newsletter from './Newsletter'
import { useState } from 'react'
import bannerDocumentos from '../media/bannerDocumentos.png'

const Documentos = () => {
    // Estado para almacenar los archivos subidos
    const [uploadedFiles, setUploadedFiles] = useState([]);

    // Función para abrir el selector de archivos de Filestack
    const openFilePicker = () => {
        const apiKey = 'AHbyTCki6SU6apvrzsUTIz';
        const client = filestackInit(apiKey);
        const options = {
            disableTransformer: true,
            uploadInBackground: true,
            onFileUploadFinished: (file) => {
                console.log("Archivo subido:", file);
                // Actualizar el estado con el archivo subido
                setUploadedFiles(prevFiles => [...prevFiles, file]);
            }
        };
        client.picker(options).open();
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <header>
                <Menu />
            </header>
            <div className='containerDocuments'>
                <div className="container-fluid p-5">
                    <div id="mainText" className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <h3 className="text-dark me-5 mb-5">Abogadocs es tu espacio personal donde la libertad se encuentra con la seguridad.
                                Sube, almacena y gestiona tus documentos en un solo lugar.
                            </h3>
                            <h2 className="text-primary">DOCUMENTOS 24/7</h2>
                            <hr />
                        </div>
                        <div className="col-md-6">
                            <img src={bannerDocumentos} alt="Shake Hands" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className='btnDocumentos mt-5'>
                    <h3 className='text-dark'>¡Haz click aqui para subir tus archivos!</h3>
                    <button className='mb-5 mt-5' onClick={openFilePicker}>Abrir selector de archivos</button>
                </div>
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {/* Mapeo y renderización de los archivos subidos */}
                        {uploadedFiles.map(file => (
                            <div key={file.handle} className="col mb-5">
                                <div className="card h-100">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{file.filename}</h5>
                                        <button onClick={() => window.location.href = `https://cdn.filestackcontent.com/${file.handle}`} className="btn btn-primary mt-3">
                                            Descargar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <footer className="mt-auto">
                <Newsletter />
                <Footer />
            </footer>
        </div>
    )
}

export default Documentos;