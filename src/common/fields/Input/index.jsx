'use client'
import { Controller } from "react-hook-form";

const Input = ({
  control,
  name,
  label,
  placeholder,
  type,
  autoComplete,
  rules,
}) => {
  return (
    <>
      <label  className="input-label" htmlFor={name}>{label}</label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => {
          return (
            <>
              <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete || "off"}
                value={field.value || ""}
                className="input-field"
              />
              {fieldState.error && (
                <span className="error-message">
                  {fieldState.error.message}
                </span>
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default Input;
