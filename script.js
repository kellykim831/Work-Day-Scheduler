
$(document).ready(function () {

   
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    var curTime = parseInt(moment().format('HH'));

    var times = ['9AM', '10AM', '11AM', '12PM', '1PM','2PM','3PM','4PM','5PM'];
   
    for (let i = 0; i < times.length; i++) {
        $(".container").append("<div class='input-group input-group-lg hour-container'></div>");
        $(".container").append("<div class='input-group-text hour' id='inputGroup-sizing-lg'>" + times[i] + "</div>");
        $(".container").append("<div class='form-control schedule'>Schedule</div>");
        // $(".hour-container").append("<div class='button-container input-group-append'></div>");
        // $(".button-container").append("<button type='button' class='btn btn-info'>Save</button>");
        
        var timeNum = parseInt(times[i].slice(0, times[i].length - 2));
        if(timeNum >= 1 && timeNum <= 5){
            timeNum += 12;
        }
        console.log(timeNum);
        console.log(curTime);

        if(timeNum < curTime){
            //set css style
            $(".schedule").css("background-color", "grey");
        } else if(timeNum > curTime){
            //set a different style
            $(".schedule").css("background-color", "green");
        } else {
            //set final style
            $(".schedule").css("background-color", "red");
        }
    }
})

