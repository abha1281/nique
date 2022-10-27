import React from "react";
import CustomLink from "../globals/atoms/CustomLink";

type Props = {};

const footerLinks = [
  {
    name: "Pages",
    links: [
      {
        name: "Menu",
        link: "menu",
      },
      {
        name: "Restaurant",
        link: "Restaurant",
      },
      {
        name: "Classes",
        link: "Classes",
      },
      {
        name: "Book a Table",
        link: "reservation",
      },
      {
        name: "Contact",
        link: "contact",
      },
      {
        name: "Blog",
        link: "blog",
      },
      {
        name: "Shop",
        link: "shop",
      },
    ],
  },
  {
    name: "Utility Pages",
    links: [
      {
        name: "Styleguide",
        link: "styleguide",
      },
      {
        name: "Licensing",
        link: "licensing",
      },
      {
        name: "Classes",
        link: "Classes",
      },
      {
        name: "Changelog",
        link: "changelog",
      },
      {
        name: "404 Page",
        link: "404",
      },
      {
        name: "Password Protected",
        link: "password-protected",
      },
      {
        name: "Shop",
        link: "shop",
      },
    ],
  },
];

const Footer = (props: Props) => {
  return (
    <div className="px-24 pb-20 grid grid-cols-3 gap-20">
      <div className="space-y-8">
        <CustomLink link="/" className="text-[32px] leading-7">nique.</CustomLink>
        <p className="opacity-60 text-sm">By Pawel Gola Powered by Webflow</p>
      </div>
      {footerLinks.map((footer, index) => (
        <div key={footer.name} className="space-y-8">
          <h4 className="text-lg">{footer.name}</h4>
          <div className="flex flex-col gap-y-4">
            {footer.links.map(link => (
              <CustomLink
                className="w-max opacity-60 hover:opacity-80 transition-opacity"
                link={link.link}
                key={`link-${link.link}-${index}`}
              >
                {link.name}
              </CustomLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
