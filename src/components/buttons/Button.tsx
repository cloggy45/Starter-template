import React, { MouseEventHandler } from "react";
import { Spinner } from "@component/Spinner";

type ButtonSize = "sm" | "default" | "md" | "lg" | "xl";
type ButtonVariant = "primary" | "secondary" | "default";

type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  handleClick?: MouseEventHandler;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
};

function getButtonStyles(
  variant: "primary" | "secondary" | "default" | undefined,
  size: "sm" | "default" | "md" | "lg" | "xl" | undefined,
  className: string | undefined
) {
  let buttonStyles: string = "";

  switch (variant) {
    case "default":
      buttonStyles +=
        "bg-indigo-600 rounded-lg font-medium text-white duration-150 hover:bg-indigo-500 active:bg-indigo-600";
      break;
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
      buttonStyles += " px-6 py-3.5 ";
      break;
    case "xl":
      buttonStyles += " px-7 py-4 ";
      break;
    default:
      buttonStyles += " px-4 py-2 ";
  }

  buttonStyles += "inline-flex justify-center items-center " + className;

  return buttonStyles;
}

export function Button({
  size = "default",
  variant = "default",
  type = "submit",
  isLoading = false,
  className,
  label,
  handleClick,
}: ButtonProps) {
  const styles = getButtonStyles(variant, size, className);
  return (
    <button type={type} onClick={handleClick} className={styles}>
      {isLoading ? <Spinner /> : null}
      {label}
    </button>
  );
}
