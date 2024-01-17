/* eslint-disable react/prop-types */
import { createContext, useRef } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const sliderRef = useRef(null);

  const handleNext = (slideRef) => {
    slideRef.current.swiper.slideNext();
  };

  const handlePrev = (slideRef) => {
    slideRef.current.swiper.slidePrev();
  };

  const appInfo = {
    handleNext,
    handlePrev,
    sliderRef,
  };
  return (
    <>
      <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>
    </>
  );
};

export default AppProvider;
