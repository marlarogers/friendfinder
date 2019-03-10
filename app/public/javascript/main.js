$(document).ready(function() {
    console.log( "ready!" );


$("#submit").click(function(){
    var q1 = $("#question1").val();
    var q2 = $("#question2").val();
    var q3 = $("#question3").val();
    var q4 = $("#question4").val();
    var userAnswers = {
        q1, 
        q2,
        q3,
        q4
    }
    console.log(userAnswers);

    
})


var currentURL = window.location.origin;

$.post(currentURL + "/api/friends", userAnswers, function() {
    console.log("submitted!")
});

});


// use AJAX to make a post request. Inside post request pass var userAnswers
// set up instructions for a post request
// server is going to get the userAnswers in the req (req.body). Compare scores to friends