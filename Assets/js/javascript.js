//the current day is displayed at the top of the calendar
var currentDay  = moment();
$("#currentDay").text(currentDay.format('dddd[,]MMMM Do'));

var hoursPerDay = 8;
var time = [];

function timeOneDay(){
    var formattedTime;
    for(i =0; i < hoursPerDay+1 ; i++){ //fill in all of the hours
        formattedTime = (moment().subtract(i-2, "hours")).format("hA");  //give the time in format X AM/PM
        time.unshift(formattedTime);  //add to beginning of array
    }                                //do this for all 24 hours
}
timeOneDay();
console.log(time);
time.forEach(element => {
    console.log(element)
});

$("#first").text(time[0]);
