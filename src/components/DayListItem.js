import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  const formatSpots = (spots) => {
    let formattedSpots;
    if (spots === 0) {
      formattedSpots = "no spots remaining";
    } else if (spots === 1) {
      formattedSpots = "1 spot remaining";
    } else {
      formattedSpots = `${spots} spots remaining`;
    }
    return formattedSpots;
  };
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li onClick={props.setDay} className={dayClass} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}

//////////// props
// name:String the name of the day
// spots:Number the number of spots remaining
// selected:Boolean true or false declaring that this day is selected
// setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
