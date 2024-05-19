import { Nullable } from '../../common/types/cocktail';

function CocktailIngredients({
  ingredients,
  measures,
}: {
  ingredients: Nullable<string>[];
  measures: Nullable<string>[];
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        minWidth: '300px',
      }}
    >
      <h2
        style={{
          marginBlockEnd: '10px',
        }}
      >
        Ingredients
      </h2>
      {ingredients?.map((ingredient, index) => (
        <p
          key={index}
          style={{
            lineHeight: '1.5',
            textWrap: 'wrap',
            textAlign: 'justify',
            wordBreak: 'break-word',
            boxShadow: '0 10px 10px rgba(250, 246, 246, 0.1)',
            padding: '10px',
          }}
        >
          {ingredient}
          <span>{measures?.[index] && ` - ${measures[index]}`}</span>
        </p>
      ))}
    </div>
  );
}

export default CocktailIngredients;
