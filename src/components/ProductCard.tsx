import { Link } from "react-router-dom";
import StarRating from "./StarRating";

type HomeCardProps = {
  title: string;
  image: string;
  price: number;
  ratings: number;
  bought: string;
  delivery: string;
};

const ProductCard = ({
  title,
  image,
  price,
  ratings,
  bought,
  delivery,
}: HomeCardProps) => {
  return (
    <div className=" bg-[#ffff] w-[200px] flex flex-col gap-2 py-4 px-3 rounded shadow-sm">
      <img
        src={image}
        alt="product-image"
        className="w-[200px] h-[150px] object-contain"
      />
      <h1 className="text-base font-semibold">{title}</h1>
      <StarRating
        rating={3.5}
        // editable
        // changeRating={(newRating) => console.log(newRating)}
      />
      <p className="text-sm text-gray-600">{bought}</p>
      <p className="text-sm font-bold">₹{price}</p>
      <p className="text-sm text-green-600">{delivery}</p>

      <Link to="/products-list" className="text-sm text-blue-500 underline">
        Add to Cart
      </Link>
    </div>
  );
};

export default ProductCard;
