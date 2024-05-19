import { useCallback } from 'react';

function SearchInput({ searchValue, setSearchValue }: SearchInputProps) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    [setSearchValue]
  );

  return (
    <div
      style={{
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 20px #ccc',
      }}
    >
      <input
        style={{
          minWidth: '300px',
          padding: '10px',
          fontSize: '1.2em',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
        type='text'
        value={searchValue}
        onChange={handleChange}
        placeholder='Search...'
      />
    </div>
  );
}

interface SearchInputProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default SearchInput;
