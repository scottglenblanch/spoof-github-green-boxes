#!/usr/bin/env node

const datesStringList = require('../dates-to-fill.json');

Date.prototype.getMonthFormatted = function() {
  const monthsFormattedList = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]

  return monthsFormattedList[this.getMonth()];
}

Date.prototype.getDayOfWeekFormatted = function() {
  const daysOfWeekFormatted = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 
  ];

  return daysOfWeekFormatted[this.getDay()];
}


Date.prototype.getDateFormatted = function() {
    return `${this.getDayOfWeekFormatted()} ${this.getDate() + 1} ${this.getMonthFormatted()} ${this.getFullYear()} 07:07:07 UTC`;
}


datesStringList.map(dateString => new Date(dateString)).forEach(date => {
    console.log(date.getDateFormatted());
})


// Sat 27 Nov 2009 7:07:07 MDT