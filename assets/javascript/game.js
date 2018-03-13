'use strict';

// variables

let gameStatusTracker = 0;
let characterHealth;
let opponentHealth;
let characterAttack;
let opponentCounter;

$('#maceWindu').click(function() {
    if (gameStatusTracker === 0) {
        $('#maceWindu').empty();
        $('#character').append('<img src="./assets/images/download(2).jpg" alt="Mace Windu" class="img-responsive"><p id="mWStats" class="text-center">Mace Windu 100</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        characterHealth = 100;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#maceWindu').empty();
        $('#opponent').append('<img src="./assets/images/download(2).jpg" alt="Mace Windu" class="img-responsive"><p id="mWStats" class="text-center">Mace Windu 100</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        opponentHealth = 100;
        gameStatusTracker += 1;
    };
});

$('#yoda').click(function() {
    if (gameStatusTracker === 0) {
        $('#yoda').empty();
        $('#character').append('<img src="./assets/images/h1ferMj9-720.jpg" alt="Yoda" class="img-responsive"><p id="yStats" class="text-center">Yoda 100</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        characterHealth = 100;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#yoda').empty();
        $('#opponent').append('<img src="./assets/images/h1ferMj9-720.jpg" alt="Yoda" class="img-responsive"><p id="yStats" class="text-center">Yoda 100</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        opponentHealth = 100;
        gameStatusTracker += 1;
    };
});

$('#darthMaul').click(function() {
    if (gameStatusTracker === 0) {
        $('#darthMaul').empty();
        $('#character').append('<img src="./assets/images/download.jpg" alt="Darth Maul" class="img-responsive"><p id="dMStats" class="text-center">Darth Maul 100</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        characterHealth = 100;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#darthMaul').empty();
        $('#opponent').append('<img src="./assets/images/download.jpg" alt="Darth Maul" class="img-responsive"><p id="dMStats" class="text-center">Darth Maul 100</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        opponentHealth = 100;
        gameStatusTracker += 1;
    };
});

$('#darthVadar').click(function() {
    if (gameStatusTracker === 0) {
        $('#darthVadar').empty();
        $('#character').append('<img src="./assets/images/download(1).jpg" alt="Darth Vadar" class="img-responsive"><p id="dVStats" class="text-center">Darth Vadar 100</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        characterHealth = 100;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#darthVadar').empty();
        $('#character').append('<img src="./assets/images/download(1).jpg" alt="Darth Vadar" class="img-responsive"><p id="dVStats" class="text-center">Darth Vadar 100</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        opponentHealth = 100;
        gameStatusTracker += 1;
    };
});

$('#opponent').click(function() {
    if (gameStatusTracker === 2) {
        
    }
});

