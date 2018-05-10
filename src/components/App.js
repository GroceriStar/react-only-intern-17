import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';
import MonthChecker from './MonthChecker';
import WeekChecker from './WeekChecker';

class App extends Component {
  render() {
    return [
      <Header />,
      <DayChecker />,
      <MonthChecker />,
      <WeekChecker />
    ];
  }
}

export default App;
