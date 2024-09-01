import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "hover" | "gray";
}

export const H1: React.FC<HeadingProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`text-5xl font-bold text-gray-700 ${className}`}>
      {children}
    </h1>
  );
};

// * heading 2
export const H2: React.FC<HeadingProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variantList = {
    default: "text-2xl font-bold text-gray-700",
    hover: "my-1 text-gray-500 font-medium hover:text-green-400 ",
    gray: "",
  };
  return (
    <h1 className={`${variantList[variant]}  ${className}`}>{children}</h1>
  );
};

// * paragraph
export const Paragraph: React.FC<HeadingProps> = ({
  children,
  className = "",
  variant = "default",
}) => {
  const variantList = {
    default: "my-1 text-gray-500 font-medium",
    hover: "my-1 text-gray-500 font-medium hover:text-green-400 ",
    gray: "my-1 text-gray-400 font-semibold text-sm",
  };
  return <p className={`${variantList[variant]}  ${className}`}>{children}</p>;
};
