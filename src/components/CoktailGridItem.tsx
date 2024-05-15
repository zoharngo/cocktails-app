import { useNavigate } from 'react-router-dom';
import { CoktailGridItemType } from '../common/types/cocktail';
import './CoktailGridItem.css';
import { useCallback } from 'react';

function CoktailGridItem({ cocktail }: CoktailGridItemProps) {
  const navigate = useNavigate();

  const navigateToCocktailDetails = useCallback(() => {
    navigate(`/cocktails/${cocktail.id}`);
  }, [navigate, cocktail.id]);

  return (
    <div onClick={navigateToCocktailDetails} className='CoktailGridItem'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <img
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '5px',
            marginBottom: '10px',
          }}
          referrerPolicy='no-referrer'
          src={cocktail.thumbnail}
          alt={cocktail.name}
        />
      </div>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.category}</p>
    </div>
  );
}

interface CoktailGridItemProps {
  cocktail: CoktailGridItemType;
}

export default CoktailGridItem;
