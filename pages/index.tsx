import type { NextPage } from "next";
import Image from "next/image";
import Nav from "../components/globals/molecules/Nav";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Image src="/main.png" layout="fill" objectFit="cover" alt="main_cover" className="-z-20"/>
      <div className="bg-black/50 absolute inset-0 -z-10" />
      <h2 className="absolute font-medium text-center w-full top-[5%] text-white text-[32px] leading-7">
        nique.
      </h2>
      <div className="absolute bottom-[30%] flex w-full justify-center">
        <div className=" space-y-8 text-white">
          <div className="text-center max-w-[685px]">
            <p className="font-Bitter-Rose text-[80px] text-[#FACE8D]">
              The pure taste of
            </p>
            <h1 className="font-medium text-[160px] leading-[144px]">
              Thailand
            </h1>
          </div>
          <p className="text-2xl text-center max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[5%] inset-x-0">
        <Nav />
      </div>
    </div>
  );
};

export default Home;
