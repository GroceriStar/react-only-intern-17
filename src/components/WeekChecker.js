import React, { Component } from 'react';

class WeekChecker extends Component {



  render (){

    let date = new Date;
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let prefixes = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

    return <h2>Which Week: {prefixes[0 | date.getDate() / 7] + ' ' + days[date.getDay()]}</h2>
  }
}

export default WeekChecker;
