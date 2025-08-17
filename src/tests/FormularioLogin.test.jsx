import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormularioLogin from '../components/FormularioLogin';

describe('FormularioLogin', () => {
    test('El boton login deshabilitado inicialmente', () => {
        render(<FormularioLogin />);
        const loginButton = screen.getByRole('button', { name: /login/i });
        expect(loginButton).toBeDisabled();
    });

    test('El boton login se habilita al ingresar usuario y contraseña', () => {
        render(<FormularioLogin />);
        const usuarioInput = screen.getByLabelText(/usuario/i);
        const passwordInput = screen.getByLabelText(/contraseña/i);
        const loginButton = screen.getByRole('button', { name: /login/i });

        // Simula ingreso de usuario
        fireEvent.change(usuarioInput, { target: { value: 'usuario123' } });
        // Simula ingreso de contraseña
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(loginButton).toBeEnabled();
    });
});