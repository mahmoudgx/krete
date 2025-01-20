import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const FAQ = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);
  const [showAnswer6, setShowAnswer6] = useState(false);

  return (
    <div className="p-5 space-y-10">
      <div>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-thin">
          You Have Questions...
          <br />
          We Have Answers!
        </h1>
      </div>
      <div className="space-y-5">
        {/* First FAQ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <h1 className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 bg-[#F3EDD4] rounded-full justify-center items-center flex">
              01
            </h1>
            <h1 className="text-lg sm:text-xl">What is 30-second skin care?</h1>
          </div>
          <h1
            className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center flex cursor-pointer mt-3 sm:mt-0"
            onClick={() => setShowAnswer1(!showAnswer1)}
          >
            {showAnswer1 ? "-" : "+"}
          </h1>
        </div>
        <div
          className={`ml-10 sm:ml-[70px] overflow-hidden transition-all duration-300 ease-in-out ${
            showAnswer1 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="transition-opacity duration-300 ease-in-out">
            All of our products take just 30 seconds to use. Most of them show
            visible results in 30 seconds or less, and most take less than 30
            seconds to understand.
          </p>
        </div>
        <hr className="border-[1px] border-black ml-10 sm:ml-[70px]" />

        {/* Second FAQ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <h1 className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3EDD4] justify-center items-center flex">
              02
            </h1>
            <h1 className="text-lg sm:text-xl">Is Krete only for men?</h1>
          </div>
          <h1
            className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center flex cursor-pointer mt-3 sm:mt-0"
            onClick={() => setShowAnswer2(!showAnswer2)}
          >
            {showAnswer2 ? "-" : "+"}
          </h1>
        </div>
        <div
          className={`ml-10 sm:ml-[70px] overflow-hidden transition-all duration-300 ease-in-out ${
            showAnswer2 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="transition-opacity duration-300 ease-in-out">
            Krete products work for everyone, but we have focused our messaging
            and education to help men start from square 1 when it comes to skin
            care. Men need a kick in the ass to get started because of decades
            of culture that excluded them from the conversation. Until now, it
            was easier to do nothing than to walk into a skin care store and
            pick the correct product out of the selection of hundreds to
            thousands.
          </p>
        </div>
        <hr className="border-[1px] border-black ml-10 sm:ml-[70px]" />

        {/* Third FAQ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <h1 className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3EDD4] justify-center items-center flex">
              03
            </h1>
            <h1 className="text-lg sm:text-xl">
              What are the key ingredients in Krete products?
            </h1>
          </div>
          <h1
            className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center flex cursor-pointer mt-3 sm:mt-0"
            onClick={() => setShowAnswer3(!showAnswer3)}
          >
            {showAnswer3 ? "-" : "+"}
          </h1>
        </div>
        <div
          className={`ml-10 sm:ml-[70px] overflow-hidden transition-all duration-300 ease-in-out ${
            showAnswer3 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="transition-opacity duration-300 ease-in-out">
            Krete products are formulated with a blend of natural,
            clinically-proven ingredients such as niacinamide, vitamin C,
            hyaluronic acid, and retinol. These ingredients work together to
            address common skin concerns like dullness, fine lines, and uneven
            texture.
          </p>
        </div>
        <hr className="border-[1px] border-black ml-10 sm:ml-[70px]" />

        {/* Fourth FAQ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <h1 className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3EDD4] justify-center items-center flex">
              04
            </h1>
            <h1 className="text-lg sm:text-xl">
              How often should I use Krete products?
            </h1>
          </div>
          <h1
            className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center flex cursor-pointer mt-3 sm:mt-0"
            onClick={() => setShowAnswer4(!showAnswer4)}
          >
            {showAnswer4 ? "-" : "+"}
          </h1>
        </div>
        <div
          className={`ml-10 sm:ml-[70px] overflow-hidden transition-all duration-300 ease-in-out ${
            showAnswer4 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="transition-opacity duration-300 ease-in-out">
            We recommend using Krete products twice a day, once in the morning
            and once in the evening, for best results. Consistency is key for
            achieving your desired skin goals.
          </p>
        </div>
        <hr className="border-[1px] border-black ml-10 sm:ml-[70px]" />

        {/* Fifth FAQ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <h1 className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3EDD4] justify-center items-center flex">
              05
            </h1>
            <h1 className="text-lg sm:text-xl">
              Do Krete products have a fragrance?
            </h1>
          </div>
          <h1
            className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center flex cursor-pointer mt-3 sm:mt-0"
            onClick={() => setShowAnswer5(!showAnswer5)}
          >
            {showAnswer5 ? "-" : "+"}
          </h1>
        </div>
        <div
          className={`ml-10 sm:ml-[70px] overflow-hidden transition-all duration-300 ease-in-out ${
            showAnswer5 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="transition-opacity duration-300 ease-in-out">
            Our Krete products are fragrance-free to minimize the risk of
            irritation or sensitivity. We believe in creating effective formulas
            that cater to all skin types, including those with sensitivities.
          </p>
        </div>
        <hr className="border-[1px] border-black ml-10 sm:ml-[70px]" />

        {/* Sixth FAQ */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex items-center space-x-3 sm:space-x-5">
            <h1 className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F3EDD4] justify-center items-center flex">
              06
            </h1>
            <h1 className="text-lg sm:text-xl">
              Can I use Krete products if I have acne-prone skin?
            </h1>
          </div>
          <h1
            className="text-xl sm:text-2xl border-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full justify-center items-center flex cursor-pointer mt-3 sm:mt-0"
            onClick={() => setShowAnswer6(!showAnswer6)}
          >
            {showAnswer6 ? "-" : "+"}
          </h1>
        </div>
        <div
          className={`ml-10 sm:ml-[70px] overflow-hidden transition-all duration-300 ease-in-out ${
            showAnswer6 ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="transition-opacity duration-300 ease-in-out">
            Absolutely! Our products are formulated with non-comedogenic
            (non-pore-clogging) ingredients that won't exacerbate acne. In fact,
            many of our customers with acne-prone skin have reported improved
            complexion and reduced breakouts after incorporating Krete into
            their routine.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-end items-center pt-10 space-y-3 sm:space-y-0 sm:space-x-5">
        <h1 className="text-center sm:text-left">
          Haven’t found an answer to your question?
          <br /> Click here to see more FAQs.
        </h1>
        <div className="flex items-center space-x-5 bg-[#45745A] text-white p-5 rounded-full cursor-pointer">
          <h1>Go to FAQs</h1>
          <div className="bg-black p-2 rounded-full">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
