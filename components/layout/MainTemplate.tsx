import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Meta from "./Meta";
import TemplateTwo from "./templates/TemplateTwo";

type Props = {
  children: React.ReactNode;
};

const lookup = {
  menu: {
    h2: "Check Out",
    h1: "Our Menus",
    background: "/menu.png",
  },
  reservation: {
    h2: "Book a table",
    h1: "Reservation",
    background: "/reservation.png",
  },
  workshop: {
    h2: "Shop",
    h1: "Delicious Breakfast",
    background: "/workshop.png",
  },
  blog: {
    h2: "Blog",
    h1: "Latest News",
    background: "/blog.png",
  },
};

const MainTemplate = ({ children }: Props) => {
  const router = useRouter();
  const [useTemp2, setUseTemp2] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    let pageName = router.asPath.split("/")[1].split("#")[0];
    let pageNames = Object.keys(lookup);

    if (pageNames.includes(pageName)) {
      setUseTemp2(true);
      setActivePage(pageName);
      return;
    }
    setUseTemp2(false);
  }, [router]);
  return (
    <>
      <Meta />
      {useTemp2 ? (
        <TemplateTwo details={lookup[activePage as keyof typeof lookup]}>
          {children}
        </TemplateTwo>
      ) : (
        <main className="bg-black text-white min-h-screen">{children}</main>
      )}
    </>
  );
};

export default MainTemplate;
