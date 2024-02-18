import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  let { items } = props;
  const listItems = [...items];

  const sortedList = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, []);

  items=[...listItems];
  const sortedDescList = useMemo(() => {
    return items.sort((a, b) => b - a);
  }, []);

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {props.title === "My List" &&
          listItems.map((item) => <li key={item}>{item}</li>)}
        {props.title === "Increasing Order" &&
          sortedList.map((item) => <li key={item}>{item}</li>)}
        {props.title === "Decreasing Order" &&
          sortedDescList.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
