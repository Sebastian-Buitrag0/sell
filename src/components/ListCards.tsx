import React from 'react';
import Card from '../components/Card';

const ListCards: React.FC = () => {
    const cardsData = [
        {
            image: 'https://www.hdcarwallpapers.com/walls/nissan_gt_r_nismo_2015-HD.jpg',
            name: 'Nissan GT-R Nismo',
            description: [
                { feature: 'Motor', value: '3.8L V6 biturbo' },
                { feature: 'Potencia', value: '600 hp (caballos de fuerza)' },
                { feature: 'Transmisión', value: 'Automática de doble embrague de 6 velocidades con modo manual secuencial' },
                { feature: 'Tracción', value: 'Integral (AWD)' },
            ],
            price: 650000000,
            previousPrice: 540000000, // Precio anterior agregado
        },
        {
            image: 'https://www.autocar.co.nz/wp-content/uploads/2022/07/IMAGE_2022-Toyota-Corolla-Cross-International-model-shown-4-edited.jpg',
            name: 'Toyota Corolla Cross',
            description: [
                { feature: 'Motor', value: '1.8L de 4 cilindros en línea, o en versiones híbridas con un motor de 1.8L + motor eléctrico' },
                { feature: 'Potencia', value: '138 hp (gasolina), 122 hp (híbrido)' },
                { feature: 'Transmisión', value: 'Automática CVT (Transmisión variable continua)' },
                { feature: 'Tracción', value: 'FWD (delantera) o AWD (tracción total en algunas versiones)' },
            ],
            price: 180000000,// Precio anterior agregado
        },
        {
            image: 'https://images.kavak.services/images/28711/renault-duster-dynamique2013-frontal-lateral-piloto-lejana-1606929386991.jpg',
            name: 'Renault Duster',
            description: [
                { feature: 'Motor', value: 'Dependiendo del mercado, puede variar. Se ofrecen versiones con motor 1.6L de 4 cilindros (115 hp) y motor 1.3L turbo de 4 cilindros (154 hp)' },
                { feature: 'Transmisión', value: 'Manual de 5 o 6 velocidades, o automática CVT' },
                { feature: 'Tracción', value: 'FWD (tracción delantera) o AWD (tracción total en algunas versiones)' },
            ],
            price: 90000000,
            previousPrice: 84000000, // Precio anterior agregado
        },
        // Agrega más objetos de datos de tarjeta según sea necesario
    ];

    return (
        <div className="flex flex-wrap space-x-4">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    image={card.image}
                    name={card.name}
                    description={card.description}
                    price={card.price}
                    previousPrice={card.previousPrice} // Pasar el precio anterior
                />
            ))}
        </div>
    );
};

export default ListCards;
