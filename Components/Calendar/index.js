import React, { useState } from 'react';

const CalendarBooking = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([
    '2023-02-10', '2023-02-11', '2023-02-12', '2023-02-13'
  ]);

  const handleCheckInSelect = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutSelect = (event) => {
    setCheckOutDate(event.target.value);
  };

  const isDateAvailable = (date) => {
    return !bookedDates.includes(date);
  };

  return (
    <div className="calendar-container">
      <h3>Select check-in and check-out dates:</h3>
      <div className="input-group">
        <label>Check-in:</label>
        <input type="date" onChange={handleCheckInSelect} />
        {checkInDate && (
          <div className="selected-date">
            {checkInDate}
          </div>
        )}
      </div>
      <div className="input-group">
        <label>Check-out:</label>
        <input type="date" onChange={handleCheckOutSelect} 
               min={checkInDate} 
               disabled={checkInDate ? !isDateAvailable(checkInDate) : false} />
        {checkOutDate && (
          <div className="selected-date">
            {checkOutDate}
          </div>
        )}
      </div>
      <style jsx>{`
        .calendar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1em;
        }
        input[type="date"] {
          padding: 0.5em;
          font-size: 1em;
        }
        input[type="date"][disabled] {
          background-color: lightgray;
        }
        .selected-date {
          margin-top: 1em;
          font-size: 1.2em;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CalendarBooking;