import { FieldErrors, FieldValues } from 'react-hook-form';

function FormTextField({ label, name, type, value, onChange, placeholder, register, errors }: FormTextFieldProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
      }}
    >
      <label
        style={{
          fontSize: '1.2em',
        }}
        htmlFor={name}
        aria-required='true'
      >
        {label}
      </label>
      <input
        style={{
          padding: '10px',
          fontSize: '1em',
          border: '1px solid #ccc',
          boxShadow: '1px 1px 1px #999',
          boxSizing: 'border-box',
          borderRadius: '5px',
        }}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, { required: true })}
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
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  register: (name: string, options: Record<string, unknown>) => Record<string, unknown>;
  errors: FieldErrors<FieldValues>;
}

export default FormTextField;
