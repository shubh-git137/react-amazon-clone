import { SquareMenu } from "lucide-react";
const Menu = () => {
  const menuItems: string[] = [
    "Fresh",
    "Mx Player",
    "Sell",
    "Today's Deal",
    "Mobiles",
    "Primes",
    "Customer Service",
    "New Release",
    "Fashion",
    "Amazon pay",
  ];
  return (
    <div className="bg-[#232f3e] h-10 w-full flex items-center text-white gap-5">
      <div className="mx-5 flex item-style">
        <SquareMenu />
        <p className="font-bold">All</p>
      </div>
      {menuItems.map((items, index) => (
        <p className="item-style" key={index}>
          {items}
        </p>
      ))}
    </div>
  );
};

export default Menu;
