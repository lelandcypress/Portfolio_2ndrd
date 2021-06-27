$("#aboutBtn").on("click", function () {
  $("#about-me").show();
  $("#projects").hide();
  $("#contact-me").hide();
});

$("#projectBtn").on("click", function () {
  $("#about-me").hide();
  $("#projects").show();
  $("#contact-me").hide();
});

$("#contactBtn").on("click", function () {
  $("#about-me").hide();
  $("#projects").hide();
  $("#contact-me").show();
});
