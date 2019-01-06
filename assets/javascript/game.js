//Variables 
var jerry = Math.floor(Math.random()* 10);
var george = Math.floor(Math.random()* 8);
var elaine = Math.floor(Math.random()* 12);
var kramer = Math.floor(Math.random()* 5);

var win = 0;
var lose = 0; 
var total = 0;

var randomNumber = Math.floor(Math.random() * 120);

//Placeholder Text
$(".random-number").text(randomNumber);
$(".win").text(win);
$(".lose").text(lose);

//click functions 
$(".jerry").on("click", function(){
    total += jerry;
    $(".total").text(total);
    play ();
})

$(".george").on("click", function(){
    total += george;
    $(".total").text(total);
    play ();
})

$(".elaine").on("click", function(){
    total += elaine;
    $(".total").text(total);
    play ();
})

$(".kramer").on("click", function(){
    total += kramer;
    $(".total").text(total);
    play ();
})

// Gameplay

function play (){
    if (total > randomNumber) {
    alert ("You Lose. Game over!");
    lose++;
    $(".lose").text(lose);
    start ();
    }

    else if (total === randomNumber) {
    alert ("You win! Welcome to the crew!");
    win++;
    $(".win").text(win);
    start ();
    }
}

function start(){
    total = 0;
    $(".total").text(total);
    randomNumber = Math.floor(Math.random() * 120);
    $(".random-number").text(randomNumber);
}

