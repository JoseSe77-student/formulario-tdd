import React, { useState } from 'react';
import '../css/FormularioLogin.css';

const FormularioLogin = ({ onLogin }) => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onLogin) {
            onLogin({ usuario, contrasena });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-login">
            <div>
                <label htmlFor="usuario">Usuario:</label>
                <input
                    id="usuario"
                    name="usuario"
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="contrasena">Contraseña:</label>
                <input
                    id="contrasena"
                    name="contrasena"
                    type="password"
                    value={contrasena}
                    onChange={e => setContrasena(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="btn-login"
                disabled={!usuario || !contrasena}
                title={!usuario || !contrasena ? "Por favor, ingrese ambos campos" : ""}
            >
                Login
            </button>
        </form>
    );
};

export default FormularioLogin;
