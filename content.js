function fuckedpuzzle()
  {
    Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set.call(video, speed)
    Object.defineProperty(video, 'playbackRate', { writable: false })
  }

speed = 2 // Recommended limit 3x
video = document.querySelector('video')
youtube_handle = getFrame(video)

chrome.scripting.executeScript(
  {
    target: { tabId: youtube_handle.tabId, frameid: youtube_handle.frameId},
    func: fuckedpuzzle,
  },
  () => { ... });
