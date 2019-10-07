"use strict";

$(document).ready(function() {
  let color = "white";
  $(".column").click(function() {
    $(this).prepend(`<div class="disc ${color}"></div>`);
    if (color === "red") {
      color = "white";
    } else {
      color = "red";
    }
  });
});
