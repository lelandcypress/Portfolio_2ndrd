$("#aboutBtn").on("click", function () {
  $("#about-me").show();
  $("#projects").hide();
  $("#contact-me").hide();
  $("#skills").hide();
});

$("#skillsBtn").on("click", function () {
  $("#about-me").hide();
  $("#projects").hide();
  $("#contact-me").hide();
  $("#skills").show();
});

$("#projectBtn").on("click", function () {
  $("#about-me").hide();
  $("#projects").show();
  $("#contact-me").hide();
  $("#skills").hide();
});

$("#contactBtn").on("click", function () {
  $("#about-me").hide();
  $("#projects").hide();
  $("#contact-me").show();
  $("#skills").hide();
});
