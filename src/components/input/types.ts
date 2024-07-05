export interface InputProps {
  name: string;
  label: string;
  type: "number" | "text" | "email" | "textarea";
  isRequired?: boolean;
}
