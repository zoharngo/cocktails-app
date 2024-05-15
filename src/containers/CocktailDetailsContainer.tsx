import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cocktailsContext from '../contexts/CocktailsContext';
import CocktailDetails from '../components/CocktailDetails/CocktailDetails';

function CocktailDetailsContainer() {
  const { id } = useParams<{ id: string }>();
  const { selectedCocktail, loading, getSelectedCocktail, setSelectedCocktail } = useContext(cocktailsContext);

  useEffect(() => {
    id && getSelectedCocktail(id);

    return () => {
      setSelectedCocktail(null);
    };
  }, [id, getSelectedCocktail, setSelectedCocktail]);

  if (loading) {
    return (
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
    );
  }

  return (
    <div
      style={{
        marginBlock: '50px',
      }}
    >
      {selectedCocktail && <CocktailDetails cocktail={selectedCocktail} />}
    </div>
  );
}

export default CocktailDetailsContainer;
