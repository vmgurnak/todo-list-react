interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className = '', type = 'button', children, onClick } = props;

  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
