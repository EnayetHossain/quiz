import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

/* eslint-disable react-refresh/only-export-components */
const FAQ = () => {
  const data = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem",
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="max-w-screen-xl font-inter mx-auto px-4 sm:px-5 container md:px-10 my-32">
      <span className="text-5xl bg-gradient-to-t from-gradient-4 to-gradient-1 bg-clip-text text-transparent font-bold inline-block mb-5">
        FAQ
      </span>
      <div className="max-w-3xl w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="my-8 border-[1px] border-gradient-2 rounded-xl p-4"
          >
            <button
              onClick={() => handleClick(index)}
              className="flex justify-between items-center w-full h-full font-semibold"
            >
              <div>{item.question}</div>
              <FaChevronDown
                className={
                  index === activeIndex
                    ? "rotate-180 transition-transform duration-300"
                    : "rotate-0 transition-transform duration-300"
                }
              ></FaChevronDown>
            </button>
            {index === activeIndex && <p className="mt-5">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
