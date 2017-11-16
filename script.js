/*
Program Name: Recipe Display Application 
Author: Jane Pietruszka
Date: November 17, 2017
Filename: script.js
*/

/* global $ */

//displays the next element after the current target function display(event) {
  $(event.currentTarget).next().fadeIn(“slow”);
   }//end of display
//attach event listener to h3 elements to invoke display function when clicked $("h3").click(display);
<script src="jquery-1.11.1.min.js"> </script>
<script src="script.js"> </script>