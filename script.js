
$(document).ready(function () {
    var x = localStorage.getItem('notes');
    document.getElementsByClassName('schedule').innerHTML = x;
      
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // var curTime = parseInt(moment().format('HH'));
    var curTime = 10;

    var times = ['9AM', '10AM', '11AM', '12PM', '1PM','2PM','3PM','4PM','5PM'];
   
    for (let i = 0; i < times.length; i++) {
        $(".container").append("<div class='input-group input-group-lg hour-container'></div>");
        $(".container").append("<div class='input-group-text hour' id='inputGroup-sizing-lg'>" + times[i] + "</div>");
        $(".container").append("<input type='text' class='form-control schedule' aria-label='Sizing example input' aria-describedby='inputGroup-sizing-lg'>");
        $(".container").append("<div class='button-container input-group-append'></div>");

        // var createBtn = document.createElement("button");
        // createBtn.setAttribute("type", "button");
        // createBtn.setAttribute("class", "btn btn-info");
        // createBtn.innerHTML = "Save";

        // buttonContainer.appendChild(createBtn);
        $(".button-container").add("<button type='button' class='btn btn-info'>Save</button>");
        
        var timeNum = parseInt(times[i].slice(0, times[i].length - 2));
        if(timeNum >= 1 && timeNum <= 5){
            timeNum += 12;
        }
        console.log(timeNum);
        console.log(curTime);
        
        if(timeNum < curTime){
            console.log('GREY');
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

    $('.schedule').text(localStorage.getItem('notes'));
    $('button').click(function(){
        localStorage.setItem('notes',$('input').val());
        $('.schedule').text($('input').val());
    })

    // if(localStorage.getItem('schedule') === ''){
    //     $('input').addClass('future');
    // }







})


