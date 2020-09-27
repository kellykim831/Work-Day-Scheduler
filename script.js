$(document).ready(function () {
    var x = localStorage.getItem('input');
    document.getElementsByClassName('schedule').innerHTML = x;
      
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    var curTime = parseInt(moment().format('HH'));
    // var curTime = 10; just for testing.

    // Create a counter and set default to 1 to separately identify the schedule class
    var counter = 1;
    var times = ['9AM', '10AM', '11AM', '12PM', '1PM','2PM','3PM','4PM','5PM'];
   
    for (let i = 0; i < times.length; i++) {
        // Create a variable to name a schedule class with the counter 
        var scheduleId = "schedule" + counter;

        // HTML that contains the hour-container, hour, the schedule input, and the save button.
        var html = "<div class='input-group input-group-lg hour-container'><div class='input-group-text hour' id='inputGroup-sizing-lg'>" + times[i] + "</div><input type='text' class='form-control " + scheduleId + "' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-lg'><button type='button' class='saveBtn'>Save</button></div>"
        $(".container").append(html);

        // This var will remove the last 2 characters of times[i] (the AM or PM characters)
        // If the timeNum is between 1PM and 5PM, make it 24 hour time
        var timeNum = parseInt(times[i].slice(0, times[i].length - 2));
        if(timeNum >= 1 && timeNum <= 5){
            timeNum += 12;
        }

        // Change the colors of the schedule input but adding a past, future, or present class
        if(timeNum < curTime){
            //set css style
            $("."+scheduleId).addClass("past");
        } else if(timeNum > curTime){
            //set a different style
            $("." + scheduleId).addClass("future");
        } else {
            //set final style
            $("."+scheduleId).addClass("present");
        }

        // Counter will increase by 1 and continue in loop
        counter++;
    }


    var saveButton = $(".saveBtn");

    saveButton.on("click", function(){
        var notes = $(this).prev().val();
        var key = $(this).parent().find(".hour").text();

        localStorage.setItem(key,notes);
        
    });

    $("input").each(function(){

        var key = $(this).prev().text();
        var savedNotes = localStorage.getItem(key);
        $(this).val(savedNotes);
    })















    // $('.schedule').text(localStorage.getItem('input'));
    // $('button').click(function(){
    //     localStorage.setItem('input',$('input').val());
    //     $('.schedule').text($('input').val());
    // })

    // if(localStorage.getItem('schedule') === ''){
    //     $('input').addClass('future');
    // }
});

