import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import Image from "next/image";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";

type Props = {
  workshops: {
    name: string;
    dish: string;
    date: string;
    image: string;
  }[];
};

const WorkShops = ({ workshops }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 25, mass: 0.42, stiffness: 69 };
  const spring = useSpring(transform, physics);

  useLayoutEffect(() => {
    scrollRef.current && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries));
    ghostRef.current && resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const moveRight = (moveLeft = false) => {
    let width = scrollRef.current
      ? scrollRef.current.offsetWidth / workshops.length
      : 0;

    const mainScroll = document.getElementsByTagName("html")[0]

    console.log(mainScroll.scrollTop, viewportW)
    mainScroll &&
      mainScroll.scrollTo({
        top: mainScroll.scrollTop + (width * 1.75),
        behavior: "smooth",
      });
  };

  return (
    <>
      <div className="fixed inset-x-0 will-change-transform">
        <motion.div
          className="relative h-screen w-max flex items-center"
          ref={scrollRef}
          style={{ x: spring }}
        >
          <div className="flex">
            {workshops.map(workshop => (
              <div
                id={`#${workshop.name}`}
                className="min-w-[33vw] h-screen relative"
                key={workshop.name}
              >
                <Image
                  priority
                  src={workshop.image}
                  alt={workshop.name}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50"
                />
                <div className="leading-10 absolute inset-0 text-center flex flex-col gap-y-2 justify-center max-w-[263px] mx-auto">
                  <h2 className="font-Bitter-Rose text-[64px] text-[#FACE8D] ">
                    {workshop.name}
                  </h2>
                  <h1 className="font-medium text-[40px]">{workshop.dish}</h1>
                  <p className="opacity-80">{workshop.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="w-screen"
      />
      <button
        onClick={() => moveRight()}
        className="fixed inset-y-[47.5%] right-[5%] bg-[#FACE8D] w-[60px] h-[60px] rounded-full"
      >
        <ChevronRightIcon className="w-6 h-6 text-black m-auto" />
      </button>
    </>
  );
};

export default WorkShops;
