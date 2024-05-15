import { createContext } from 'react';
import { CocktailsContextType } from '../common/types/cocktail';

const cocktailsContext = createContext<CocktailsContextType>({
  cocktails: [],
  addNewCocktail: () => {},
  setSearchTerm: () => {},
  loading: true,
  selectedCocktail: null,
  setSelectedCocktail: () => {},
  getSelectedCocktail: () => { },
  searchTerm: '',
});

export default cocktailsContext;
