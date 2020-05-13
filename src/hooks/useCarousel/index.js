import { useEffect, useReducer } from "react";
import { slideInterval } from "../../commons/values";

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

  return [state.active, (n) => dispatch({ type: "JUMP", payload: n })];
};

export default useCarousel;
