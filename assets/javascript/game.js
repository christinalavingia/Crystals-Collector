    $(document).ready(function() {

//Generates a random number between 19 and 120 on page load for the user to hit and prints it to the DOM
    
    var randNum = Math.floor(Math.random()* 101 + 19);
    $("#randNumber").text(randNum);


//Sets variables for game results

    var loss = 0;
    var win = 0;
    var totalPoints = 0;


//Generates a random value between 1 and 12 for each crystal on page load

    var pinkGem = Math.floor(Math.random() * 11 + 1);
    var blueGem = Math.floor(Math.random() * 11 + 1);
    var yellowGem = Math.floor(Math.random() * 11 + 1);
    var greenGem = Math.floor(Math.random() * 11 + 1);

    console.log(pinkGem);

//Adds the value of each crystal clicked and prints to the DOM

    $("#pink").on("click", function() {
        totalPoints = totalPoints + pinkGem;
        $("#userScore").text(totalPoints);
    });

    $("#blue").on("click", function() {
        totalPoints = totalPoints + blueGem;
        $("#userScore").text(totalPoints);
    });

    $("#yellow").on("click", function() {
        totalPoints = totalPoints + yellowGem;
        $("#userScore").text(totalPoints);
    });

    $("#green").on("click", function() {
        totalPoints = totalPoints + greenGem;
        $("#userScore").text(totalPoints);
    });

//Sets wins if the random number equals the total value of the user clicks

    if (totalPoints === randNum) {
        win++;
        $("#winCount").text(win);
        randNum = Math.floor(Math.random()* 101 + 19);
        var pinkGem = Math.floor(Math.random() * 11 + 1);
        var blueGem = Math.floor(Math.random() * 11 + 1);
        var yellowGem = Math.floor(Math.random() * 11 + 1);
        var greenGem = Math.floor(Math.random() * 11 + 1);
    } else if (totalPoints > randNum) {
        loss++;
        $("#lossCount").text(loss);
        randNum = Math.floor(Math.random()* 101 + 19);
        var pinkGem = Math.floor(Math.random() * 11 + 1);
        var blueGem = Math.floor(Math.random() * 11 + 1);
        var yellowGem = Math.floor(Math.random() * 11 + 1);
        var greenGem = Math.floor(Math.random() * 11 + 1);
        }
    });





