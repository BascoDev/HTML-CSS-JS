let logo = document.getElementsByClassName("logo-container");
let content = document.getElementsByClassName("logo-content");

for( let i = 0; i < logo.length; i++){
    logo[i].addEventListener("click", logoClick);
    content[i].addEventListener("click", contentClick);

    function logoClick(){
        if( content[i].style.visibility == "visible" ){
            content[i].style.visibility = 'hidden';
            content[i].style.opacity = '0';
            logo[i].style.visibility = 'visible';
            logo[i].style.opacity = '1';
            logo[i].style.transform = 'scale(1, 1)';
        }else{
            content[i].style.visibility = 'visible';
            content[i].style.opacity = '1';
            logo[i].style.visibility = 'hidden';
            logo[i].style.opacity = '0';
            logo[i].style.transform = 'scale(0.1, 0.1)';
        }
    }

    function contentClick(){
        if( content[i].style.visibility == "visible" ){
            content[i].style.visibility = 'hidden';
            content[i].style.opacity = '0';
            logo[i].style.visibility = 'visible';
            logo[i].style.opacity = '1';
            logo[i].style.transform = 'scale(1, 1)';
        }else{
            content[i].style.visibility = 'visible';
            content[i].style.opacity = '1';
            logo[i].style.visibility = 'hidden';
            logo[i].style.opacity = '0';
            logo[i].style.transform = 'scale(0.1, 0.1)';
        }
    }
}