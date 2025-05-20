import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  fullWidth = false,
}) => {
  // Style maps
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white border-transparent',
    secondary: 'bg-secondary hover:bg-secondary-dark text-primary-dark border-transparent',
    accent: 'bg-accent hover:bg-accent-dark text-white border-transparent',
    outline: 'bg-transparent hover:bg-primary/5 text-primary border-primary',
  };

  const sizeStyles = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-5 text-base',
    lg: 'py-3 px-8 text-lg',
  };

  const baseStyles = `
    inline-flex items-center justify-center rounded-md font-medium 
    transition-colors duration-200 ease-in-out border-2
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50
    disabled:opacity-60 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (href) {
    return (
      <Link to={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;