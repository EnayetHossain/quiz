import { useState } from "react";
import Game from "../Game/Game";
import Others from "../Others/Others";
import Quiz from "../Quiz/Quiz";
import Study from "../Study/Study";
import Test from "../Test/Test";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs max-w-screen-xl mx-auto px-4 sm:px-5 md:px-10 my-10">
      <div className="text-xl sm:text-[1.7em] font-bold font-montserrat mb-10 bg-gradient-to-t from-gradient-6 to-gradient-5 bg-clip-text text-transparent">
        Relations and Functions ( Mathematics )
      </div>
      <ul className="max-w-[540px] mx-auto flex justify-between items-center font-inter font-medium text-secondary-color-shade">
        <li
          className={`cursor-pointer ${
            activeTab === "tab1"
              ? "text-gradient-5 border-b-2 border-gradient-5 font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Study
        </li>

        <li
          className={`cursor-pointer ${
            activeTab === "tab2"
              ? "text-gradient-5 border-b-2 border-gradient-5 font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Quiz
        </li>

        <li
          className={`cursor-pointer ${
            activeTab === "tab3"
              ? "text-gradient-5 border-b-2 border-gradient-5 font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Test
        </li>

        <li
          className={`cursor-pointer ${
            activeTab === "tab4"
              ? "text-gradient-5 border-b-2 border-gradient-5 font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("tab4")}
        >
          Game
        </li>

        <li
          className={`cursor-pointer ${
            activeTab === "tab5"
              ? "text-gradient-5 border-b-2 border-gradient-5 font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("tab5")}
        >
          Others
        </li>
      </ul>

      <div className="max-w-screen-sm mx-auto px-0 sm:px-4 mt-7">
        {activeTab === "tab1" ? (
          <Study></Study>
        ) : activeTab === "tab2" ? (
          <Quiz></Quiz>
        ) : activeTab === "tab3" ? (
          <Test></Test>
        ) : activeTab === "tab4" ? (
          <Game></Game>
        ) : (
          <Others></Others>
        )}
      </div>
    </div>
  );
};

export default Tabs;
