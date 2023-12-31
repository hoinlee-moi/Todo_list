interface InputProps {
  id?: string;
  type: string;
  placeholder?: string;
  myRef?: React.RefObject<HTMLInputElement>;
  dataTestId?: string;
  className?: string;
  defaultChecked?: boolean;
  defaultValue?: string;
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDownHandler?: (e:React.KeyboardEvent) =>void
}

const Input = ({
  id,
  type,
  placeholder,
  myRef,
  dataTestId,
  className,
  onChangeHandler,
  onKeyDownHandler,
  defaultChecked,
  defaultValue,
}: InputProps) => {
  if (type === "checkbox") {
    return (
      <input
        type={type}
        id={id}
        className={className}
        defaultChecked={defaultChecked}
        ref={myRef}
        data-testid={dataTestId}
        onChange={onChangeHandler}
      />
    );
  }
  return (
    <input
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
      data-testid={dataTestId}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      defaultValue={defaultValue}
      ref={myRef}
    />
  );
};

export default Input;
