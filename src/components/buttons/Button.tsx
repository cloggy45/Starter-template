import { MouseEventHandler } from "react";

type ButtonVariant = "sm" | "default" | "md" | "lg" | "xl";
type ButtonProps = {
  variant: ButtonVariant;
  label: string;
  handleClick: MouseEventHandler;
};

export function Button({ variant, label, handleClick }: ButtonProps) {
  let buttonStyles: string;
  const commonClasses =
    "text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg";

  switch (variant) {
    case "sm":
      buttonStyles = "px-3 py-1.5 " + commonClasses;
      break;
    case "md":
      buttonStyles = "px-5 py-3 " + commonClasses;
      break;
    case "lg":
      buttonStyles = "px-6 py-3.5 " + commonClasses;
      break;
    case "xl":
      buttonStyles = "px-7 py-4 " + commonClasses;
      break;
    default:
      buttonStyles = "px-4 py-2 " + commonClasses;
  }

  return (
    <button onClick={handleClick} className={buttonStyles}>
      {label}
    </button>
  );
}
