"use client";
import React from "react";
import { FlexCol, FlexRow } from "./container/Container";
import { H1 } from "./text/Heading";

const Hero: React.FC<{ title: string; breadcrumbList: string[] }> = ({
  title,
  breadcrumbList,
}) => {
  return (
    <FlexRow className="hero_bg_image w-full h-56 rounded-xl items-center justify-start ps-16">
      <FlexCol>
        <H1>{title}</H1>
        <FlexRow>
          {/* <FaHome className="text-green-400 mt-1" /> */}
          <a
            className="hover:text-green-300 text-base font-semibold"
            href={`/`}>
            Home
          </a>
          {breadcrumbList.map((item: string) => (
            <a
              href={`${item}`}
              key={item}
              className="capitalize font-semibold hover:text-green-400 text-gray-600">
              {item} <span> {">"}</span>
            </a>
          ))}
        </FlexRow>
      </FlexCol>
    </FlexRow>
  );
};

export default Hero;
