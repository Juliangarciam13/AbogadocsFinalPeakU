import React, { useState } from 'react';
import '../styles/newsletter.css'

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // manejador del envío del email
        console.log(email);
    };

    return (
        <div className="newsletter-container text-white text-center p-5 bg-primary">
            <h2>Mantente actualizado con las últimas noticias de <span>Abogadocs</span></h2>
            <p>Suscríbete para obtener consejos prácticos de primera categoría para tus problemas legales.</p>
            <form onSubmit={handleSubmit} className="newsletter-form mt-4">
                <div className="input-group mb-3 newsletter-input-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="newsletterConsent" required />
                    <label className="form-check-label" htmlFor="newsletterConsent">
                        Al ingresar tu email, aceptas recibir el boletín de Abogadocs. Puedes darte de baja en cualquier momento.
                    </label>
                </div>
                <button className="btn btn-newsletter" type="submit">Inscribirme</button>
            </form>
        </div>
    );
}

export default Newsletter;