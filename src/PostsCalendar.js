import React from "react";
import { Wrapper, Months, Weekdays, Days, Day } from "./styled";
import posts from "../db";
import differenceInDays from "date-fns/difference_in_calendar_days";

const filterPosts = posts => {
  let result = new Map();

  posts.map(obj => {
    const key =
      differenceInDays(new Date(obj.timestamp), new Date(2018, 0, 1)) + 1;
    const counter = result.get(key);
    if (counter === undefined) {
      result.set(key, 1);
    } else {
      result.set(key, counter + 1);
    }
  });

  return result;
};

const RenderDays = () => {
  const arr = Array(365).fill(null);
  const postsMap = filterPosts(posts);

  for (let quantity of postsMap) {
    const key = quantity[0];
    const val = quantity[1];
    arr[key - 1] = val;
  }

  return arr.map((day, _) => {
    if (day === 1) {
      return <Day key={_} quantity="one" />;
    } else if (day === 3) {
      return <Day key={_} quantity="few" />;
    } else if (day > 3) {
      return <Day key={_} quantity="alot" />;
    } else {
      return <Day key={_} quantity="none" />;
    }
  });
};

export default class extends React.Component {
  render() {
    return (
      <Wrapper>
        <Months>
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>Jun</li>
          <li>Jul</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>Dec</li>
        </Months>
        <Weekdays>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </Weekdays>
        <Days>
          <RenderDays />
        </Days>
      </Wrapper>
    );
  }
}
