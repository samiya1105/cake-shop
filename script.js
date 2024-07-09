function toggletheme(){
    var ThemeColor=document.querySelector('body');
    var bodyClr = ThemeColor.style.backgroundColor;
    var logo=document.querySelector('.logo-clr');
    if ( bodyClr=== "black") {
        ThemeColor.style.backgroundColor = "white";
        ThemeColor.style.color = "black";
        logo.style.color = "black";
        // for(var i = 0; i < logo.length; i++){
        //   logo[i].style.backgroundColor = '#f4f4f4';
        // }     
    } else {
        ThemeColor.style.backgroundColor = "black";
        ThemeColor.style.color = "white";
        logo.style.color = "white";
    }
}
