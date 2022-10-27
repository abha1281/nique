import React, { useRef } from "react";
import Details from "../components/workshop/Details";
import Menu from "../components/workshop/Menu";
import Teacher from "../components/workshop/Teacher";

type Props = {};

const details = {
  date: {
    date: "June 16, 2023",
    time: " 8:00 PM",
  },
  teacher: {
    avatar_url: "/Shigeru_Miyamoto.jpg",
    name: "Mohamed Shamikh",
    bio: "Notion ga neh Shamikh bio update kohfakaaa. v sad",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/hammadh/",
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/groups/modousers",
      },
      {
        name: "Twitter",
        link: "https://twitter.com/BilalZaidhan",
      },
    ],
  },
  language: "English",
  location: {
    building: "nique.",
    street: "Main Street 16",
    city: "10629 Berlin",
  },
  menu: [
    {
      image: "/dishes/noodle_soup.jpg",
      name: "Noodle Soup",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      image: "/dishes/sea_curry.jpg",
      name: "Sea Curry",
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ],
};

const Workshop = (props: Props) => {
  return (
    <div className="space-y-20 pt-24 pb-20 px-[140px]">
      <div>
        <p className="opacity-80 mb-2">Cooking Class</p>
        <h1 className="font-medium text-[40px] mb-4">Reserve Your Spot</h1>
        <p className="text-lg opacity-80 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          massa id neque aliquam.
        </p>
        <div className="flex gap-x-8 font-medium items-center">
          <button className="text-[#081212] bg-[#F8D49E] px-8 py-[22px] rounded-full">
            Book a Spot
          </button>
          <p className="text-2xl">89€</p>
        </div>
      </div>
      <Details details={details} />
      <Menu menu={details.menu} />
      <Teacher teacher={details.teacher} />
    </div>
  );
};

export default Workshop;
