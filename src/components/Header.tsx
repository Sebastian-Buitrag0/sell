import React from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => {
    return (
        <header className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">{title}</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a className="text-white hover:text-gray-300" href="#home">Inicio</a></li>
                        <li><a className="text-white hover:text-gray-300" href="#products">Productos</a></li>
                        <li><a className="text-white hover:text-gray-300" href="#about">Acerca de</a></li>
                        <li><a className="text-white hover:text-gray-300" href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;