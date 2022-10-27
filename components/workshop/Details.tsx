import Image from "next/image";
import React from "react";

type Props = {
  details: {
    date: {
      date: string;
      time: string;
    };
    teacher: {
      avatar_url: string;
      name: string;
      bio: string;
      links: {
        name: string;
        link: string;
      }[];
    };
    language: string;
    location: {
      building: string;
      street: string;
      city: string;
    };
  };
};

const Details = ({ details }: Props) => {
  const { date, teacher, language, location } = details;
  return (
    <div className="space-y-2">
      <h3 className="font-Bitter-Rose text-[#FACE8D] text-[64px]">Details</h3>
      <div className="divide-y divide-white divide-opacity-10">
        <div className="flex justify-between py-6">
          <p className="text-xl font-medium">Date</p>
          <p className="text-lg opacity-80">
            {date.date} {date.time}
          </p>
        </div>
        <div className="flex justify-between py-6">
          <p className="text-xl font-medium">Teacher</p>
          <div className="flex items-center gap-x-4">
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src={teacher.avatar_url}
              alt={teacher.name}
              objectFit="cover"
            />
            <p className="text-lg opacity-80">{teacher.name}</p>
          </div>
        </div>
        <div className="flex justify-between py-6">
          <p className="text-xl font-medium">Language</p>
          <p className="text-lg opacity-80">{language}</p>
        </div>
        <div className="flex justify-between py-6">
          <p className="text-xl font-medium">Date</p>
          <p className="text-lg opacity-80 text-right">
            {location.building}
            <br />
            {location.street}
            <br />
            {location.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
