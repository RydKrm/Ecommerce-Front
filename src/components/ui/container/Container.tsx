import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  variant?: "default" | "center";
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variantList = {
    default: "container mx-auto",
    center: "flex flex-row items-center justify-center",
  };

  return (
    <div className={`${variantList[variant]} ${className}`}>{children}</div>
  );
};

export default Container;

interface FlexProps {
  children: ReactNode;
  className?: string;
}

export const FlexRow: React.FC<FlexProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col md:flex-row gap-3 ${className}`}>
      {children}
    </div>
  );
};

export const FlexCol: React.FC<FlexProps> = ({ children, className }) => {
  return <div className={`flex flex-col gap-3 ${className}`}>{children}</div>;
};
