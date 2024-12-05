import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        fechaIda: '',
        fechaVuelta: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
    };


    return (
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Reserva tu Viaje Interplanetario</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                    Nombre completo
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className='flex flex-row w-full justify-center items-center gap-4 mb-4'>
                <div className="w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaIda">
                        Fecha de ida
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fechaIda"
                        type="date"
                        name="fechaIda"
                        value={formData.fechaIda}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="w-full">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaVuelta">
                        Fecha de vuelta
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fechaVuelta"
                        type="date"
                        name="fechaVuelta"
                        value={formData.fechaVuelta}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Reservar Viaje
                </button>
            </div>
        </form>
    )
}
