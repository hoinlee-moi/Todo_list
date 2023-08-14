interface InputProps {
  id?: string;
  type: string;
  placeholder?: string;
  myRef?: React.RefObject<HTMLInputElement>;
  dataTestId?: string;
  className?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  id,
  type,
  placeholder,
  myRef,
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
      ref={myRef}
    />
  );
};

export default Input;
