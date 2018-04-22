/*--------------------\*
	CANVAS
\*--------------------*/
const canvas = document.querySelector('#canvas1');
const context = canvas.getContext('2d');

const dessin = [
	function dessin0() {
		//bas
		context.fillStyle = "#a4a4a4";
		context.fillRect(100,450,200,20);
	},

	function dessin1() {
		//gauche
		context.fillStyle = "#a4a4a4";
		context.fillRect(100,100,20,350);
	},

	function dessin2() {
		//haut
		context.fillStyle = "#a4a4a4";
		context.fillRect(100,100,100,20);
	},

	function dessin3() {
		//corde
		context.fillStyle = "#a4a4a4";
		context.fillRect(200,100,10,70);
	},

	function dessin4() {
		//equerre
		context.beginPath();
		context.moveTo(170,105);
		context.lineTo(105,170);
		context.lineWidth = 5;
		context.strokeStyle = "#a4a4a4";
		context.stroke();
	},

	function dessin5() {
		//tete
		context.beginPath();
		context.fillStyle="#FF55FF"
		context.arc(205, 190, 20, 0, 2 * Math.PI);
		context.fill();
	},

	function dessin6() {
		//corp
		context.fillStyle = "#FF55FF";
		context.fillRect(197.5,200,15,110);
	},

	function dessin7() {
		//bras gauche
		context.beginPath();
		context.moveTo(205,220);
		context.lineTo(160,270);
		context.lineWidth = 8;
		context.strokeStyle = "#FF55FF";
		context.stroke();
	},

	function dessin8() {
		//bras droit
		context.beginPath();
		context.moveTo(205,220);
		context.lineTo(250,270);
		context.lineWidth = 8;
		context.strokeStyle = "#FF55FF";
		context.stroke();
	},

	function dessin9() {
		//jambe gauche
		context.beginPath();
		context.moveTo(205,300);
		context.lineTo(160,350);
		context.lineWidth = 8;
		context.strokeStyle = "#FF55FF";
		context.stroke();
	},

	function dessin10() {
		//jambe droite
		context.beginPath();
		context.moveTo(205,300);
		context.lineTo(250,350);
		context.lineWidth = 8;
		context.strokeStyle = "#FF55FF";
		context.stroke();
	}
];

/*--------------------\*
	GAME
\*--------------------*/

// audio
const sonLetter = document.querySelector('.sonLetter');
const sonFail = document.querySelector('.sonFail');
sonFail.volume = 0.7;
const sonLoose = document.querySelector('.sonLoose');
const sonGameOver = document.querySelector('.sonGameOver');
const sonWin = document.querySelector('.sonWin');


// Initialisation
const mots = ["JAVASCRIPT", "RUBY", "INTERNET"];
const mot = mots[Math.floor(Math.random()*mots.length)];
let mdp = [];
for(var i = 0; i < mot.length; i++) { mdp.push('_'); }
let count = 0;
$('.wordContainer').html(mdp);

// Game
function game() {
	function runLetter() {
		let letter = $('#champText').val().toUpperCase();
		if(mot.includes(letter)) {
			for(let i = 0; i < mot.length; i++) {
				if(letter === mot[i]) {
					mdp[i] = mot[i];
					$('.wordContainer').html(mdp);
					sonLetter.play();
					if(mdp.join("") === mot) {
						$('.winBlock').show(2000).fadeIn(1000);
						sonWin.play();
					}
				}
			}
		}
		else {
			dessin[count]();
			sonFail.play();
			count++;
			if(count === 11) {
				$('.looseBlock').show(2000).fadeIn(1000);
				sonLoose.play();
				sonGameOver.play();
			}
		}
		$('#champText').val("");
	}
	runLetter();
}

$('#champText').keyup(function(e) {
   if(e.keyCode == 13) {
		 game();
	 }
});

$('#submit').on('click', function() {
	game();
});

$('.btnNewGame').on('click', function() {
	document.location.reload(false);
});
