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

//Resets the game after a win or loss

    function reset() {
        randNum = Math.floor(Math.random()* 101 + 19);
        $("#randNumber").text(randNum);
        pinkGem = Math.floor(Math.random() * 11 + 1);
        blueGem = Math.floor(Math.random() * 11 + 1);
        yellowGem = Math.floor(Math.random() * 11 + 1);
        greenGem = Math.floor(Math.random() * 11 + 1);
        totalPoints = 0;
        $("#userScore").text("");
    } 

//Adds the value of the pink crystal and prints to the DOM

    $("#pink").on("click", function() {
        totalPoints = totalPoints + pinkGem;
        $("#userScore").text(totalPoints);

    if (totalPoints === randNum) {
        win++;
        $("#winCount").text(win);
        reset();

    } else if (totalPoints > randNum) {
        loss++;
        $("#lossCount").text(loss);
        reset();
        }
    });

//Adds the value of the blue crystal and prints to the DOM

    $("#blue").on("click", function() {
        totalPoints = totalPoints + blueGem;
        $("#userScore").text(totalPoints);

    if (totalPoints === randNum) {
        win++;
        $("#winCount").text(win);
        reset();

    } else if (totalPoints > randNum) {
        loss++;
        $("#lossCount").text(loss);
        reset();
        }
    });

//Adds the value of the yellow crystal and prints to the DOM

    $("#yellow").on("click", function() {
        totalPoints = totalPoints + yellowGem;
        $("#userScore").text(totalPoints);

    if (totalPoints === randNum) {
        win++;
        $("#winCount").text(win);
        reset();

    } else if (totalPoints > randNum) {
        loss++;
        $("#lossCount").text(loss);
        reset();
        }
    });

//Adds the value of the green crystal and prints to the DOM

    $("#green").on("click", function() {
        totalPoints = totalPoints + greenGem;
        $("#userScore").text(totalPoints);

    if (totalPoints === randNum) {
        win++;
        $("#winCount").text(win);
        reset();

    } else if (totalPoints > randNum) {
        loss++;
        $("#lossCount").text(loss);
        reset();
        }
    });

});





