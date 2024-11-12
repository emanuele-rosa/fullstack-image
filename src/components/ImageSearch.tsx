import { useImageContext } from '../context/SearchContext';
import { FaSearch } from 'react-icons/fa';
import { useMemo } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: #666;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ImageSearch = () => {
  const { searchQuery, setSearchQuery, setPage, images } = useImageContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const filteredImages = useMemo(() => {
    if (searchQuery === '') {
      return images;
    } else {
      return images.filter(
        (image) =>
          image.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          image.id.toString().includes(searchQuery)
      );
    }
  }, [searchQuery, images]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Buscar por autor ou ID..."
      />
      <SearchButton>
        <FaSearch size={20} />
      </SearchButton>
    </SearchContainer>
  );
};