import Slider from "react-slick";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {[image1, image2, image3].map((img, i) => (
          <div key={i} className="relative w-full h-[500px]">
            <img
              src={img}
              alt={`slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      <p className="absolute bottom-30 text-center bg-gray-100 px-4 py-2 w-[90%] left-1/2 transform -translate-x-1/2 mx-2">
        You are on amazon.com. You can also shop on Amazon India for millions of
        products with fast local delivery.
        <a href="https://www.amazon.in" className="text-blue-600 underline">
          Click here
        </a>{" "}
        to go to amazon.in
      </p>
    </div>
  );
};

export default SimpleSlider;
