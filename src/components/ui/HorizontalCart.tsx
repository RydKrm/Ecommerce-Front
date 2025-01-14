import React from "react";
import Button from "./Button";

interface CartProps {
  info: {
    image: string;
    text: string;
    buttonText: string;
  };
  color?: string;
}

const HorizontalCart: React.FC<CartProps> = ({ info }) => {
  return (
    <div className="relative w-80 h-44 rounded-xl mb-3 me-8">
      <img
        className="h-full w-full rounded-xl absolute z-10"
        src={info.image}
        alt="image here"
        height={1000}
        width={1000}
      />
      <h2 className="absolute top-10 right-10 w-48 z-20 text-right text-bold text-base">
        {info.text}
      </h2>
      <Button
        className="absolute top-24 right-10 z-20 font-semibold text-xs text-white flex flex-row content-center items-center gap-x-2"
        size="sm">
        {/* <GoArrowRight /> */}
        {info.buttonText}
      </Button>
    </div>
  );
};

export default HorizontalCart;
