//The current day is displayed at the top of the calendar
var currentDay = moment();
console.log('day--->', currentDay)
var currentHour = moment().format('HH');
console.log('hour---->', currentHour)
$("#currentDay").text(currentDay.format('dddd[,]MMMM Do'));

var mainContainer = $('#root')
const saveIcon = "./images/save-regular.svg";
var hoursPerDay = 8;

// Create the elements to show time,text area and save button
for (var i = 9; i < 18; i++) {
    //create each row
    var rowEl = $('<div>');
    rowEl.attr('id', 'hour-' + i);
    rowEl.addClass('row time-block');
    //Make the background color based on current time 
    if (i < currentHour) {
        rowEl.addClass('past')
    } else if (i > currentHour) {
        rowEl.addClass('future')
    } else {
        rowEl.addClass('present')
    }


    mainContainer.append(rowEl);
    //Set the hours with format AM/PM
    var hourText = $('<div>');
    hourText.text(moment(i, "H HH").format("hA"));
    hourText.addClass('col-md-1 hour ');
    rowEl.append(hourText);

    //Set the text area whhere you type the task(s)
    var textAreaEl = $('<textarea>');
    textAreaEl.addClass('col-md-10 description');
    //Fill the previous task saved
  

    rowEl.append(textAreaEl);
    //Create a button with icon
    var buttonEl = $('<button>');
    buttonEl.addClass('btn saveBtn col-md-1 far fa-save saveIcon');
    buttonEl.attr('id', 'btn-' + i);
    rowEl.append(buttonEl);
}


//Save the task(s) when you click the save button on localStorage
for (var i = 9; i < 18; i++) {
    $("#btn-" + i).click(function (event) {
        event.preventDefault();
        parentEl = $(this).parent().get(0).id
        console.log(parentEl)
        var index = $(this).attr('id');
        console.log(index);
        var textStore = $("#" + parentEl).children("textarea").val();
        console.log(textStore);
        var hourTask = {
            hour: index,
            task: textStore
        }
        localStorage.setItem(parentEl, JSON.stringify(hourTask));

    });
}











