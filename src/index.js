import React from "react";
import { render } from "react-dom";

import PostsCalendar from "./PostsCalendar";
import posts from "../db";

const colorsConfig = {
  none: "navy",
  one: "red",
  few: "yellow",
  alot: "lightgreen",
  border: false,
  font: "white",
  "border-color": "magenta",
  bg: "gold"
};

const rootElem = document.querySelector("#graph");

render(
  <PostsCalendar
    data={posts}
    timestampId={"timestamp"}
    colors={colorsConfig}
  />,
  rootElem
);
