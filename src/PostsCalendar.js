import React from "react";
import { Wrapper, Months, Weekdays, Days, Noneday } from "./styled";

const RenderDays = () => {
  const arr = Array(365).fill(null);

  return arr.map(
    (day, _) => (day === null ? <Noneday key={_} /> : <li key={_} />)
  );
};

export default class extends React.Component {
  state = {};
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
