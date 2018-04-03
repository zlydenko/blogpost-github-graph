import React from "react";
import { render } from "react-dom";

import PostsCalendar from "./PostsCalendar";
import posts from "../db";

const rootElem = document.querySelector("#graph");

render(<PostsCalendar data={posts} timestampId={"timestamp"} />, rootElem);
