import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit} data-testid="form-login">
            <div>
                <label htmlFor="usuario">Usuario:</label>
                <input
                    id="usuario"
                    name="usuario"
                    type="text"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                    data-testid="input-usuario"
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
                    data-testid="input-contrasena"
                />
            </div>
            <button
                type="submit"
                data-testid="btn-login"
                disabled={!usuario || !contrasena}
            >
                Login
            </button>
        </form>
    );
};

export default FormularioLogin;