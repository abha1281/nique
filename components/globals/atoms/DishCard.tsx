import Image from "next/image";
import React from "react";

type Props = {
  dish: {
    image: string;
    name: string;
    description: string;
    special?: boolean;
  };
};

const DishCard = ({ dish }: Props) => {
  const { image, name, description, special } = dish;
  return (
    <div className="flex gap-x-6">
      <Image
        src={image}
        alt={name}
        width={90}
        height={72}
        objectFit="cover"
        className="rounded-xl"
      />
      <div className="space-y-1">
        <div className="flex gap-x-4 items-center">
          <p className="text-xl">{name}</p>
          {special && (
            <Image
              src="/leaf.svg"
              width={16}
              height={16}
              objectFit="cover"
              alt="leaf"
            />
          )}
        </div>
        <p className="opacity-60">{description}</p>
      </div>
    </div>
  );
};

export default DishCard;
