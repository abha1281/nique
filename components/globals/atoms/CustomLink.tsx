import React from "react";
import Link from "next/link";

type Props = {
  link: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  onClick?: () => void;
};

const CustomLink = ({
  link,
  children,
  className = "",
  target = "",
  onClick,
}: Props) => {
  return (
    <Link href={link}>
      <a href={link} className={className} target={target} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
