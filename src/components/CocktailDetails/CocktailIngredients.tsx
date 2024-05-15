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
        width: '300px',
      }}
    >
      <h2
        style={{
          fontSize: '18px',
          marginBlockEnd: '10px',
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
        }}
      >
        Ingredients
      </h2>
      {ingredients?.map((ingredient, index) => (
        <p
          key={index}
          style={{
            fontSize: '16px',
            lineHeight: '1.5',
            textWrap: 'wrap',
            textAlign: 'justify',
            wordBreak: 'break-word',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
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
