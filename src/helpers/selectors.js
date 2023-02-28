export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const appointments = [];
  let appointmentIDs = [];
  for (const requested of state.days) {
    if (requested.name === day) appointmentIDs = requested.appointments;
  }
  // const filteredDays = state.days.filter((requested) => requested.name === day);
  for (const appointment of appointmentIDs) {
    appointments.push(state.appointments[appointment]);
  }
  // console.log(appointments);
  return appointments;
}

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewerID = interview.interviewer;
  let studentInterview = {};

  studentInterview = {
    student: interview.student,
    interviewer: state.interviewers[interviewerID],
  };
  // console.log(studentInterview);
  return studentInterview;
}

export function getInterviewersForDay(state, day) {
  //... returns an array of appointments for that day
  const interviewers = [];
  let interviewersIDs = [];
  for (const requested of state.days) {
    if (requested.name === day) interviewersIDs = requested.interviewers;
  }
  // const filteredDays = state.days.filter((requested) => requested.name === day);
  for (const interview of interviewersIDs) {
    interviewers.push(state.interviewers[interview]);
  }
  // console.log(appointments);
  return interviewers;
}
