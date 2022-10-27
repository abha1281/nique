import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomLink from "../../globals/atoms/CustomLink";
import Nav from "../../globals/molecules/Nav";
import Footer from "../Footer";

type Details = {
  h1: string;
  h2: string;
  background: string;
};

type Props = {
  children: React.ReactNode;
  details: Details;
};

const variants = {
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  in: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const opacity = {
  inactive: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const workshops = {
  delicious_breakfast: {
    h1: "Delicious Breakfast",
    h2: "Asian",
    background: "/dishes/delicious_pancakes.jpg",
  },
  coffee_time: {
    h1: "Coffee Time",
    h2: "Breakfast",
    background: "/dishes/coffee_time.jpg",
  },
  vegan_burger: {
    h1: "Vegan Burger",
    h2: "Vegan",
    background: "/dishes/vegan_burger.jpg",
  },
  salad_style: {
    h1: "",
    h2: "Italian",
    dish: "Salad Style",
    background: "/dishes/salad_style.jpg",
  },
  homemade_honey: {
    h1: "Homemade Honey",
    h2: "Italian",
    background: "/dishes/homemade_honey.jpg",
  },
};

const TemplateTwo = ({ children, details }: Props) => {
  const router = useRouter();
  const [hideFooter, setHideFooter] = useState(false);
  const [templateDets, setTemplateDets] = useState(details);

  useEffect(() => {
    let pageName = router.asPath.split("/")[1].split("#")[0].split("?")[0];
    setHideFooter(pageName === "reservation");

    pageName === "workshop" && router.query.class &&
    workshops[router.query.class as keyof typeof workshops]
      ? setTemplateDets(workshops[router.query.class as keyof typeof workshops])
      : setTemplateDets(details);
  }, [router]);

  useEffect(() => {
    console.log(templateDets);
  }, [templateDets]);

  return (
    <div className="grid grid-cols-2 bg-black scroll-m-8">
      <AnimatePresence mode='wait'>
        <motion.section
          variants={opacity}
          key={router.asPath}
          initial="in"
          animate="inactive"
          exit="out"
          className="sticky top-0 h-screen overflow-hidden"
        >
          <div className="relative w-full h-screen">
            <Image
              alt="menu"
              priority
              src={templateDets.background}
              layout="fill"
              objectFit="cover"
              className="-z-20"
            />
            <div className="bg-black/50 absolute inset-0 -z-10" />
            <CustomLink
              link="/"
              className="absolute top-[5%] inset-x-0 text-center text-white text-[32px] font-medium leading-7"
            >
              nique.
            </CustomLink>
            <div className="absolute inset-x-0 bottom-[40%] flex flex-col items-center">
              <h2 className="text-[#FACE8D] font-Bitter-Rose text-[80px]">
                {templateDets.h2}
              </h2>
              <h1 className="text-[80px] leading-[80px] font-medium text-white">
                {templateDets.h1}
              </h1>
            </div>
            <div className="absolute bottom-[5%] inset-x-0">
              <Nav />
            </div>
          </div>
        </motion.section>
        <div className="bg-black text-white">
          <motion.main
            variants={variants}
            key={router.asPath}
            initial="in"
            animate="inactive"
            exit="out"
          >
            {children}
          </motion.main>
          {!hideFooter && <Footer />}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default TemplateTwo;
