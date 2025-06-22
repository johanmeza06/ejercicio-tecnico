import React from "react";
import { Controller, Control } from "react-hook-form";
import SelectBox from "devextreme-react/select-box";
import Spinner from "./Spinner";

interface SelectInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  dataSource: any[];
  valueExpr?: string;
  displayExpr?: string;
  isLoading?: boolean;
  isError?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  control,
  label,
  placeholder = "Seleccionar...",
  disabled = false,
  dataSource,
  valueExpr = "id",
  displayExpr = "name",
  isLoading = false,
  isError = false,
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
            <SelectBox
              {...field}
              dataSource={dataSource}
              value={field.value || null}
              onValueChanged={(e) => field.onChange(e.value)}
              placeholder={placeholder}
              disabled={isLoading || disabled}
              valueExpr={valueExpr}
              displayExpr={displayExpr}
              showClearButton={true}
              inputAttr={{ "aria-label": label || name }}
              className="w-full pl-3 pr-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-800 transition-colors bg-white text-gray-700 placeholder-gray-400 disabled:bg-blue-50 disabled:cursor-not-allowed"
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10 rounded-lg">
                <Spinner />
              </div>
            )}
            {isError && (
              <span className="text-xs text-red-500 mt-1 block absolute left-[50%] transform -translate-x-1/2">
                Error al cargar los datos
              </span>
            )}
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

export default SelectInput;
