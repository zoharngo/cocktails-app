function CocktailInstructions({ instructions }: { instructions: string }) {
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
          marginBlockEnd: '10px',
        }}
      >
        Instructions
      </h2>
      <p
        style={{
          lineHeight: '1.5',
          textWrap: 'wrap',
          textAlign: 'justify',
          wordBreak: 'break-word',
          boxShadow: '0 10px 10px rgba(250, 246, 246, 0.1)',
          padding: '10px',
        }}
      >
        {instructions}
      </p>
    </div>
  );
}

export default CocktailInstructions;
