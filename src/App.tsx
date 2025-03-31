import React from 'react';
import { cosmicYear, earthFormationYear, firstHumansYear } from './constants';

const App = () => {
  return (
    <div className="App">
      <h1>The Cosmic Timeline</h1>
      <p>Cosmic Year: {cosmicYear} years</p>
      <p>Earth Formation: {earthFormationYear} years ago</p>
      <p>First Humans Appeared: {firstHumansYear} years ago</p>
    </div>
  );
};

export default App;