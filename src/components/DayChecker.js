import React, { Component } from 'react';
import Calendar from 'react-calendar';

class DayChecker extends Component {

  getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  };

  getMonthName(number) {
    let months = [
      { date: new Date('January 2018') },
      { date: new Date('February 2018') },
      { date: new Date('March 2018') },
      { date: new Date('April 2018') },
      { date: new Date('May 2018') },
      { date: new Date('June 2018') },
      { date: new Date('July 2018') }
    ];
    return months[number].date;
  };

  render() {

  let today = new Date().getDay();
  let currentMonth = new Date().getMonth();

  if (today === 6 || today === 0){
    return <div>
            <p>Today is {this.getDayName(today)} - You can watch TV all day today</p>
            <h1>Current Month</h1>
            <Calendar
              value={this.getMonthName(currentMonth)}
            />
           </div>;
  } else { return <div>
                    <p>Today is {this.getDayName(today)} - You can watch TV all day today</p>
                    <h1>Current Month</h1>
                    <Calendar
                      value={this.getMonthName(currentMonth)}
                    />
                    </div>;;
    };
  }
}

export default DayChecker;
