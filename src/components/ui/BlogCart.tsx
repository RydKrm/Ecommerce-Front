import React from "react";
import { FlexRow } from "./container/Container";
import { H2, Paragraph } from "./text/Heading";

interface BlogProps {
  _id: number;
  images: string;
  category: string;
  date: string;
  name: string;
  views: string;
  time: string;
}

const BlogCart: React.FC<{ blog: BlogProps }> = ({ blog }) => {
  return (
    <div className="my-6">
      <img
        className="w-[350px] h-64 rounded-3xl "
        src={blog.images}
        alt="Image here"
      />
      <Paragraph className="text-center mt-5" variant="gray">
        {blog.category}
      </Paragraph>
      <H2 className="text-center">{blog.name}</H2>
      <FlexRow className="justify-center my-1">
        <Paragraph className="text-sm">{blog.date}</Paragraph>
        <Paragraph className="text-sm">{blog.views}</Paragraph>
        <Paragraph className="text-sm">{blog.time}</Paragraph>
      </FlexRow>
    </div>
  );
};

export default BlogCart;
