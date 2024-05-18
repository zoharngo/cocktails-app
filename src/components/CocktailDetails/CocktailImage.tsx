function CocktailImage({ imgSrc, alt }: { imgSrc: string; alt: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        height: 'auto',
      }}
    >
      <img
        style={{
          objectFit: 'cover',
          borderRadius: '5px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.8)',
        }}
        src={imgSrc}
        alt={alt}
      />
    </div>
  );
}

export default CocktailImage;
