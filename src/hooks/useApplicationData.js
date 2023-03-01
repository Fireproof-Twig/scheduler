import React, { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  const getDaySpotsRemaining = function (day, state) {
    let startNumber = 0;
    for (const appointmentID of day.appointments) {
      if (state.appointments[appointmentID].interview === null) {
        startNumber++;
      }
    }
    return startNumber;
  };

  function updateDaysSpots(state) {
    state.days = state.days.map((day) => {
      day.spots = getDaySpotsRemaining(day, state);
      return day;
    });
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, {
        interview: interview,
      })
      .then(() => {
        const newState = { ...state, appointments: appointments };
        updateDaysSpots(newState);
        setState(newState);
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`, appointment).then(() => {
      const newState = { ...state, appointments };
      updateDaysSpots(newState);
      setState(newState);
    });
  }

  useEffect(() => {
    const daysURL = `/api/days`;
    const appointmentsURL = `/api/appointments`;
    const interviewersURL = `/api/interviewers`;
    Promise.all([
      axios.get(daysURL),
      axios.get(appointmentsURL),
      axios.get(interviewersURL),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}
