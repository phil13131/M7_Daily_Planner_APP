var today = moment().format("dddd [|] LL [| Week] W");

// you can also use $("#currentDay").append(today); OR document.getElementById("currentDay").textContent = today;
$("#currentDay").text(today);

// moment.js
var now = new Date().getHours();

var timeblocks = Array.from(document.getElementsByTagName('textarea'));
console.log(timeblocks);

function getData(){
    for (var j = 0; j < localStorage.length; j++) {
      var keyNumbers = localStorage.key(j);
      timeblocks.forEach(function(item) {
        if (item.dataset.number == keyNumbers) {
        item.value = localStorage.getItem(keyNumbers)
        }
      })   
    }
}

getData();

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var notes = $(this).siblings("textarea").val();
    var rowHourActive = $(this).siblings("textarea").data("number");
    window.localStorage.setItem(rowHourActive, notes);
    
});

// you can also use: var timeblocks = [].slice.call(timeblocksHTML);


function statusTimeblock(){
    for (var i=0; i<timeblocks.length; i++) {
        var singleT = timeblocks[i];
        if (singleT.dataset.number == now) {
            singleT.classList.add("present");
        }
        if (singleT.dataset.number < now) {
            singleT.classList.add("past");
        }
        if (singleT.dataset.number > now) {
            singleT.classList.add("future");
        }  
    }  
}
statusTimeblock();



