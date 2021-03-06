/* Baddie2 - Assignment */
// You should start by uncommenting blocks of code or functions that are needed for the assignment
// Follow the instructions given for each of these blocks
// After that you can start doing the assigments
// Assignment-sections start like this:
//		// -------------------------------------------
//		// ASSIGNMENT x
//
// In each section there will be INSTRUCTIONS on what to fill out
// Each INSTRUCTION comment will start with "A.", like this:
//		// A. This is an instruction
// If it's a extra assignment, the instruction starts with "E.":
//		// E. This is an instruction for an extra assingment
// In most cases, you have to fill in rows which are left blank after the INSTRUCTION comment
//		// A. Assign value to variable x
//
// This could for example be filled out like this:
//		// A. Assign value to variable x
//		x = 42;
// PLEASE note that the INSTRUCTION can be to fill a whole BLOCK of code, not just one row
// In some cases you have to fill in some missing parts of code or change parts of it
// It can look like this:
//		if(false)
// These should be filled out by replacing the boolean false with your code, for example:
//		if(x > 10)
// PLEASE follow any instructions given with the assignment
// They will tell you what code needs to be replaced
//
// Good luck!

(function(){
	'use strict';
	// HTML elements
	var baddie, content;
	// Numbers
	var step, left, top;

	// Get HTML elements that are to be used
	baddie = document.getElementById("baddie");
	content = document.getElementById("content");

	// Step value - how far does baddie go per step - his own size per step
	step = baddie.offsetWidth;
	console.log("Baddie will step " + step + " pixels each move");

	// Gets starting position of baddie
	left = baddie.offsetLeft;
	top = baddie.offsetTop;
	console.log("Baddie starts at " + left + "," + top);

	/* ------------------------------------------------------------------
	 * EVENTS
	 */
	// Triggers action on keypress
	document.addEventListener("keydown", function(event) {
		var key;
		// Gets what key was pressed as number
		key = event.keyCode || event.which;
		console.log(key + " was pressed");

		// Switch case to decide where baddie is to go
		// -------------------------------------------
		// ASSIGNMENT 1
		// Fill in the missing code in my switch case so that the baddie moves
		switch(key) {
			case 37:
				// A. Go right - Use moveBaddie-function (1a)
				
				// A. Turn baddie right - Use the given function (1b)
				
				break;
			case 38:
				// A. Go up - Use moveBaddie-function (1a)
				
				break;
			case 39:
				// A. Go left - Use moveBaddie-function (1a)
				
				// A. Turn baddie left - Use the given function (1b)
				
				break;
			case 40:
				// A. Go down - Use moveBaddie-function (1a)
				
				break;
			// ----------------------
			// EXTRA ASSIGNMENT
			// E. Create a case for spacebar key and use the function to jump (a)

			default:
				// Button was pressed but no action is to be performed
				// return this function so that the default button action is performed instead
				return true;
		}
		// Baddie action was performed - prevent button default
		event.preventDefault();
	});


	/* ------------------------------------------------------------------
	 * FUNCTIONS
	 */

	/**
	 * Wall collide check function
	 * Checks if baddie collided with content wall and recalculates left and top if it did
	 */
// Uncomment the function be able to use it (remove /* and */ before and efter function declaration)
/*
	var wallCollideBaddie = function() {
		var max, collided;
		console.log("Checking if baddie collided with the content walls");
		
		// Assume that baddie did not collide at first
		collided = false;

		// --------------------------------------------
		// ASSINMENT 2
		// Fill out the missing parts accordingly so that the baddie doesn't move outside of the content
		// A. left wall collide check - check if left outside content (2a)
		//		Remove false and add your own check
		if(false) {
			// A. Reset left so that baddie doesn't move outside content (2b)
			
			collided = true;
			console.log("Baddie collided with left wall");
		}
		// A. top wall collide check - check if top is outside content (2a)
		//		Remove false and add your own check
		if(false) {
			// A. Reset top so that baddie doesn't move outside content (2b)

			collided = true;
			console.log("Baddie collided with top wall");
		}
		// A. right wall collide check (2c)
		//		max will be the width of content (tip: use getSize example)
		//		Change max value from 0 to that of content width
		max = 0;
		if(left + baddie.offsetWidth > max) {
			// A. Reset left so that baddie doesn't move outside of the content (2c)
			left = max - baddie.offsetWidth;
			collided = true;
			console.log("Baddie collided with right wall");
		}
		// A. bottom wall collide check (2c)
		//		max value will be the height of content (tip: use getSize example)
		//		Change max value from 0 to that of content height
		max = 0;
		if(top + baddie.offsetHeight > max) {
			// A. Reset top so that baddie doesn't move outside of the content (2c)
			top = max - baddie.offsetHeight;
			collided = true;
			console.log("Baddie collided with bottom wall");
		}

		// Return if baddie collided
		return collided;
	};
*/

	/**
	 * Move baddie function
	 * Moves baddie in the given directions where directions are given as:
	 * -1 (opposite), 0 (none), 1 (same direction)
	 * Example to move left (go left, no top movement): moveBaddie(1, 0)
	 */
// Uncomment the function be able to use it (remove /* and */ before and efter function declaration)
/*
	var moveBaddie = function(moveLeft, moveTop) {
		// Get new baddie positon by getting current one and adding step and direction
		left = baddie.offsetLeft + moveLeft*step;
		top = baddie.offsetTop + moveTop*step;
		console.log("Baddie wants to got to " + left + "," + top);

		// --------------------------------------------
		// ASSINMENT 3
		// A. Check for wall collision - use given function
		// 		Change null to the function call
		var collided = null;

		// Move baddie to its new position
		baddie.style.left = left + "px";
		baddie.style.top = top + "px";
		console.log("Baddie went to " + left + "," + top);

		// return if baddie collided - does not have to be used
		return collided;
	};
*/

	/**
	 * Turn functions for left and right 
	 * Just changes the class name
	 */
// Uncomment the functions be able to use it (remove /* and */ before and efter function declaration)
/*
	// Turn baddie image right - transform handled in style.css
	var turnRight = function() {
		baddie.className = "baddie-right";
	};
	// Turn baddie image left - transform handled in style.css
	var turnLeft = function() {
		baddie.className = "baddie-left";
	};
*/

	/**
	 * Jump function
	 * Move baddie up and then down again to make him appear to be jumping
	 */
// Uncomment the function be able to use it (remove /* and */ before and efter function declaration)
/*
	var jump = function() {
		// --------------------------------------------
		// EXTRA ASSIGNMENT
		// Make baddie jump up and then come down again
		// E. Move baddie up (b)

		// E. If he did not collide when moving (hindering the jump)
		//		move him back down after a set amount of time (c)
		// Tip: Use the setTimeout-function to set a timer
		
	};
*/

}());