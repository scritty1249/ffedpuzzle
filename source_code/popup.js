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
    youtube_handle = getFrame(video);

    chrome.scripting.executeScript(
    {
        target: { tabId: youtube_handle.tabId, frameid: youtube_handle.frameId},
        func: fuck_edpuzzle,
        args: [speed, video],
    },
    () => { ... });
}

const video = document.querySelector('video');
// Can be optimized to push HTML objects into a NodeList, making this entire stupid thing parsable with a for loop... but CTRL+C CTRL+V go brrr :D
speed1.addEventListener("click", ()=>{zoom_bitch(parseInt(speed1.innerText), video)});
speed2.addEventListener("click", ()=>{zoom_bitch(parseInt(speed2.innerText), video)});
speed3.addEventListener("click", ()=>{zoom_bitch(parseInt(speed3.innerText), video)});
speed4.addEventListener("click", ()=>{zoom_bitch(parseInt(speed4.innerText), video)});
speed5.addEventListener("click", ()=>{zoom_bitch(parseInt(speed5.innerText), video)});
speed6.addEventListener("click", ()=>{zoom_bitch(parseInt(speed6.innerText), video)});
