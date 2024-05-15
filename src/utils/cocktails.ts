import { ICocktail } from '../common/types/cocktail';
import { Cocktail } from '../common/types/cocktail';

export function prepareCocktail(drink: ICocktail): Cocktail {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    category: drink.strCategory,
    alcoholic: drink.strAlcoholic,
    glass: drink.strGlass,
    ingredients: [
      drink.strIngredient1,
      drink.strIngredient2,
      drink.strIngredient3,
      drink.strIngredient4,
      drink.strIngredient5,
      drink.strIngredient6,
      drink.strIngredient7,
      drink.strIngredient8,
      drink.strIngredient9,
      drink.strIngredient10,
      drink.strIngredient11,
      drink.strIngredient12,
      drink.strIngredient13,
      drink.strIngredient14,
      drink.strIngredient15,
    ].filter(Boolean),
    instructions: drink.strInstructions,
    measures: [
      drink.strMeasure1,
      drink.strMeasure2,
      drink.strMeasure3,
      drink.strMeasure4,
      drink.strMeasure5,
      drink.strMeasure6,
      drink.strMeasure7,
      drink.strMeasure8,
      drink.strMeasure9,
      drink.strMeasure10,
      drink.strMeasure11,
      drink.strMeasure12,
      drink.strMeasure13,
      drink.strMeasure14,
      drink.strMeasure15,
    ].filter(Boolean),
    thumbnail: drink.strDrinkThumb,
  };
}
