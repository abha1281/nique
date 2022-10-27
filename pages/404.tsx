import React from 'react'
import Lottie from "lottie-react";
import animation from "../public/404.json"
import CustomLink from '../components/globals/atoms/CustomLink';

type Props = {}

const PageNotFound = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen relative bg-black">
         <CustomLink
            link="/"
            className="absolute top-[5%] inset-x-0 text-center text-white text-[32px] font-medium leading-7"
          >
            nique.
          </CustomLink>
        <Lottie animationData={animation} loop={true} />
    </div>
  )
}

export default PageNotFound