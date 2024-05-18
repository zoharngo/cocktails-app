import { FieldValues, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import TextTitle from '../TextTitle';
import FormTextField from './FormTextField';
import { useContext } from 'react';
import cocktailsContext from '../../contexts/CocktailsContext';
import { Cocktail } from '../../common/types/cocktail';

function NewCocktailForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addNewCocktail } = useContext(cocktailsContext);

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
    const uuid = Math.random().toString(36).substring(7);
    const thumbnail = data.thumbnail as FileList;
    const newCocktail: Cocktail = {
      id: uuid,
      name: data.name,
      category: data.category,
      alcoholic: data.alcoholic,
      glass: data.glass,
      ingredients: data.ingredients.split(';') || [],
      instructions: data.instructions,
      measures: data.measures?.split(';') || [],
      thumbnail: thumbnail[0]?.name || 'https://via.placeholder.com/150',
    };
    addNewCocktail(newCocktail);
    //reset();
    //alert('Cocktail added successfully');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBlock: '50px',
      }}
    >
      <TextTitle name='New Cocktail' />

      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '15px',
            maxWidth: '700px',
          }}
        >
          <FormTextField label='Thumbnail' name='thumbnail' type='file' register={register} errors={errors} />
          <FormTextField
            label='Name'
            name='name'
            type='text'
            placeholder='Name'
            register={register}
            errors={errors}
            required
          />
          <FormTextField
            label='Category'
            name='category'
            type='text'
            placeholder='Cocktail'
            register={register}
            errors={errors}
            required
          />
          <FormTextField
            label='Alcoholic'
            name='alcoholic'
            type='text'
            placeholder='Alcoholic'
            register={register}
            errors={errors}
            required
          />
          <FormTextField
            label='Glass'
            name='glass'
            type='text'
            placeholder='Glass'
            register={register}
            errors={errors}
            required
          />
          <FormTextField
            label='Instructions'
            name='instructions'
            type='text'
            placeholder='Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.'
            register={register}
            errors={errors}
            required
          />
          <FormTextField
            label='Ingredients'
            name='ingredients'
            type='text'
            placeholder='Gin;Grand Marnier;Lemon Juice;Grenadine'
            register={register}
            errors={errors}
            required
          />
          <FormTextField
            label='Measures'
            name='measures'
            type='text'
            placeholder='1 3/4 shot;1 shot;1/4 Shot;1/8 Shot'
            register={register}
            errors={errors}
          />
        </div>

        <button
          style={{
            width: '300px',
            padding: '10px',
            fontSize: '1em',
            border: '1px solid #ccc',
            boxShadow: '1px 1px 1px #999',
            boxSizing: 'border-box',
            borderRadius: '5px',
            backgroundColor: '#f1356d',
            color: 'white',
            cursor: 'pointer',
          }}
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewCocktailForm;
