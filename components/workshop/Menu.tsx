import React from "react";
import DishCard from "../globals/atoms/DishCard";

type Props = {
    menu: {
        image: string;
        name: string;
        description: string;
    }[]
};

const Menu = ({ menu }: Props) => {
  return (
    <div className="space-y-8">
      <h3 className="font-Bitter-Rose text-[#FACE8D] text-[64px]">Menu</h3>
      {menu.map(dish => (
        <DishCard key={dish.name} dish={dish} />
      ))}
    </div>
  );
};

export default Menu;
