import { ClockIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomLink from "../atoms/CustomLink";

const pages = [
  {
    link: "/menu",
    name: "Menu",
  },
  {
    link: "/restaurant",
    name: "Restaurant",
  },
  {
    link: "/classes",
    name: "Classes",
  },
];

const openHours = [
  {
    day: "Mon",
    hours: "closed",
  },
  {
    day: "Tue - Fri",
    hours: "4pm - 8pm",
  },
  {
    day: "Sat- Sun",
    hours: "5pm - 11pm",
  },
];

type Props = {};

const Nav = ({}: Props) => {
  const router = useRouter();
  const [active, setActive] = useState("");
  const [showOpenHours, setShowOpenHours] = useState(false);

  const animations = {
    initial: {
      opacity: 0,
      top: `250%`,
    },
    animate: {
      opacity: 1,
      top: `-250%`,
    },
    exit: {
      opacity: 0,
      top: `250%`,
    },
    transition: {
      type: "spring",
      mass: 0.25,
    },
  };

  return (
    <div className="px-3.5 py-[5px] w-max bg-white text-black rounded-full mx-auto relative">
      <div className="py-1 flex items-center">
        <button
          onClick={() => setShowOpenHours(!showOpenHours)}
          className="w-12 h-12 flex justify-center items-center mr-0.5"
        >
          <ClockIcon className="h-5 w-5 text-black" />
        </button>
        {pages.map((page, index) => (
          <CustomLink
            key={index}
            link={page.link}
            className={`py-3 px-4 font-medium rounded-full  ${
              active === page.link ? "bg-[#F8F8F8]" : "hover:bg-[#F8F8F8]"
            }`}
          >
            {page.name}
          </CustomLink>
        ))}
        <CustomLink
          link="/reservation"
          className="bg-black text-white px-6 py-3 rounded-full ml-0.5 text-sm hover:bg-zinc-900 capitalize"
        >
          BOOK A TABLE
        </CustomLink>
      </div>
      <AnimatePresence>
        {showOpenHours && (
          <motion.div
            {...animations}
            className="px-6 py-4 rounded-xl text-black bg-white sm:w-[250px] space-y-2 absolute"
          >
            <p className="text-lg">Opening Hours</p>
            {openHours.map((hour, index) => (
              <div key={index} className="flex justify-between">
                <p className="font-medium">{hour.day}</p>
                <p>{hour.hours}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
