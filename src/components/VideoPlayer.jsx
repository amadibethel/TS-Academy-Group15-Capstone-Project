
const VideoPlayer = () => {
  return (
    <video
  autoplay
  muted
  loop
  webkit-playsinline
  class="absolute inset-0 w-full h-full object-cover"
>
  <source
    src="https://youtu.be/z8aBZZnv6y8?si=2x-SzGdzXQitpFmb"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
  )
}

export default VideoPlayer