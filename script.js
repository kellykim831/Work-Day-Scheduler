
$(document).ready(function () {

   
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    var curTime = moment().format('HH');
    console.log(curTime);

    var times = ['9AM', '10AM', '11AM', '12PM', '1PM','2PM','3PM','4PM','5PM']
   

})

