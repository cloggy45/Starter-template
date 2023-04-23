import { MouseEventHandler } from "react";

type ButtonSize = "sm" | "default" | "md" | "lg" | "xl";
type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  size: ButtonSize;
  label: string;
  handleClick: MouseEventHandler;
};

export function Button({
  size = "default",
  variant = "primary",
  label,
  handleClick,
}: ButtonProps) {
  let buttonStyles: string = "";

  switch (variant) {
    case "primary":
      buttonStyles +=
        "text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg";
      break;
    case "secondary":
      buttonStyles +=
        "text-gray-700 border rounded-lg duration-100 hover:border-indigo-600 active:shadow-lg";
      break;
  }

  switch (size) {
    case "sm":
      buttonStyles += " px-3 py-1.5 ";
      break;
    case "md":
      buttonStyles += " px-5 py-3 ";
      break;
    case "lg":
      buttonStyles = " px-6 py-3.5 ";
      break;
    case "xl":
      buttonStyles = " px-7 py-4 ";
      break;
    default:
      buttonStyles = " px-4 py-2 ";
  }

  return (
    <button onClick={handleClick} className={buttonStyles}>
      {label}
    </button>
  );
}
