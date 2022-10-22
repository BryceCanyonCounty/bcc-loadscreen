CONFIG = {
    image: true, // If you want an image background make this flag true (but make sure yt/video is false)
    imagesource: "url('nui://bcc-loadscreen/ui/assets/background.png')",
    backgroundcolor: "#4d4d4d",
    
    yt: false, //If you want a youtube video make this flag true (but make sure image/video is false)
    embed: "http://www.youtube.com/embed/4KPpWQ7XVO8?autoplay=1&loop=1&controls=0&mute=1", //Embed link to Youtube
    
    video: false, //If you want a local video make this flag true (but make sure image/yt is false)
    videosrc: "nui://bcc-loadscreen/ui/assets/video.mp4",
    videovolume: 0.0, //between 0-1
    
    audio: false,
    audiosrc: 'nui://bcc-loadscreen/ui/assets/music.mp3',
    audiovolume: 0.5, //between 0-1

    timeelapsed: true,

    loadtime: {
        minimum: 0, //miliseconds
        skip: false,
        lang: "Press Space to Skip Load Screen"
    },
    
    loading: {
        active: true, //Do you want the loading icon to show
        icon: "fadedots", // 'fadedots', 'linedots', 'circle'
        color: "#942626"
    }
}