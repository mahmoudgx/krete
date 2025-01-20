import StarRating from "./StarRating";

interface Props {
  name: string;
  product: string;
  description: string;
  rating: number;
}

const TestimonialsCard = ({ name, product, description, rating }: Props) => {
  return (
    <div className="bg-[#F3EDD4] space-y-2 p-5 rounded-xl">
      <h1 className=" text-xl font-bold">{name}</h1>
      <p className=" text-xs uppercase text-gray-500">{product}</p>
      <StarRating rating={rating} />
      <div>
        <p className=" text-lg">{description}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
