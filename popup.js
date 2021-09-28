const speedy = document.getElementById("faster");
const sped = document.getElementById("slower");
const reset = document.getElementById("reference");
const speed_limit = 10 // Max playback speed before cycling back
var speed = 1

function update_menu() {
    reset.innerText = concat(" Video Speed ",ToString(speed)," ");
}

speedy.addEventListener("click", ()=>{
    if(speed + 1 > speed_limit){
        speed = 1;
    }else{
        speed =+ 1;
        update_menu()
    }
})
sped.addEventListener("click", ()=>{
    if(speed - 1 < 1){
        speed = 10;
    }else{
        speed =- 1;
        update_menu();
    }
})
