import React from "react";
import { render } from "react-dom";

import PostsCalendar from "./PostsCalendar";
import posts from "../db";

const colorsConfig = {
  few: "yellow",
  alot: "lightgreen"
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
