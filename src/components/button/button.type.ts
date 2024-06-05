export default interface IButton
  extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
  isLoading?: boolean;
  style: object;
  rounded: boolean;
}
