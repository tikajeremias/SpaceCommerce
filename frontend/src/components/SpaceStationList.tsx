import { MapPin, CreditCard, Rocket } from 'lucide-react'

type SpaceStation = {
  name: string
  coordinates: string
  pricePerNight: number
  features: string[]
  imageUrl: string
}

const spaceStations: SpaceStation[] = [
  {
    name: "Estación Orbital Luna",
    coordinates: "28.5°N, 80.5°W",
    pricePerNight: 10000,
    features: ["Gravedad artificial", "Vista panorámica de la Tierra", "Spa lunar"],
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Estación Marte Rojo",
    coordinates: "4.5°S, 137.4°E",
    pricePerNight: 15000,
    features: ["Jardín botánico marciano", "Simulador de tormentas de arena", "Observatorio"],
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Anillo de Saturno",
    coordinates: "10.2°N, 92.8°E",
    pricePerNight: 20000,
    features: ["Paseos en anillos", "Restaurante giratorio", "Piscina de gravedad cero"],
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
]

export default function SpaceStationList() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Estaciones Espaciales Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaceStations.map((station) => (
          <div key={station.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{station.name}</h2>
              <p className="text-gray-600 flex items-center mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {station.coordinates}
              </p>
            </div>
            <div className="flex-grow p-4">
              <img
                src={station.imageUrl}
                alt={`Vista de ${station.name}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="space-y-2">
                {station.features.map((feature, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <CreditCard className="w-4 h-4 mr-1 text-gray-600" />
                <span className="font-bold text-gray-800">
                  {station.pricePerNight.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })} / noche
                </span>
              </div>
              <button
                className="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-150 ease-in-out"
                onClick={() => alert(`Reservando ${station.name}`)}
              >
                <Rocket className="w-4 h-4 mr-2" />
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}