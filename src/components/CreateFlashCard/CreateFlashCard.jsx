import { FaPlus } from "react-icons/fa";

const CreateFlashCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-5 md:px-10 flex flex-wrap justify-between items-center mt-24 mb-10">
      <div className="w-[9em] sm:w-[12em]">
        <img
          className="w-full"
          src="/images/published.png"
          alt="Published logo"
        />
      </div>

      <button className="flex items-center justify-center">
        <FaPlus className="p-2 rounded-full bg-gradient-to-t from-gradient-6 to-gradient-5 text-primary-color text-3xl sm:text-4xl"></FaPlus>
        <span className="bg-gradient-to-t from-gradient-6 to-gradient-5 bg-clip-text text-transparent font-semibold font-inter ml-2 text-sm sm:text-lg">
          Create Flashcard
        </span>
      </button>
    </div>
  );
};

export default CreateFlashCard;
