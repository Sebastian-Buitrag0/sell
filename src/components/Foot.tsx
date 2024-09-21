import React from 'react';

const Foot: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Foot;