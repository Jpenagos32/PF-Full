import React, { createContext, useState } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const setDateRange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DateContext.Provider value={{ startDate, endDate, setDateRange }}>
      {children}
    </DateContext.Provider>
  );
};
