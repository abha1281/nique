import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";
import Meta from "./Meta";
import TemplateOne from "./templates/TemplateOne";
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

const metaLookup = {
  menu: "Our Menus",
  reservation: "Reservation",
  workshop: "Delicious Breakfast",
  blog: "Latest News",
  classes: "Join a Class",
};

const MainTemplate = ({ children }: Props) => {
  const router = useRouter();
  const [useTemp2, setUseTemp2] = useState(false);
  const [activePage, setActivePage] = useState("");

  useLayoutEffect(() => {
    let pageName = router.asPath.split("/")[1].split("#")[0].split("?")[0];
    if (!pageName.includes("#")) {
      let pageNames = Object.keys(lookup);
      setActivePage(pageName);
      if (pageNames.includes(pageName)) {
        setUseTemp2(true);
        return;
      }
      setUseTemp2(false);
    }
  }, [router]);


  return (
    <>
      <Meta
        title={
          activePage
            ? metaLookup[activePage as keyof typeof metaLookup]
            : "nique"
        }
      />
      {useTemp2 ? (
        <TemplateTwo>
          {children}
        </TemplateTwo>
      ) : (
        <TemplateOne>{children}</TemplateOne>
      )}
    </>
  );
};

export default MainTemplate;
