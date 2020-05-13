import { useEffect, useReducer } from "react";
import { slideInterval } from "commons/values";

const initialState = {
  active: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "JUMP":
      return { active: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const useCarousel = (listLength) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "JUMP", payload: (state.active + 1) % listLength });
    }, slideInterval);

    return () => clearTimeout(timer);
  });

  const containerWidth = listLength * 100;
  const style = {
    transform: `translateX(-${listLength * state.active}%)`,
    width: `${containerWidth}%`,
    transition: "transform 0.4s linear",
  };

  return [state.active, (n) => dispatch({ type: "JUMP", payload: n }), style];
};

export default useCarousel;
