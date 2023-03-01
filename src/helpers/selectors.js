export function getAppointmentsForDay(state, day) {
  const appointments = [];
  let appointmentIDs = [];
  for (const requested of state.days) {
    if (requested.name === day) appointmentIDs = requested.appointments;
  }
  for (const appointment of appointmentIDs) {
    appointments.push(state.appointments[appointment]);
  }
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
  return studentInterview;
}

export function getInterviewersForDay(state, day) {
  const interviewers = [];
  let interviewersIDs = [];
  for (const requested of state.days) {
    if (requested.name === day) interviewersIDs = requested.interviewers;
  }
  for (const interview of interviewersIDs) {
    interviewers.push(state.interviewers[interview]);
  }
  return interviewers;
}
