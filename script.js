function toggletheme(){
    var ThemeColor = document.body;
    if (ThemeColor.style.backgroundColor === "black") {
        ThemeColor.style.backgroundColor = "white";
        ThemeColor.style.color = "black";
    } else {
        ThemeColor.style.backgroundColor = "black";
        ThemeColor.style.color = "white";
    }
}

// Initialize with light theme
// document.body.style.backgroundColor = "white";
// document.body.style.color = "black";
// }

// document.getElementById("toggletheme").onclick = function() {
//     const currentTheme = document.body.getAttribute("data-theme");
//     if (currentTheme === "dark") {
//         setLightTheme();
//     } else {
//         setDarkTheme();
//     }
// };

// function setLightTheme() {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//     document.body.setAttribute("data-theme", "light");
// }

// function setDarkTheme() {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//     document.body.setAttribute("data-theme", "dark");
// }

// // Initialize with light theme
// setLightTheme();