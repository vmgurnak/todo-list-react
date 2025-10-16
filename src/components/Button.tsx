interface ButtonProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className = '', type = 'button', children } = props;

  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
