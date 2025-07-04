import StarRatings from 'react-star-ratings';

type StarRatingProps = {
  rating: number;
  changeRating?: (newRating: number) => void;
  editable?: boolean;
};

const StarRating = ({ rating, changeRating, editable = false }: StarRatingProps) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#ffd700"
      changeRating={editable ? changeRating : undefined}
      numberOfStars={5}
      starDimension="20px"
      starSpacing="2px"
      name="product-rating"
    />
  );
};

export default StarRating;
