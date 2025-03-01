import React, { ReactNode } from "react";

const ButtonSize = {
  default: "h-14 px-12 py-5 ",
  cart: "px-5 pt-2",
  sm: "h-7 rounded-md px-3",
  lg: "h-11 rounded-md px-8 ",
  icon: "h-10 w-10",
};

const ButtonVariant = {
  default:
    "bg-primary text-white hover:bg-hover transition-all duration-700 rounded-md mx-auto text-bold text-base hover:-translate-y-2",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  cart: "text-bold bg-green-100 rounded-sm text-green-500 hover:bg-primary hover:text-white transition-all duration-700 hover:translate-y-2",
};

interface ButtonProps {
  children: ReactNode;
  size?: "default" | "cart" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "cart";
  className?: string;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "default",
  variant = "default",
  className = "",
}) => {
  return (
    <button
      className={`${ButtonSize[size]} ${ButtonVariant[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
