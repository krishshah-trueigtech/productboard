'use client'
import { Controller } from "react-hook-form";

const Checkbox = ({ control, name, label, rules }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { value, onChange, ...field }, fieldState }) => (
            <>
              <input
                {...field}
                type="checkbox"
                id={name}
                checked={!!value} 
                onChange={(e) => onChange(e.target.checked)} 
                className="w-4 h-4"
              />
               <label htmlFor={name} className="text-sm cursor-pointer select-none">
                {label}
               </label>
            </>
          )}
        />
      </div>
       <Controller
        control={control}
        name={name}
        render={({ fieldState }) => 
          fieldState.error ? <span className="text-red-500 text-xs">{fieldState.error.message}</span> : null
        }
       />
    </div>
  );
};

export default Checkbox;