function CocktailDetailItem({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
      }}
    >
      <h2
        style={{
          marginBlockEnd: '10px',     
        }}
      >
        {title}
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
        {value}
      </p>
    </div>
  );
}

export default CocktailDetailItem;
