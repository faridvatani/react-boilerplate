import IButton from './button.type';

const Button = (props: IButton) => {
  return <button disabled={props.isLoading}>Click</button>;
};

export default Button;
