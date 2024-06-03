export interface ICheckboxProps {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
  errorMessage?: string;
}
