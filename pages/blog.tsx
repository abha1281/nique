import Image from "next/image";
import React from "react";

type Props = {};

const blogs = [
  {
    date: "September 19, 2022",
    name: "Gatsby Night",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/0.jpeg"
  },
  {
    date: "September 19, 2022",
    name: "Gift Card Standard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/1.jpg"
  },
  {
    date: "September 19, 2022",
    name: "New Restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/2.jpg"
  },
  {
    date: "September 19, 2022",
    name: "Romantic Dinner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/3.jpg"
  },
  {
    date: "September 19, 2022",
    name: "Gift Card Standard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/0.jpeg"
  },
  {
    date: "September 19, 2022",
    name: "Gift Card Standard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/1.jpg"
  },
  {
    date: "September 19, 2022",
    name: "New Restaurant",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/2.jpg"
  },
  {
    date: "September 19, 2022",
    name: "Romantic Dinner",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.",
    image: "/blogs/3.jpg"
  },
];

const Blog = (props: Props) => {
  return (
    <div className="pt-24 px-20 pb-12 space-y-12">
      {blogs.map((blog, index) => (
        <div key={`blog-${index}`} className="flex gap-x-8">
          <div className="w-[280px] h-[210px] relative">
            <Image
              layout="fill"
              objectFit="cover"
              src={blog.image}
              alt={blog.image}
              className="rounded-[10px]"
            />
          </div>
          <div className="py-[30px] max-w-[400px]">
            <p className="text-[#FACE8D]">{blog.date}</p>
            <p className="text-2xl font-medium">{blog.name}</p>
            <p className="mt-2 opacity-60">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
