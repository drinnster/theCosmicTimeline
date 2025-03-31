import React from 'react';
import { cosmicYear, earthFormationYear, firstHumansYear } from './constants/cosmicTimeline';
import { firstWrittenRecordsYear, pyramidsBuiltYear } from './constants/humanHistory';
import { gregorianCalendarYear } from './constants/calendarSystems';
import { yearsAgo } from './constants/yearsAgo';

const App = () => {
  return (
    <div className="App">
      <h1>The Cosmic Timeline</h1>
      <p>Cosmic Year: {cosmicYear} years</p>
      <p>Earth Formation: {yearsAgo(earthFormationYear)}</p>
      <p>First Humans Appeared: {yearsAgo(firstHumansYear)}</p>
      <p>First Written Records: {yearsAgo(firstWrittenRecordsYear)}</p>
      <p>Pyramids Built: {yearsAgo(pyramidsBuiltYear)}</p>
      <p>Gregorian Calendar Established: {gregorianCalendarYear} years ago</p>
    </div>
  );
};

export default App;