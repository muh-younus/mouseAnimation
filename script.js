let button = document.querySelector("#btn");
let mode = "light";
button.addEventListener("onclick", ()=>{

    

    if(mode === "light"){

        mode = "dark";
    }
    else{
        mode = "light";
    }
});