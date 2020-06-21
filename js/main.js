// fades in content on load
$(document).ready(function () {
    $('.fade').fadeIn(1000).removeClass('fade');
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
    $("#about").fadeToggle('linear');
})
// resources tabs
function openResource(evt, topic) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    // hide all tab content by default
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    // get all tab links and remove the active class
    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    // show the current tab and add an active class to the button that opened the tab
    document.getElementById(topic).style.display = "block";
    evt.currentTarget.className += " active";
}
// show a tab by default
document.getElementById("default").click();