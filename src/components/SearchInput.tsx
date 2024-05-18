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
        width: '50vws',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 0 10px #282c34',
      }}
    >
      <input
        style={{
          width: '100vws',
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
