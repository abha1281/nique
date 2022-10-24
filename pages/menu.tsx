import React, { useState } from "react";
import CustomLink from "../components/globals/atoms/CustomLink";
import { motion } from "framer-motion";
import Section from "../components/menu/Section";
import Footer from "../components/layout/Footer";

type Props = {};

const options = ["starter", "lunch", "dinner", "wine", "drinks"];

const currentMenu = [
  {
    name: "starter",
    options: [
      {
        name: "Tomato Toast",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 29,
        discount: undefined,
        special: true,
        recommended: false,
      },
      {
        name: "Tomato Toast",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: 8,
        special: false,
        recommended: false,
      },
      {
        name: "Tomato Toast",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: undefined,
        special: false,
        recommended: true,
      },
    ],
  },
  {
    name: "breakfast",
    options: [
      {
        name: "Delicious Pancakes",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 8,
        discount: 5,
        special: true,
        recommended: false,
      },
      {
        name: "Sweet Heaven",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
      },
      {
        name: "Oatmeal Spirit",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: undefined,
        special: false,
        recommended: true,
      },
      {
        image: "/menu.png",
        name: "Avocado Smash",
        price: 5,
        discount: undefined,
        special: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
        recommended: false,
      },
    ],
  },
  {
    name: "lunch",
    options: [
      {
        name: "Delicious Pancakes",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 8,
        discount: 5,
        special: true,
        recommended: false,
      },
      {
        name: "Sweet Heaven",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
      },
      {
        name: "Oatmeal Spirit",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: undefined,
        special: false,
        recommended: true,
      },
      {
        image: "/menu.png",
        name: "Avocado Smash",
        price: 5,
        discount: undefined,
        special: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
        recommended: false,
      },
    ],
  },
  {
    name: "dinner",
    options: [
      {
        name: "Delicious Pancakes",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 8,
        discount: 5,
        special: true,
        recommended: false,
      },
      {
        name: "Sweet Heaven",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
      },
      {
        name: "Oatmeal Spirit",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/menu.png",
        price: 5,
        discount: undefined,
        special: false,
        recommended: true,
      },
      {
        image: "/menu.png",
        name: "Avocado Smash",
        description: "Lorem ipsum dolor sit amet, consectetur",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
      },
    ],
  },
  {
    name: "wine",
    options: [
      {
        image: "/menu.png",
        name: "Panthouse Tonic",
        special: true,
        price: 8,
        discount: 5,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/menu.png",
        name: "Apple Breeze",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/menu.png",
        name: "Frenchman Blitz",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
  },
  {
    name: "drinks",
    options: [
      {
        image: "/menu.png",
        name: "Panthouse Tonic",
        special: true,
        price: 8,
        discount: 5,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/menu.png",
        name: "Apple Breeze",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/menu.png",
        name: "Frenchman Blitz",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
  },
];

const Menu = (props: Props) => {
  return (
    <div className="w-full">
      <nav className="flex px-8 gap-x-12 w-full justify-evenly py-6 sticky top-0 bg-black/75 backdrop-blur-lg z-50">
        {options.map(option => (
          <CustomLink link={`#${option}`} key={option} className="capitalize">
            {option}
          </CustomLink>
        ))}
      </nav>

      <motion.div
        initial="hidden"
        animate="show"
        className="px-24 pt-20 pb-24 space-y-24"
      >
        {currentMenu.map((type, index) => (
          <Section type={type} key={`section-${index}`} />
        ))}
      </motion.div>
  </div>
  );
};

export default Menu;
