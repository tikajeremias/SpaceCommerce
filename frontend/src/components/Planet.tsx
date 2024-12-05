import { useState } from 'react';
import Earth from '../assets/Earth.webp';
import Jupiter from '../assets/Jupiter.png';
import Mars from '../assets/Mars.webp';
import Mercury from '../assets/Mercury.webp';
import Neptuno from '../assets/Neptuno.webp';
import Pluto from '../assets/Pluto.png';
import Saturn from '../assets/Saturn.webp';
import Uranus from '../assets/Uranus.webp';
import Venus from '../assets/Venus.webp';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export default function Planet() {
    // Array con las imágenes de los planetas
    const planetImages: string[] = [
        Mars, Jupiter, Earth, Mercury, Neptuno, Pluto, Saturn, Uranus, Venus
    ];

    // Array con los nombres de los planetas
    const planetNames: string[] = [
        'Marte', 'Júpiter', 'Tierra', 'Mercurio', 'Neptuno', 'Plutón', 'Saturno', 'Urano', 'Venus'
    ];

    // Estado para manejar el índice de la imagen actual
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // Función para cambiar a la siguiente imagen
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % planetImages.length);
    };

    // Función para cambiar a la imagen anterior
    const previousImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? planetImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-auto h-auto bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
            <h3 className="text-xl font-bold mb-4 text-center">Selecciona tu Destino</h3>
            <div className="relative">
                <img
                    src={planetImages[currentIndex]}
                    alt={`Imagen del planeta ${planetNames[currentIndex]}`}
                    className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute w-full inset-0 flex items-center justify-between">
                    <button onClick={previousImage} className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition" >
                        <MdNavigateBefore />
                    </button>
                    <button onClick={nextImage} className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition" >
                        <MdNavigateNext />
                    </button>
                </div>
            </div>
            <p className="text-center mt-4 text-lg font-semibold">{planetNames[currentIndex]}</p>
        </div>
    );
}
