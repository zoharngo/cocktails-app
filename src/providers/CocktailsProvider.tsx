import { useCallback, useEffect, useRef, useState } from 'react';
import CocktailsContext from '../contexts/CocktailsContext';
import axios from 'axios';
import { CoktailGridItemType, Nullable } from '../common/types/cocktail';
import { Cocktail } from '../common/types/cocktail';
import { debounce } from '../utils/common';
import { prepareCocktail } from '../utils/cocktails';

function CocktailsProvider({ children }: { children: React.ReactNode }) {
  const [cocktails, setCocktails] = useState<Array<CoktailGridItemType>>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState<Nullable<Cocktail>>(null);
  console.log('searchTerm:', searchTerm);
  const searchCocktails = useCallback((searchTerm: string) => {
    console.log('debouncedSearch');
    setLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => {
        const drinks = response.data.drinks;
        if (drinks) {
          const cocktails = drinks.map(prepareCocktail);
          setCocktails(cocktails);
        } else {
          setCocktails([]);
        }
      })
      .catch((error) => {
        console.log(error);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const debouncedSearch = useRef(debounce(searchCocktails, 500));

  useEffect(() => {
    console.log('debouncedSearch', 'searchTerm:', searchTerm);
    searchTerm && debouncedSearch.current(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    console.log('mounted');
    debouncedSearch.current('');
  }, []);

  const getSelectedCocktail = useCallback((id: string) => {
    console.log('getSelectedCocktail', 'id:', id);
    setLoading(true);
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        const drink = response.data.drinks[0];
        const cocktail: Cocktail = prepareCocktail(drink);
        console.log(cocktail);
        setSelectedCocktail(cocktail);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const addNewCocktail = useCallback(
    (cocktail: Cocktail) => {
      setCocktails([...cocktails, cocktail]);
    },
    [cocktails]
  );

  return (
    <CocktailsContext.Provider
      value={{
        cocktails,
        loading,
        setSearchTerm,
        selectedCocktail,
        setSelectedCocktail,
        addNewCocktail,
        getSelectedCocktail,
        searchTerm,
      }}
    >
      {children}
    </CocktailsContext.Provider>
  );
}

export default CocktailsProvider;
