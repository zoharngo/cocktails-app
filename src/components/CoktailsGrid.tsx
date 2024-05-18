import { CoktailGridItemType } from '../common/types/cocktail';
import CoktailGridItem from './CoktailGridItem';

function CoktailGrid({ coktailGridItems }: CoktailGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
        margin: '0 auto',
        padding: '20px',
        position: 'relative',
        width: 'auto',
      }}
    >
      {coktailGridItems.map((coktailGridItem) => (
        <CoktailGridItem key={coktailGridItem.id} cocktail={coktailGridItem} />
      ))}
    </div>
  );
}

interface CoktailGridProps {
  coktailGridItems: CoktailGridItemType[];
}

export default CoktailGrid;
