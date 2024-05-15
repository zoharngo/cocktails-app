function CocktailRowWrapper({ children, flexDirection = 'row' }: CocktailRowWrapperProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection,
        gap: '15px',
        flexGrow: 1,
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  );
}

export interface CocktailRowWrapperProps {
  children: React.ReactNode;
  flexDirection?: 'row' | 'column';
}

export default CocktailRowWrapper;
