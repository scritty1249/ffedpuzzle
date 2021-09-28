const more_speed = document.getElementById("faster");
const speed_limit = "10" // Max playback speed before cycling back

more_speed.addEventListener("click", ()=>{

    if(more_speed.innerText === speed_limit){
        more_speed.innerText = ToString(ParseInt());
    }else{
        more_speed.innerText= "Red";
    }
})
