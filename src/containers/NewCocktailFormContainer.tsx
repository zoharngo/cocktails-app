import NewCocktailForm from '../components/NewCocktailForm/NewCocktailForm';

import React, { useState, useCallback } from 'react';

function NewCocktailFormContainer() {
  const [newCocktail, setNewCocktail] = useState({});

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange', e.target.name, e.target.value);
    setNewCocktail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  console.log(newCocktail);

  return (
    <>
      <NewCocktailForm onNewCocktailChange={onChange} />
    </>
  );
}

export default NewCocktailFormContainer;
