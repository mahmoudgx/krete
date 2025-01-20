import { FaArrowRight } from "react-icons/fa";
import StarRating from "./StarRating";

interface Props {
  image: string;
  title: string;
  description: string;
  rating: string;
  review: string;
}

const FeaturedProductCard = ({
  image,
  title,
  description,
  rating,
  review,
}: Props) => {
  return (
    <div className="space-y-3 sm:space-y-5">
      <img className="w-full rounded-xl" src={image} alt="Featured Product" />
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-sm sm:text-base">{title}</h1>
        <FaArrowRight className="text-sm sm:text-base" />
      </div>
      <p className="text-gray-400 uppercase text-xs sm:text-sm">
        {description}
      </p>
      <div className="flex space-x-2 items-center">
        <StarRating rating={rating} />
        <span className="font-black text-xs sm:text-sm">{review}</span>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
