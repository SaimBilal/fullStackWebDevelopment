var prevColor_h1;

$("h1").click(function () {
    $("h1").addClass("big-heading");
    $("h1").css("color", "red");
});

$("button").click(function () {
    $("h1").addClass("margin-50");
    $("h1").css("color", "blue");
});

$(document).keypress(function (e) {
    $("h1").text("You just pressed: " + e.key);
});

$("h1").on("mouseover", function () {
    prevColor_h1 = $("h1").css("color");
    $("h1").css("color", "brown");
});

$("h1").on("mouseout", function () {
    $("h1").css("color", prevColor_h1);
});

