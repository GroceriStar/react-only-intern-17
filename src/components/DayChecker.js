import React, { Component } from 'react';

class DayChecker extends Component {

  getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  };

  render() {

  let today = new Date().getDay();

  if (today === 6 || today === 0){
    return <div><p>Today is {this.getDayName(today)} - You can watch TV all day today</p></div>;
  } else { return <div><p>Today is {this.getDayName(today)} - You can watch TV all day today</p></div>;
    };
  }
}

export default DayChecker;
