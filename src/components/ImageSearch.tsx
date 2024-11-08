import { useImageContext } from '../context/SearchContext';
import { FaSearch } from 'react-icons/fa'; // ou substitua por outro ícone, se necessário

export const ImageSearch = () => {
  const { searchQuery, setSearchQuery, setPage } = useImageContext();

  // Tipando o evento corretamente como React.ChangeEvent<HTMLInputElement>
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1); // Reseta para a primeira página ao realizar uma nova busca
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Buscar por autor ou ID..."
          className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <FaSearch 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20} 
        />
      </div>
    </div>
  );
};
