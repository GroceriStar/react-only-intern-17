import React, { Component } from 'react';
import Calendar from 'react-calendar';

class App extends Component {

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

  let currentMonth = new Date().getMonth();

  if (currentMonth ===  4){
    return <div><h1>Current Month</h1>
                <Calendar
                  value={this.getMonthName(currentMonth)}
                />
    </div>;
  } else {
      return <div><h1>Not The Current Month</h1>
                  <Calendar
                    value={this.getMonthName(currentMonth)}
                  />
      </div>;
    }
  }


}

export default App;
