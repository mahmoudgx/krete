import { FaArrowRight } from "react-icons/fa";

interface Props {
  image: string;
  title: string;
}

const ProductCard = ({ image, title }: Props) => {
  return (
    <div>
      <div className="space-y-2">
        <img className=" rounded-xl" src={image} />
        <div className="flex items-center space-x-5">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="border-2 rounded-full p-3 text-black">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
