import Image from "next/image";
import React from "react";
import CustomLink from "../globals/atoms/CustomLink";
import Icon from "../icons/Icon";

type Props = {
  teacher: {
    avatar_url: string;
    name: string;
    bio: string;
    links: {
      name: string;
      link: string;
    }[];
  };
};

const Teacher = ({ teacher }: Props) => {
  return (
    <div className="space-y-8">
      <h3 className="font-Bitter-Rose text-[#FACE8D] text-[64px]">Teacher</h3>
      <div className="flex gap-x-6">
        <div>
          <Image
            className="rounded-full"
            width={90}
            height={90}
            src={teacher.avatar_url}
            alt={teacher.name}
            objectFit="cover"
          />
        </div>
        <div className="">
          <p className="font-medium text-2xl">{teacher.name}</p>
          <p className="mt-1 opacity-80">{teacher.bio}</p>
          <div className="flex gap-x-4 mt-6">
            {teacher.links.map(link => (
              <CustomLink target="_blank" link={link.link} key={link.name}>
                <Icon name={link.name} />
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
