import { FieldErrors, FieldValues } from 'react-hook-form';

function FormTextField({ label, name, type, placeholder, register, errors, required = false }: FormTextFieldProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
      }}
    >
      <label htmlFor={name} aria-required='true'>
        {label}
      </label>
      <input
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          boxShadow: '0 0 10px #cbd2e0',
          boxSizing: 'border-box',
          borderRadius: '5px',
        }}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {errors[name] && (
        <span
          style={{
            color: 'red',
            fontSize: '0.8em',
          }}
        >
          This field is required
        </span>
      )}
    </div>
  );
}

interface FormTextFieldProps {
  required?: boolean;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  register: (name: string, options: Record<string, unknown>) => Record<string, unknown>;
  errors: FieldErrors<FieldValues>;
}

export default FormTextField;
