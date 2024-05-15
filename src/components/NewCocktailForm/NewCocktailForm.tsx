import { FieldValues, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import TextTitle from '../TextTitle';
import FormTextField from './FormTextField';

function NewCocktailForm({
  onNewCocktailChange,
}: {
  onNewCocktailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues) => {
    console.log(data);
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
          <FormTextField
            label='Thumbnail'
            name='thumbnail'
            type='file'
            register={register}
            errors={errors}
            onChange={() => {}}
          />
          <FormTextField
            label='Name'
            name='name'
            type='text'
            placeholder='Name'
            register={register}
            errors={errors}
            onChange={onNewCocktailChange}
            value=''
          />
          <FormTextField
            label='Category'
            name='category'
            type='text'
            placeholder='Cocktail'
            register={register}
            errors={errors}
            onChange={() => {}}
            value=''
          />

          <FormTextField
            label='Alcoholic'
            name='alcoholic'
            type='text'
            placeholder='Alcoholic'
            register={register}
            errors={errors}
            onChange={() => {}}
            value=''
          />

          <FormTextField
            label='Glass'
            name='glass'
            type='text'
            placeholder='Glass'
            register={register}
            errors={errors}
            onChange={() => {}}
            value=''
          />

          <FormTextField
            label='Instructions'
            name='instructions'
            type='text'
            placeholder='Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.'
            register={register}
            errors={errors}
            onChange={() => {}}
            value=''
          />
          <FormTextField
            label='Ingredients'
            name='ingredients'
            type='text'
            placeholder='Gin;Grand Marnier;Lemon Juice;Grenadine'
            register={register}
            errors={errors}
            onChange={() => {}}
            value=''
          />
          <FormTextField
            label='Measures'
            name='measures'
            type='text'
            placeholder='1 3/4 shot;1 shot;1/4 Shot;1/8 Shot'
            register={register}
            errors={errors}
            onChange={() => {}}
            value=''
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

interface NewCocktailFormProps {
  onNewCocktailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default NewCocktailForm;
