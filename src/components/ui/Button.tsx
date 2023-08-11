import React from "react";
interface ButtonProps {
  children: string;
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  clickHandler: () => void;
}

const Button = ({
  children,
  className,
  dataTestId,
  disabled = false,
  clickHandler,
}: ButtonProps) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={clickHandler}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
