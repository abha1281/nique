import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import CustomLink from "../globals/atoms/CustomLink";

type Props = {
  option: string;
};

const Option = ({ option }: Props) => {
  const [isInView, setInView] = useState(false);
  const sectionOption = {
    root: null,
    threshold: 1,
  };
  useEffect(() => {
    const sectionObservers = new IntersectionObserver((entries, sections) => {
      entries.forEach(entry => {
        setInView(entry.isIntersecting);
      });
    }, sectionOption);

    const section = document.getElementById(option);
    section && sectionObservers.observe(section);
  }, []);

  return (
    <CustomLink
      key={option}
      link={`#${option}`}
      className={`capitalize ${
        isInView ? "text-[#FACE8D]" : ""
      } transition-colors`}
    >
      {option}
    </CustomLink>
  );
};

export default Option;
