import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda
    console.log('Buscando:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-white bg-gray-800 rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    </form>
  );
};

export default SearchBar;

