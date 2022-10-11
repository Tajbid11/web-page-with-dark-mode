let mode = document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        mode.src='/pic/sun.png'
    }
    else{
        mode.src='/pic/moon.png'
    }
};

