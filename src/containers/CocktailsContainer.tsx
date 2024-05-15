import CocktailGrid from '../components/CoktailsGrid';
import { useContext } from 'react';
import CocktailsContext from '../contexts/CocktailsContext';
import SearchInput from '../components/SearchInput';

function CocktailsContainer() {
  const { cocktails, loading, setSearchTerm, searchTerm } = useContext(CocktailsContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBlock: '50px',
      }}
    >
      <SearchInput searchValue={searchTerm} setSearchValue={setSearchTerm} />
      {loading && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          Loading...
        </div>
      )}
      {cocktails && <CocktailGrid coktailGridItems={cocktails} />}
    </div>
  );
}

export default CocktailsContainer;
