CONFIG = {
    image: {
        active: true, // If you want an image background make this flag true (but make sure youtube/video is false)
        source: "url('nui://bcc-loadscreen/ui/assets/background.png')",
        backgroundcolor: "#4d4d4d",
    },
    video: {
        active: false, //If you want a local video make this flag true (but make sure image/youtube is false)
        source: "nui://bcc-loadscreen/ui/assets/video.mp4",
        looped: true, // If the video is not looped then the loadscreen will "close" when the video ends. otherwise it will loop until the loading is actually done.
        mute: true,
        volume: 0.5, //between 0-1
    },
    youtube: {
        active: false, //If you want a youtube video make this flag true (but make sure image/video is false)
        source: "4KPpWQ7XVO8",
        looped: false, // If the video is not looped then the loadscreen will "close" when the video ends. otherwise it will loop until the loading is actually done.
        mute: false,
        volume: 50 // 0 - 100
    },
    googledrive: {
        active: true, //If you want a youtube video make this flag true (but make sure image/video is false)
        source: "<YOUR VIDEO ID>", //ID of your google drive video. 1: Make the video shared with anyone with the link, then copy the link Example: https://drive.google.com/file/d/<YOUR VIDEO ID>/view
        looped: false, // If the video is not looped then the loadscreen will "close" when the video ends. otherwise it will loop until the loading is actually done.
        mute: false,
        volume: 0.5, //between 0-1
    },
    audio: {
        active: false,
        source: 'nui://bcc-loadscreen/ui/assets/music.mp3',
        volume: 0.5, //between 0-1
    },
    loadtime: {
        skip: true, //Skip will only occur after the main game has loaded (this cannot be skipped)
        lang: "Press Space to Skip Load Screen"
    },
    timeelapsed: true,
    loading: {
        active: true, //Do you want the loading icon to show
        icon: "fadedots", // Options: https://github.com/BryceCanyonCounty/bcc-loadscreen/wiki/Loading-Spinner-Options
        color: "#942626"
    }
}