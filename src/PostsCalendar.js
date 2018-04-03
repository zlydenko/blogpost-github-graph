import React, { Component } from "react";
import { Wrapper, Months, Weekdays, Days, Day } from "./styled";
import differenceInDays from "date-fns/difference_in_calendar_days";

const filterPosts = (posts, timestampID) => {
  let result = new Map();

  posts.map(obj => {
    const key =
      differenceInDays(new Date(obj[timestampID]), new Date(2018, 0, 1)) + 1;
    const counter = result.get(key);
    if (counter === undefined) {
      result.set(key, 1);
    } else {
      result.set(key, counter + 1);
    }
  });

  return result;
};

const RenderDays = props => {
  const data = props.data;
  const timestampId = props.timestampId.toString();
  const colorsConfig = props.colorsConfig || false;
  const arr = Array(365).fill(null);
  const postsMap = filterPosts(data, timestampId);

  for (let quantity of postsMap) {
    const key = quantity[0];
    const val = quantity[1];
    arr[key - 1] = val;
  }

  return arr.map((day, _) => {
    if (day === 1) {
      return (
        <Day
          key={_}
          quantity="one"
          style={{
            backgroundColor: colorsConfig["one"] || "rgba(25, 97, 39,0.3)"
          }}
        />
      );
    } else if (day === 3) {
      return (
        <Day
          key={_}
          quantity="few"
          style={{
            backgroundColor: colorsConfig["few"] || "rgba(25, 97, 39,0.8)"
          }}
        />
      );
    } else if (day > 3) {
      return (
        <Day
          key={_}
          quantity="alot"
          style={{
            backgroundColor: colorsConfig["alot"] || "rgba(25, 97, 39,1)"
          }}
        />
      );
    } else {
      return (
        <Day
          key={_}
          quantity="none"
          style={{
            backgroundColor: colorsConfig["none"] || "#ebedf0"
          }}
        />
      );
    }
  });
};

const PostsCalendar = props => (
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
      <RenderDays
        data={props.data}
        timestampId={props.timestampId}
        colorsConfig={props.colors || false}
      />
    </Days>
  </Wrapper>
);

export default PostsCalendar;
