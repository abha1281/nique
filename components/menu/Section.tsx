import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  type: {
    name: string;
    options: {
      recommended: boolean;
      image: string;
      name: string;
      description: string;
      discount?: number;
      price: number;
      special: boolean;
    }[];
  };
};

const Section = ({ type }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    });
  };

  const animations = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: isInView ? 1 : 0,
    },
    transition: {
        duration: 1
    }
  };

  return (
    <motion.section
      ref={ref}
      {...animations}
      id={type.name}
      className="space-y-8 scroll-my-20"
    >
      <h3 className="text-[64px] font-Bitter-Rose text-[#FACE8D] px-1 capitalize">
        {type.name}
      </h3>
      <div className="space-y-4">
        {type.options.map((option, optionIndex) => (
          <div
            key={`dish-${optionIndex}-${type.name}`}
            className={`relative p-4 rounded-2xl flex items-center justify-between ${
              option.recommended ? "ring-1 ring-[#FACE8D]" : ""
            }`}
          >
            {option.recommended && (
              <p className="absolute -top-6 right-6 bg-[#FACE8D] z-10 py-2 px-3 rounded-md text-black">
                <span className="capitalize">{type.name}</span> of the day
              </p>
            )}
            <div className="flex gap-x-6">
              <Image
                src={option.image}
                alt={option.name}
                width={90}
                height={72}
                objectFit="cover"
              />
              <div className="space-y-1">
                <div className="flex gap-x-4 items-center">
                  <p className="text-xl">{option.name}</p>
                  {option.special && <Image
                    src="/leaf.svg"
                    width={16}
                    height={16}
                    objectFit="cover"
                    alt="leaf"
                  />}
                </div>
                <p className="opacity-60">{option.description}</p>
              </div>
            </div>
            <div className="text-xl flex gap-x-2">
              <p className={option.discount ? "line-through opacity-60" : ""}>
                {formatCurrency(option.price)}
              </p>
              {option.discount && <p>{formatCurrency(option.discount)}</p>}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Section;
