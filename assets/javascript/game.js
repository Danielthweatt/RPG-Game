'use strict';

// variables

let gameStatusTracker = 0;
let character;
let opponent;
let characterStats;
let opponentStats;
let characterHealth;
let opponentHealth;
let characterAttack;
let opponentCounter;
let originalCharacterAttack;
let wins = 0;

// function calls

$('#maceWindu').click(function() {
    if (gameStatusTracker === 0) {
        $('#maceWindu').empty();
        $('#character').append('<img src="./assets/images/download(2).jpg" alt="Mace Windu" class="img-responsive"><p id="mWStats" class="text-center">Mace Windu 120</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        character = 'Mace Windu';
        characterStats = '#mWStats'
        characterHealth = 120;
        characterAttack = 8;
        originalCharacterAttack = characterAttack;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#maceWindu').empty();
        $('#opponent').append('<img src="./assets/images/download(2).jpg" alt="Mace Windu" class="img-responsive"><p id="mWStats" class="text-center">Mace Windu 120</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        $('#instructions').text('Other Opponents:');
        opponent = 'Mace Windu';
        opponentStats = '#mWStats'
        opponentHealth = 120;
        opponentCounter = 18;
        gameStatusTracker += 1;
        if (wins === 2) {
            $('#instructions').empty();
        };
    };
});

$('#yoda').click(function() {
    if (gameStatusTracker === 0) {
        $('#yoda').empty();
        $('#character').append('<img src="./assets/images/h1ferMj9-720.jpg" alt="Yoda" class="img-responsive"><p id="yStats" class="text-center">Yoda 100</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        character = 'Yoda';
        characterStats = '#yStats';
        characterHealth = 100;
        characterAttack = 15;
        originalCharacterAttack = characterAttack;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#yoda').empty();
        $('#opponent').append('<img src="./assets/images/h1ferMj9-720.jpg" alt="Yoda" class="img-responsive"><p id="yStats" class="text-center">Yoda 100</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        $('#instructions').text('Other Opponents:');
        opponent = 'Yoda';
        opponentStats = '#yStats';
        opponentHealth = 100;
        opponentCounter = 23;
        gameStatusTracker += 1;
        if (wins === 2) {
            $('#instructions').empty();
        };
    };
});

$('#darthMaul').click(function() {
    if (gameStatusTracker === 0) {
        $('#darthMaul').empty();
        $('#character').append('<img src="./assets/images/download.jpg" alt="Darth Maul" class="img-responsive"><p id="dMStats" class="text-center">Darth Maul 120</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        character = 'Darth Maul';
        characterStats = '#dMStats';
        characterHealth = 120;
        characterAttack = 10;
        originalCharacterAttack = characterAttack;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#darthMaul').empty();
        $('#opponent').append('<img src="./assets/images/download.jpg" alt="Darth Maul" class="img-responsive"><p id="dMStats" class="text-center">Darth Maul 120</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        $('#instructions').text('Other Opponents:');
        opponent = 'Darth Maul';
        opponentStats = '#dMStats';
        opponentHealth = 120;
        opponentCounter = 12;
        gameStatusTracker += 1;
        if (wins === 2) {
            $('#instructions').empty();
        };
    };
});

$('#darthVadar').click(function() {
    if (gameStatusTracker === 0) {
        $('#darthVadar').empty();
        $('#character').append('<img src="./assets/images/download(1).jpg" alt="Darth Vadar" class="img-responsive"><p id="dVStats" class="text-center">Darth Vadar 100</p>');
        $('#instructions').text('Choose Your Opponent:');
        $('#instructions2').text('Choose Wisely');
        character = 'Darth Vadar';
        characterStats = '#dVStats';
        characterHealth = 100;
        characterAttack = 10;
        originalCharacterAttack = characterAttack;
        gameStatusTracker += 1;
    } else if (gameStatusTracker === 1) {
        $('#darthVadar').empty();
        $('#opponent').append('<img src="./assets/images/download(1).jpg" alt="Darth Vadar" class="img-responsive"><p id="dVStats" class="text-center">Darth Vadar 100</p>');
        $('#instructions2').text('Fight!');
        $('#status').text('Click on your opponent to attack.');
        $('#instructions').text('Other Opponents:');
        opponent = 'Darth Vadar';
        opponentStats = '#dVStats';
        opponentHealth = 100;
        opponentCounter = 25;
        gameStatusTracker += 1;
        if (wins === 2) {
            $('#instructions').empty();
        };
    };
});

$('#opponent').click(function() {
    if (gameStatusTracker === 2) {
        opponentHealth = opponentHealth - characterAttack;
        if (opponentHealth < 1) {
            $('#opponent').empty();
            wins += 1;
            if (wins === 3) {
                $('#instructions2').text('You win!');
                $('#status').text(`You attacked ${opponent} for ${characterAttack} damage. Click anywhere on the page to start over.`);
                setTimeout(function() {gameStatusTracker += 1;}, 100);
            } else {
                $('#instructions2').text(`You beat ${opponent}! Choose another opponent.`);
                $('#status').text(`You attacked ${opponent} for ${characterAttack} damage.`);
                characterAttack += originalCharacterAttack;
                gameStatusTracker -= 1;
            };
        } else {
            characterHealth = characterHealth - opponentCounter;
            if (characterHealth < 1) {
                $(`${opponentStats}`).text(`${opponent} ${opponentHealth}`);
                $('#character').empty();
                $('#instructions2').text('You lose!');
                $('#status').text(`You attacked ${opponent} for ${characterAttack} damage. ${opponent} counter attacked for ${opponentCounter} damage. Click anywhere on the page to start over.`);
                setTimeout(function() {gameStatusTracker += 1;}, 100);
            } else {
                $(`${opponentStats}`).text(`${opponent} ${opponentHealth}`);
                $(`${characterStats}`).text(`${character} ${characterHealth}`);
                $('#status').text(`You attacked ${opponent} for ${characterAttack} damage. ${opponent} counter attacked for ${opponentCounter} damage.`);
                characterAttack += originalCharacterAttack;
            };
        };
    };
});

$(document).click(function() {
    if (gameStatusTracker === 3) {
        $('#status').empty();
        $('#character').empty();
        $('#opponent').empty();
        $('#instructions2').empty();
        $('#maceWindu').empty();
        $('#yoda').empty();
        $('#darthMaul').empty();
        $('#darthVadar').empty();
        $('#instructions').text('Choose Your Character:');
        $('#maceWindu').append('<img src="./assets/images/download(2).jpg" alt="Mace Windu" class="img-responsive"><p id="mWStats" class="text-center">Mace Windu 120</p>');
        $('#yoda').append('<img src="./assets/images/h1ferMj9-720.jpg" alt="Yoda" class="img-responsive"><p id="yStats" class="text-center">Yoda 100</p>');
        $('#darthMaul').append('<img src="./assets/images/download.jpg" alt="Darth Maul" class="img-responsive"><p id="dMStats" class="text-center">Darth Maul 120</p>');
        $('#darthVadar').append('<img src="./assets/images/download(1).jpg" alt="Darth Vadar" class="img-responsive"><p id="dVStats" class="text-center">Darth Vadar 100</p>');
        gameStatusTracker = 0;
        wins = 0;
    };
});