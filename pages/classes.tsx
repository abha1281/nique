import WorkShops from "../components/classes/WorkShops";
import CustomLink from "../components/globals/atoms/CustomLink";
import Nav from "../components/globals/molecules/Nav";

type Props = {};

const workshops = [
  {
    name: "Asian",
    slug: "delicious_breakfast",
    dish: "Delicious Breakfast",
    date: "June 16, 2023",
    image: "/dishes/delicious_pancakes.jpg",
  },
  {
    name: "Breakfast",
    slug: "coffee_time",
    dish: "Coffee Time",
    date: "March 17, 2023",
    image: "/dishes/coffee_time.jpg",
  },
  {
    name: "Vegan",
    slug: "vegan_burger",
    dish: "Vegan Burger",
    date: "January 10, 2023",
    image: "/dishes/vegan_burger.jpg",
  },
  {
    name: "Italian",
    slug: "salad_style",
    dish: "Salad Style",
    date: "November 19, 2022",
    image: "/dishes/salad_style.jpg",
  },
  {
    name: "Italian",
    slug: "homemade_honey",
    dish: "Homemade Honey",
    date: "October 8, 2022",
    image: "/dishes/homemade_honey.jpg",
  },
];

const Classes = (props: Props) => {
  return (
    <div className="overflow-hidden bg-black text-white">
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
