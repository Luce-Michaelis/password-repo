$(document).ready(function(){
 
    var password = "whats up doc"

 $("button").click(function(){
    var guess = $('#Looney').val();
    if (password === guess) {
           $("#bugs-bunny").append("Awesome dude");
    }  else { 
        console.log ('Sorry dude!');
    }
});

}); 