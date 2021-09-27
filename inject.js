function fuckedpuzzle()
  {
    speed = 2 // Change this to the speed (eg 2 for 2x speed)
    video = document.querySelector('video')
    Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'playbackRate').set.call(video, speed)
    Object.defineProperty(video, 'playbackRate', { writable: false })
  }
