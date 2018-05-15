import React, { Component } from 'react';
import DayChecker from './DayChecker';
import Header from './Header';
import MonthChecker from './MonthChecker';
import WeekChecker from './WeekChecker';
import MealPlan from './MealPlan';

class App extends Component {
  render() {
    return [
      <Header />,
      <DayChecker />,
      <MonthChecker />,
      <WeekChecker />,
      <MealPlan />,
    ];
  }
}

export default App;
