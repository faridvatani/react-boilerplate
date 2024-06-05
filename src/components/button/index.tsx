import IButton from './button.type';
import StyledButton from './button.style.tsx';

const Button = ({
  title = 'click me',
  onClick,
  isLoading,
  style = {},
  rounded = false,
}: IButton) => {
  return (
    <StyledButton
      disabled={isLoading}
      onClick={onClick}
      style={{
        ...style,
        borderRadius: rounded ? '1rem' : '0rem',
      }}
    >
      {isLoading ? 'loading...' : title}
    </StyledButton>
  );
};

export default Button;
