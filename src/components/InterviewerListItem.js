import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li
      className={interviewerClass}
      onClick={() => props.setInterviewer(props.id)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && <p>{props.name}</p>}
    </li>
  );
}

/////////////////////////props
// id:number - the id of the interviewer
// name:string - the name of the interviewer
// avatar:url - a url to an image of the interviewer
// selected:boolean - determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.
// setInterviewer:function - is run when the <InterviewerListItem> is clicked. This function receives the interviewer's id as an argument. It sets the selected interviewer.
