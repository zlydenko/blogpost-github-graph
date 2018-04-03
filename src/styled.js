import styled from "styled-components";

const daySize = 15;
const dayGap = 5;
const weekWidth = daySize + dayGap;
const fontSize = 12;

export const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: ${fontSize}px;
  color: ${props => props.font || "black"};
  display: inline-grid;
  grid-template-areas:
    "empty months"
    "weekdays days";
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  padding: 20px;

  border: ${props => (props.border ? "1px solid" : "none")};
  border-color: ${props => props.borderColor || "#e1e4e8"};
  margin: 20px;
  background-color: ${props => props.bg || "inherit"};
`;

export const Months = styled.ul`
  list-style: none;
  grid-area: months;
  display: grid;
  grid-template-columns:
    ${weekWidth * 4}px /* Jan */
    ${weekWidth * 4}px /* Feb */
    ${weekWidth * 4}px /* Mar */
    ${weekWidth * 5}px /* Apr */
    ${weekWidth * 4}px /* May */
    ${weekWidth * 4}px /* Jun */
    ${weekWidth * 5}px /* Jul */
    ${weekWidth * 4}px /* Aug */
    ${weekWidth * 4}px /* Sep */
    ${weekWidth * 5}px /* Oct */
    ${weekWidth * 4}px /* Nov */
    ${weekWidth * 4}px /* Dec */;
`;

export const Weekdays = styled.ul`
  list-style: none;
  grid-area: weekdays;
  display: grid;
  grid-gap: ${dayGap}px;
  grid-template-rows: repeat(7, ${daySize}px);

  & li:nth-child(odd) {
    visibility: hidden;
  }
`;

export const Days = styled.ul`
  list-style: none;
  grid-area: days;
  display: grid;
  grid-gap: ${dayGap}px;
  grid-template-rows: repeat(7, ${daySize}px);
  grid-auto-flow: column;
  grid-auto-columns: ${daySize}px;
`;

export const Day = styled.li``;
