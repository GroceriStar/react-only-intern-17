import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MonthChecker extends Component {

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

  // let month = months.forEach(function(element){
  //                               console.log("element: ", element);
  //                               for(let i = 0; i < element.length; i++){
  //                                   if(element[0][i] === currentMonth){
  //                                     return element[0][i]
  //                                   }
  //                               }
  //                             });
  // // console.log("months length: ", e[0].length)
  // let day = months.forEach(function(element){
  //                               for(let i = 0; i < months[1].length; i++){
  //                                   if(element[1][i] === currentMonth){
  //                                     return element[1][i]
  //                                   }
  //                               }
  //                             });

  render() {

  let currentMonth = new Date().getMonth();

  return <div>
            <h1>Current Month</h1>
            <Calendar
              value={this.getMonthName(currentMonth)}
            />
           </div>;

  }
};

export default MonthChecker;
