interface InputProps {
  id?: string;
  type: string;
  placeholder: string;
  dataTestId?: string;
  className?: string;
  onChangeHandler: () => void;
}

const Input = ({
  id,
  type,
  placeholder,
  dataTestId,
  className,
  onChangeHandler,
}: InputProps) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      data-testid={dataTestId}
      onChange={onChangeHandler}
    />
  );
};

export default Input;
