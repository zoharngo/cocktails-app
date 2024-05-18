import { Cocktail } from '../../common/types/cocktail';
import CocktailDetailItem from './CocktailDetailItem';
import CocktailImage from './CocktailImage';
import CocktailIngredients from './CocktailIngredients';
import CocktailInstructions from './CocktailInstructions';
import TextTitle from '../TextTitle';
import CocktailRowWrapper from './CocktailRowWrapper';

function CocktailDetails({ cocktail }: CocktailDetailsProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <TextTitle name={cocktail.name} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '20px',
          marginBlockEnd: '20px',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <CocktailImage imgSrc={cocktail.thumbnail} alt={cocktail.name} />
          <CocktailRowWrapper flexDirection='column'>
            <CocktailIngredients ingredients={cocktail.ingredients} measures={cocktail.measures} />
            <CocktailInstructions instructions={cocktail.instructions} />
          </CocktailRowWrapper>
          <CocktailRowWrapper flexDirection='column'>
            <CocktailDetailItem title='Category' value={cocktail.category} />
            <CocktailDetailItem title='Alcoholic' value={cocktail.alcoholic} />
            <CocktailDetailItem title='Glass' value={cocktail.glass} />
          </CocktailRowWrapper>
        </div>
      </div>
    </div>
  );
}

interface CocktailDetailsProps {
  cocktail: Cocktail;
}

export default CocktailDetails;
