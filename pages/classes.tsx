import WorkShops from "../components/classes/WorkShops";
import CustomLink from "../components/globals/atoms/CustomLink";
import Nav from "../components/globals/molecules/Nav";

type Props = {};

const workshops = [
  {
    name: "Asian",
    dish: "Delicious Breakfast",
    date: "June 16, 2023",
    image: "/workshop.png",
  },
  {
    name: "Breakfast",
    dish: "Coffee Time",
    date: "March 17, 2023",
    image: "/workshop.png",
  },
  {
    name: "Vegan",
    dish: "Vegan Burger",
    date: "January 10, 2023",
    image: "/workshop.png",
  },
  {
    name: "Italian",
    dish: "Salad Style",
    date: "November 19, 2022",
    image: "/workshop.png",
  },
  {
    name: "Italian",
    dish: "Homemade Honey",
    date: "October 8, 2022",
    image: "/workshop.png",
  },
];

const Classes = (props: Props) => {
  return (
    <div className="overflow-hidden">
      <CustomLink
        link="/"
        className="fixed top-[5%] inset-x-0 text-center text-white text-[32px] font-medium leading-7 z-10"
      >
        nique.
      </CustomLink>
      <div className="fixed bottom-[5%] inset-x-0 z-10">
        <Nav />
      </div>

      <WorkShops workshops={workshops} />
    </div>
  );
};

export default Classes;
