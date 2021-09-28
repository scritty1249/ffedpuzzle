// Possibly optimizable, but too lazy to check, much less implement
const speed1 = document.getElementById("speed1");
const speed2 = document.getElementById("speed2");
const speed3 = document.getElementById("speed3");
const speed4 = document.getElementById("speed4");
const speed5 = document.getElementById("speed5");
const speed6 = document.getElementById("speed6");

function fuck_edpuzzle(playback, playing)
  {
    Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set.call(playing, playback)
    Object.defineProperty(playing, 'playbackRate', { writable: false })
  }

function zoom_bitch(speed, video)
{
    speed = parseInt(speed);
    video = document.querySelector('video');
    youtube_handle = getFrame(video);

    chrome.scripting.executeScript(
    {
        target: { tabId: youtube_handle.tabId, frameid: youtube_handle.frameId},
        func: fuck_edpuzzle,
        args: [speed, video],
    },
    () => { ... });
}

function update_menu() {
    reset.innerText = concat(" Video Speed ",ToString(speed)," ");
}

// Can be optimized to push HTML objects into a NodeList, making this entire stupid thing parsable with a for loop... but CTRL+C CTRL+V go brrr :D
speed1.addEventListener("click", ()=>{
    if(speed + 1 > speed_limit){
        speed = 1;
    }else{
        speed =+ 1;
        update_menu()
    }
})
