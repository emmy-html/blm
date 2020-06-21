// fades in content on load
$(document).ready(function () {
    $('.fade').fadeIn(1500).removeClass('fade');
});
// toggle color scheme switch
function toggle() {
    var element = document.body;
    var modeText = document.getElementById("toggle-description");
    var modeToggle = document.getElementById("mode-toggle").checked;
    element.classList.toggle("blackout-mode");
    if (modeToggle === false) {
    modeText.innerHTML = "Blackout Mode";
    } else {
        modeText.innerHTML = "Light Mode";
    }
}
// toggle the about section
$(".about").click(function() {
    $("#about").toggle();
})