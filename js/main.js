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
// show a resource tab by default
document.getElementById("default").click();
// filter through resources
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c === "all") c = "";
    // Adds the "show" class to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}
// show filtered elements
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}
// hide elements that are not selected
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// add active class to the current control button
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-filter");
        current[0].className = current[0].className.replace(" active-filter", "");
        this.className += " active-filter";
    });
}