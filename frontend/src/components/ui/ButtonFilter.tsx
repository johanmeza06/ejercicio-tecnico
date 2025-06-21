import React from "react";
import Button from "devextreme-react/button";

interface FilterButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonFilter: React.FC<FilterButtonProps> = ({
  text = "Buscar",
  onClick,
  disabled = false,
}) => {
  return (
    <Button
      text={text}
      onClick={onClick}
      disabled={disabled}
      type="default"
      stylingMode="contained"
      width={150}
      useSubmitBehavior={true}
    />
  );
};

export default ButtonFilter;
