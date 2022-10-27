import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const TemplateOne = ({ children }: Props) => {
  return (
    <div className="bg-black">
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "easeOut", duration: 1 }}
        className=" min-h-screen"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default TemplateOne;
