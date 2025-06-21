import React from "react";
import { Controller, Control } from "react-hook-form";
import TextBox from "devextreme-react/text-box";

interface InputFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  label,
  placeholder = "Buscar...",
  disabled = false,
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-gray-700 text-md font-medium mb-3"
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="relative">
            <TextBox
              value={field.value ?? ""}
              onValueChanged={(e) => field.onChange(e.value)}
              placeholder={placeholder}
              disabled={disabled}
              showClearButton={true}
              inputAttr={{ "aria-label": label || name }}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-800 transition-colors bg-white text-gray-700 placeholder-gray-400 disabled:bg-blue-50 disabled:cursor-not-allowed"
            />
            {fieldState.error && (
              <span className="text-xs text-red-500 mt-1 block">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default InputField;
