// fades in content on load
$(document).ready(function () {
    $('.fade').fadeIn(1000).removeClass('fade');
});

// toggle color scheme switch
function toggle() {
    var modeText = document.getElementById("toggle-description");
    var modeToggle = document.getElementById("themeSwitch").checked;
    if (modeToggle) {
        modeText.innerHTML = "Blackout Mode";
    } else {
        modeText.innerHTML = "Light Mode";
    }
}
// NEW color theme switch
document.getElementById('themeSwitch').addEventListener('change', function(event){
    (event.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  });
var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
  };

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.setAttribute('data-theme', 'light');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}
// toggle the about section
$(".about").click(function() {
    $("#about").fadeToggle('linear');
})

// show a category tab by default
document.getElementById("default").click();
// date updated function
var dateDisplay = document.getElementById("date");
dateDisplay.innerHTML = "June 22nd, 2020";
// filter through resources
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterLink");
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
// testing nesting the function
function findTag(c) {
    filterSelection(c);
}