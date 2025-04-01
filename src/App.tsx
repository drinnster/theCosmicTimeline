import React, { useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import timelineData from './data/timelineData.json';

function App() {
  const [selectedCalendar, setSelectedCalendar] = useState("Gregorian"); // Default calendar

  const handleCalendarChange = (event) => {
    setSelectedCalendar(event.target.value); // Update calendar on selection change
  };

  return (
    <div className="App">
      <Header selectedCalendar={selectedCalendar} handleCalendarChange={handleCalendarChange} />
      <Timeline selectedCalendar={selectedCalendar} timelineData={timelineData} /> {/* Pass selectedCalendar here */}
    </div>
  );
}

export default App;