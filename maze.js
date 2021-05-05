/*jslint browser: true*/ /*global  $*/

let loser = false;

$(document).ready(function () {
    $("div.boundary").mouseover(overBoundary);
    $("h2").mouseover(overBoundary);
    $("p").mouseover(overBoundary);
    $("div#start").click(startClick);
    $("div#end").click(overEnd);  
});

function overBoundary() {
    loser = true;
    $(this).addClass("youlose");
}

function startClick() {
    loser = false;
    location.reload();
}

function overEnd() {
    if (loser) {
        $("h2").text("Sorry, you lost. :[")
        
    } else {
        $("h2").text("You win! :]")
    }
}