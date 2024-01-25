import { useState, useEffect } from 'react';
import Menu from './Menu'
import Footer from './Footer'
import Newsletter from './Newsletter';
import '../styles/libros.css'
import bannerLibros from '../media/bannerLibros.png'

const Libros = () => {
    const [books, setBooks] = useState([]); // Estado para almacenar libros
    const [category, setCategory] = useState('history'); // Estado para almacenar la categoría seleccionada
    const categories = ['historia', 'leyes', 'politica']; // Categorías disponibles

    useEffect(() => {
        // Función para obtener libros de una categoría específica
        const displayBooks = async () => {
            try {
                const response = await fetch(`http://openlibrary.org/search.json?q=&subject=${category}`);
                const data = await response.json();
                const filteredBooks = data.docs.filter(book => book.cover_i);
                setBooks(filteredBooks); // Actualizar estado con libros filtrados
            } catch (error) {
                console.error(error);
            }
        };

        displayBooks();
    }, [category]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <header><Menu /></header>
            <div className="container-fluid p-5">
                <div id="mainText" className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <h3 className="text-dark">Abogadocs es tu puente hacia el conocimiento en leyes, política e historia. Descubre, aprende y lidera con cada libro que elijas.
                        </h3>
                        <h2 className="text-primary mt-5">HISTORIA PARA TODOS</h2>
                        <hr />
                    </div>
                    <div className="col-md-6">
                        <img src={bannerLibros} alt="Shake Hands" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="btn-group">
                {categories.map(cat => (
                    <button key={cat} className="btn btn-primary mx-5 mt-5 mb-4 category-button" onClick={() => setCategory(cat)}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>
            {/* Visualización de los libros en tarjetas */}
            <div className="container mt-4">
                <div className="row">
                    {books.map(book => (
                        <div key={book.key} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card h-100" onClick={() => window.open(`https://openlibrary.org${book.key}`)}>
                                <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} className="card-img-top img-fluid fixed-height" alt={book.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p id="publicado" className="card-text">Publicado: {book.first_publish_year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer className="mt-auto">
                <Newsletter />
                <Footer />
            </footer>
        </div>
    );
}

export default Libros;