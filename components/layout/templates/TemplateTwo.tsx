import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomLink from "../../globals/atoms/CustomLink";
import Nav from "../../globals/molecules/Nav";
import Footer from "../Footer";

type Props = {
  children: React.ReactNode;
  details: {
    h1: string;
    h2: string;
    background: string;
  };
};

const TemplateTwo = ({ children, details }: Props) => {
  const router = useRouter();
  const [hideFooter, setHideFooter] = useState(false)
  
  useEffect(() => {
    let pageName = router.asPath.split("/")[1].split("#")[0];
    setHideFooter(pageName === "reservation")
  },[router])

  return (
    <div className="grid grid-cols-2">
      <section className="sticky top-0 w-full h-screen overflow-hidden">
        <div className="relative w-full h-screen">
          <Image
            alt="menu"
            priority
            src={details.background}
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
              {details.h2}
            </h2>
            <h1 className="text-[80px] leading-[80px] font-medium text-white">
              {details.h1}
            </h1>
          </div>
          <div className="absolute bottom-[5%] inset-x-0">
            <Nav />
          </div>
        </div>
      </section>
      <div className="bg-black text-white">
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

export default TemplateTwo;
