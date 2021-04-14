//the current day is displayed at the top of the calendar
var currentDay = moment();
console.log('day--->', currentDay)
var currentHour = moment().format('HH');
console.log('hour---->', currentHour)
$("#currentDay").text(currentDay.format('dddd[,]MMMM Do'));














