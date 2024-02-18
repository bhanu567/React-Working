import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle((prevTitle) => {
      if (prevTitle === "My List" || prevTitle === "Decreasing Order")
        return "Increasing Order";
      else return "Decreasing Order";
    });
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>
        {listTitle === "My List" || listTitle === "Decreasing Order"
          ? "Change to Ascending Order"
          : "change to Descending Order"}
      </Button>
    </div>
  );
}

export default App;
