type ButtonProps = {
  className: string;
  onClick: () => void;
  type: string;
  text: string;
  style?: React.CSSProperties;
};

const Button = ({ className, onClick, text, style }: ButtonProps) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${className} text-white rounded-full transform transition hover:scale-110 duration-300 ease-in-out z-50`}
    >
      {text}
    </button>
  );
};

export default Button;
