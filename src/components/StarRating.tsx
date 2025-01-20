interface Props {
  rating: number;
}

const StarRating = ({ rating }: Props) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#45745A]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg
          className="w-5 h-5 text-[#45745A]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )}
    </div>
  );
};

export default StarRating;
