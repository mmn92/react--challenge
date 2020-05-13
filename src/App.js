import React, { useReducer, useEffect, useState } from "react";
import { usePaginatedList } from "./hooks/useList";

import Fixed from "./components/Carousel/Fixed";
import FixedAnimated from "./components/Carousel/FixedAnimated";
import CustomHooks from "./components/Carousel/CustomHooks";
import CustomHooksAnimated from "./components/Carousel/CustomHooksAnimated";

import "./styles.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNT":
      return { ...state, count: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_EXPANDED":
      return { ...state, expanded: action.payload };
    default:
      return { ...state };
  }
};

function App() {
  const [page, setPage] = useState(1);
  const paginatedList = usePaginatedList(page);

  if (paginatedList.status === "loading") {
    return <div>Loading...</div>;
  }

  if (paginatedList.status === "error") {
    return <div>Error {paginatedList.error}</div>;
  }

  return (
    <div className="screen-container">
      <Fixed slides={paginatedList.resolvedData.data.results} />
      <FixedAnimated slides={paginatedList.resolvedData.data.results} />
      <CustomHooks slides={paginatedList.resolvedData.data.results} />
      <CustomHooksAnimated slides={paginatedList.resolvedData.data.results} />
    </div>
  );
}

export default App;
