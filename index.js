function changeBG(color){
    document.body.style.backgroundColor = color;

    if(color == "#000000"){
        let text = document.getElementsByClassName('text');
        for(let i = 0; i<text.length; i++){
            text[i].style.color = "#ffffff";
        }
    }

    if(color == "#ffffff"){
        let text = document.getElementsByClassName("text");
        for(let i = 0; i<text.length; i++){
         text[i].style.color = "black";
        }
    }
}