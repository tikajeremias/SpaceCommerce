import { MapPin, CreditCard, Rocket } from 'lucide-react'

type Shoes = {
  name: string
  color: string
  price: number
  size: string
  imageUrl: string
}

const Shoes: Shoes[] = [
  {
    name: "Air Jordan 1 Low",
    color: "White and Red",
    price: 239.999,
    size: "Talle 39",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Air Jordan Mid SE",
    color: "White and Brown",
    price: 299.999,
    size: "Talle 42",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Air Jordan 1 SE",
    color: "Black and Red",
    price: 265.000,
    size: "Talle 41",
    imageUrl: "/placeholder.svg?height=200&width=300"
  },
]

export default function ShoesList() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Estaciones Espaciales Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Shoes.map((Shoes) => (
          <div key={Shoes.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{Shoes.name}</h2>
              <p className="text-gray-600 flex items-center mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                {Shoes.color}
              </p>
            </div>
            <div className="flex-grow p-4">
              <img
                src={Shoes.imageUrl}
                alt={`Vista de ${Shoes.name}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="space-y-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {Shoes.size}
                </span>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <CreditCard className="w-4 h-4 mr-1 text-gray-600" />
                <span className="font-bold text-gray-800">
                  {Shoes.price.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' })} / noche
                </span>
              </div>
              <button
                className="bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-150 ease-in-out"
                onClick={() => alert(`Reservando ${Shoes.name}`)}
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