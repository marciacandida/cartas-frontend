import { StarIcon } from "lucide-react";

interface StarsRatingProps {
  percentage: number;
}

const StarsRating = ({ percentage }: StarsRatingProps) => {
  const filledStars = Math.floor((percentage * 10) / 20);

  const filledStarsArray = Array.from({ length: filledStars }, (_, index) => (
    <StarIcon key={index} fill="#9d174d" className="text-transparent w-5" />
  ));

  const unfilledStarsArray = Array.from(
    { length: 5 - filledStars },
    (_, index) => (
      <StarIcon
        key={index + filledStars}
        fill="#9d174d47"
        className="text-transparent w-5"
      />
    )
  );

  return (
    <div className="flex space-x-1">
      {filledStarsArray}
      {unfilledStarsArray}
    </div>
  );
};

export default StarsRating;
