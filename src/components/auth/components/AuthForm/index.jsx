"use client";
import { useForm } from "react-hook-form";
import FieldGenerator from "../../../../common/FieldGenerator";

const AuthForm = ({ fields, btnLabel, onSubmit, footerText, footerActionText, onToggle }) => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-primary gap-4">
      <FieldGenerator formFields={fields} control={control} />
      
      <button 
        type="submit" 
        className="btn-primary "
      >
        {btnLabel}
      </button>

      <div className="text-center text-sm mt-2 text-gray-600">
        {footerText}{" "}
        <button
          type="button" 
          onClick={onToggle}
          className="text-primary font-semibold hover:underline hover:text-primary-hover transition"
        >
          {footerActionText}
        </button>
      </div>
    </form>
  );
};
export default AuthForm;