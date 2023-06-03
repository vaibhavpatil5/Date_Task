import React, { useState } from "react";
import { format, add } from "date-fns";

const DatePage = () => {
  // Create state variables for the from date, to date, and duration
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [duration, setDuration] = useState("");

  // Function to handle changes to the from date input field
  const handleFromDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setFromDate(selectedDate);
  };

  // Function to handle changes to the duration input field
  const handleDurationChange = (e) => {
    const selectedDuration = e.target.value;
    setDuration(selectedDuration);
    calculateToDate(fromDate, selectedDuration);
  };

  // Function to calculate the to date based on the from date and duration
  const calculateToDate = (startDate, duration) => {
    if (startDate && duration) {
      const endDate = add(startDate, { days: Number(duration) });
      setToDate(endDate);
    }
  };

  return (
    <div className="date_container">
      <h1>Date Page</h1>
      <div className="form_group">
        <label htmlFor="fromDate">From Date:</label>
        <input
          type="datetime-local"
          id="fromDate"
          onChange={handleFromDateChange}
        />
      </div>
      <div className="form_group">
        <label htmlFor="duration">Duration (in days):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
        />
      </div>
      <div className="form_group">
        <label htmlFor="toDate">To Date:</label>
        <input
          type="datetime-local"
          id="toDate"
          value={toDate ? format(toDate, "yyyy-MM-dd'T'HH:mm") : ""}
          disabled
        />
      </div>
    </div>
  );
};
export default DatePage;
