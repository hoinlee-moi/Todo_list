
interface ButtonProps {
  children: string;
  style?: string;
  disabled?: boolean;
  clickHandle: () => void;
}

const Button = ({
  children,
  style,
  disabled = false,
  clickHandle,
}: ButtonProps) => {
  return (
    <button className={style} disabled={disabled} onClick={clickHandle}>
      {children}
    </button>
  );
};

export default Button;
