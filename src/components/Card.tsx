import React from 'react';

interface DescriptionItem {
    feature: string;
    value: string;
}

interface CardProps {
    image: string;
    name: string;
    description: DescriptionItem[];
    price: number;
    previousPrice?: number; // Precio anterior opcional
}

const Card: React.FC<CardProps> = ({ image, name, description, price, previousPrice }) => {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value);
    };

    return (
        <div className="border border-gray-300 rounded-lg p-4 max-w-md text-center shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-2xl mt-4 mb-2 font-semibold">{name}</h2>
            <ul className="text-base text-gray-600 text-left mb-4">
                {previousPrice && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-sm font-bold px-4 py-3 rounded-bl-lg">
                        En oferta
                    </div>
                )}
                {description.map((item, index) => (
                    <li key={index} className="mb-1">
                        <strong>{item.feature}:</strong> {item.value}
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                {previousPrice && (
                    <p className="text-xl text-gray-500 line-through">{formatCurrency(previousPrice)}</p>
                )}
                <p className="text-3xl text-red-600 font-extrabold hover:text-red-700 transition-colors duration-300">{formatCurrency(price)}</p>
            </div>
        </div>
    );
};

export default Card;
