import { Link } from "react-router-dom";

type HomeCardProps = {
  title: string;
  link: string;
  image: string;
};
const HomeCard = ({ title, link, image }: HomeCardProps) => {
  return (
    <div className="bg-white w-[306px] h-[385px] shadow-xl items-center flex flex-col gap-2 py-4">
      <h1 className="text-xl font-bold text-start px-7 w-full">{title}</h1>
      <img src={image} alt="prodct-image" className="w-[250px] h-[280px]" />
      <Link to={"/products-list"} className="text-start px-7 w-full text-blue-400">{link}</Link>
    </div>
  );
};

export default HomeCard;
