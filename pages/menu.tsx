import React, { useState } from "react";
import Option from "../components/menu/Option";
import Section from "../components/menu/Section";

type Props = {};

const options = ["starter", "breakfast", "lunch", "dinner", "wine", "drinks"];

const currentMenu = [
  {
    name: "starter",
    options: [
      {
        name: "Tomato Toast",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/tomato_toast.jpg",
        price: 29,
        discount: undefined,
        special: true,
        recommended: false,
      },
      {
        name: "Noodle Soup",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/noodle_soup.jpg",
        price: 5,
        discount: 8,
        special: false,
        recommended: false,
      },
      {
        name: "Pumpkin Soup",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/pumpkin_soup.jpg",
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
        image: "/dishes/delicious_pancakes.jpg",
        price: 8,
        discount: 5,
        special: true,
        recommended: false,
      },
      {
        name: "Sweet Heaven",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/sweet_heaven.jpg",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
      },
      {
        name: "Oatmeal Spirit",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/oatmeal_spirit.jpg",
        price: 5,
        discount: undefined,
        special: false,
        recommended: true,
      },
      {
        image: "/dishes/avocado_smash.jpg",
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
        image: "/dishes/pumpkin_soup.jpg",
        price: 8,
        discount: 5,
        special: true,
        recommended: false,
      },
      {
        name: "Sweet Heaven",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/pumpkin_soup.jpg",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
      },
      {
        name: "Oatmeal Spirit",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/pumpkin_soup.jpg",
        price: 5,
        discount: undefined,
        special: false,
        recommended: true,
      },
      {
        image: "/dishes/pumpkin_soup.jpg",
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
        image: "/dishes/pumpkin_soup.jpg",
        price: 8,
        discount: 5,
        special: true,
        recommended: false,
      },
      {
        name: "Sweet Heaven",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/pumpkin_soup.jpg",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
      },
      {
        name: "Oatmeal Spirit",
        description: "Lorem ipsum dolor sit amet, consectetur",
        image: "/dishes/pumpkin_soup.jpg",
        price: 5,
        discount: undefined,
        special: false,
        recommended: true,
      },
      {
        image: "/dishes/pumpkin_soup.jpg",
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
        image: "/dishes/pumpkin_soup.jpg",
        name: "Panthouse Tonic",
        special: true,
        price: 8,
        discount: 5,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/dishes/pumpkin_soup.jpg",
        name: "Apple Breeze",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/dishes/pumpkin_soup.jpg",
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
        image: "/dishes/pumpkin_soup.jpg",
        name: "Panthouse Tonic",
        special: true,
        price: 8,
        discount: 5,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/dishes/pumpkin_soup.jpg",
        name: "Apple Breeze",
        price: 5,
        discount: undefined,
        special: false,
        recommended: false,
        description: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        image: "/dishes/pumpkin_soup.jpg",
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
    <div className="">
      <nav className="px-[168px] sticky top-0 bg-black/75 backdrop-blur-lg z-50">
      <div className="flex px-8  gap-x-12 w-full justify-evenly py-6  text-base">
        {options.map((option, index) => (
          <Option key={option} option={option} />
        ))}
      </div>
    </nav>

      <div className="px-24 pt-20 pb-24 space-y-24">
        {currentMenu.map((type, index) => (
          <Section type={type} key={`section-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
