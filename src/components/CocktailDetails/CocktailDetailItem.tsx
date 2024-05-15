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
          fontSize: '18px',
          marginBlockEnd: '10px',
          textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: '16px',
          lineHeight: '1.5',
          textWrap: 'wrap',
          textAlign: 'justify',
          wordBreak: 'break-word',
          boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
          padding: '10px',
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default CocktailDetailItem;
