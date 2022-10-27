import type { NextPage } from "next";
import Image from "next/image";
import Nav from "../components/globals/molecules/Nav";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      translateY: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, translateY: -20 },
    show: { opacity: 1, translateY: 0 },
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image
        src="/main.png"
        layout="fill"
        objectFit="cover"
        alt="main_cover"
        className="z-10"
      />
      <div className="bg-black/50 absolute inset-0 z-10" />
      <h2 className="absolute font-medium text-center w-full top-[5%] text-white text-[32px] leading-7 z-20">
        nique.
      </h2>
      <div className="absolute bottom-[30%] flex w-full justify-center z-20">
        <div className=" space-y-8 text-white">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center max-w-[685px]"
          >
            <motion.p variants={item} className="font-Bitter-Rose text-[80px] text-[#FACE8D]">
              The pure taste of
            </motion.p>
            <motion.h1 variants={item} className="font-medium text-[160px] leading-[144px]">
              Thailand
            </motion.h1>
          </motion.div>
          <motion.p className="text-2xl text-center max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </motion.p>
        </div>
      </div>
      <div className="absolute bottom-[5%] inset-x-0 z-20">
        <Nav />
      </div>
    </div>
  );
};

export default Home;
