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

