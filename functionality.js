$(document).ready(function(){
	var move = 1;
	var play = true;

	// on clicking the each cell on the table an 'o' or 'x' should appear on the cell

	$('#board tr td').click(function(){
		if ($(this).text() == '' && play) {
			if (move % 2 == 1) {
				$(this).append('X');
				$(this).css('color', '#61892f');
			} else {
				$(this).append('O');
				$(this).css('color', '#e85a4f');
			}
			move++;

			//check weather x's or o's win by calling checkForWinner()

			if (checkForWinner() != -1 && checkForWinner() != '') {
				if (checkForWinner() == 'X') {
					$('body').append(
						'<div class="winner"><span>Winner</span>X</div><button onclick="location.reload();" id="reload">Play Again</button>'
					);
					$('.winner').css('background-color', '#61892f');
					$('#reload').css('color', '#61892f');
				} else {
					$('body').append(
						'<div class="winner"><span>Winner</span>O</div><button onclick="location.reload();" id="reload">Play Again</button>'
					);
					$('.winner').css('background-color', '#e85a4f');
					$('#reload').css('color', '#e85a4f');
				}
				if ((play = false)) {
					$('body').append(
						'<div class="winner"><span>draw</span>O</div><button onclick="location.reload();" id="reload">Play Again</button>'
					);
					$('.winner').css('background-color', '#e85a4f');
					$('#reload').css('color', '#e85a4f');
				}
			}
		}
	});

	// Function for checking all the winning possibilities

	function checkForWinner(){
		var space1 = $('#board tr:nth-child(1) td:nth-child(1)').text();
		var space2 = $('#board tr:nth-child(1) td:nth-child(2)').text();
		var space3 = $('#board tr:nth-child(1) td:nth-child(3)').text();
		var space4 = $('#board tr:nth-child(2) td:nth-child(1)').text();
		var space5 = $('#board tr:nth-child(2) td:nth-child(2)').text();
		var space6 = $('#board tr:nth-child(2) td:nth-child(3)').text();
		var space7 = $('#board tr:nth-child(3) td:nth-child(1)').text();
		var space8 = $('#board tr:nth-child(3) td:nth-child(2)').text();
		var space9 = $('#board tr:nth-child(3) td:nth-child(3)').text();
		// check rows
		if (space1 == space2 && space2 == space3) {
			return space3;
		} else if (space4 == space5 && space5 == space6) {
			return space6;
		} else if (space7 == space8 && space8 == space9) {
			return space9;
		} else if (space1 == space4 && space4 == space7) {
			// check columns
			return space7;
		} else if (space2 == space5 && space5 == space8) {
			return space8;
		} else if (space3 == space6 && space6 == space9) {
			return space9;
		} else if (space1 == space5 && space5 == space9) {
			// check diagonals
			return space9;
		} else if (space3 == space5 && space5 == space7) {
			return space7;
		} else if (space1 && space2 && space3 && space4 && space5 && space6 && space7 && space8 && space9) {
			// no winner for draw
			return (play = false);
		}
		return -1;
	}
});
