import React from "react";

interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
}

interface ReviewsSectionProps {
  title?: string;
  reviews?: Review[];
}

const CourseReview: React.FC<ReviewsSectionProps> = ({
  reviews = [
    {
      id: "1",
      text: "Honestly didn't expect to win anything... but EGEAL made me $500 in a day. I just shared one tool. Realest platform I've touched.",
      author: "Alex Jordan",
    },
    {
      id: "2",
      text: "I posted an AI from EGEAL, won $700, and the post went viral. Gained 300 new followers. Insane boost.",
      author: "Tina Sanchez",
    },
    
  ],
}) => {
  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className=" ">
      <div className=" ">
        {/* Title */}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-black border border-[#D10800]  rounded-lg p-4 hover:border-gray-700 transition-colors duration-300  "
            >
              

              {/* Review Text */}
              <p className="text-[#FFFFFF] mb-4 font-normal text-[15px] leading-[24px] tracking-[0px] ">
                {review.text}
              </p>

              {/* Author */}
              <p className="text-[#FFFFFF] text-sm sm:text-base font-medium ">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
