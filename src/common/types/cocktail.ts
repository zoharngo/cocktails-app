export type Nullable<T> = T | null;

export interface ICocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strIngredient1: Nullable<string>;
  strIngredient2: Nullable<string>;
  strIngredient3: Nullable<string>;
  strIngredient4: Nullable<string>;
  strIngredient5: Nullable<string>;
  strIngredient6: Nullable<string>;
  strIngredient7: Nullable<string>;
  strIngredient8: Nullable<string>;
  strIngredient9: Nullable<string>;
  strIngredient10: Nullable<string>;
  strIngredient11: Nullable<string>;
  strIngredient12: Nullable<string>;
  strIngredient13: Nullable<string>;
  strIngredient14: Nullable<string>;
  strIngredient15: Nullable<string>;
  strInstructions: string;
  strMeasure1: Nullable<string>;
  strMeasure2: Nullable<string>;
  strMeasure3: Nullable<string>;
  strMeasure4: Nullable<string>;
  strMeasure5: Nullable<string>;
  strMeasure6: Nullable<string>;
  strMeasure7: Nullable<string>;
  strMeasure8: Nullable<string>;
  strMeasure9: Nullable<string>;
  strMeasure10: Nullable<string>;
  strMeasure11: Nullable<string>;
  strMeasure12: Nullable<string>;
  strMeasure13: Nullable<string>;
  strMeasure14: Nullable<string>;
  strMeasure15: Nullable<string>;
  strDrinkThumb: string;
}

export type Cocktail = {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  ingredients: Nullable<string>[];
  instructions: string;
  measures: Nullable<string>[];
  thumbnail: string;
};

export type CoktailGridItemType = Partial<Cocktail>;

export type CocktailsContextType = {
  cocktails: CoktailGridItemType[];
  addNewCocktail: (cocktail: Cocktail) => void;
  setSearchTerm: (searchTerm: string) => void;
  loading: boolean;
  selectedCocktail: Nullable<Cocktail>;
  setSelectedCocktail: (cocktail: Nullable<Cocktail>) => void;
  getSelectedCocktail: (id: string) => void;
  searchTerm: string;
};
