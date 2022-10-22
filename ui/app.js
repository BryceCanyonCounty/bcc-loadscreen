const { createApp } = Vue;

createApp({
  data() {
    return {
      visible: true,
      timer: null,
      config: CONFIG,
      override: false,
      timeout: null,
      done: false,
      loading: false,
      elapsedtime: null,
      elapsedtimer: null,
      starttime: null
    };
  },
  mounted() {
    this.done = false
    this.loading = true

    this.timeout = setTimeout(() => {
      this.done = true
    }, this.config.loadtime.minimum)

    this.startCallback()

    this.starttime = Date.now()

    if (this.config.timeelapsed) {
      this.elapsedtimer = setInterval(() => {
        let d = Date.now() - this.starttime
  
        var msec = d;
  
        var hour = Math.floor(msec / 1000 / 60 / 60);
        msec -= hour * 1000 * 60 * 60;
        var min = Math.floor(msec / 1000 / 60);
        msec -= min * 1000 * 60;
        var sec = Math.floor(msec / 1000);
        msec -= sec * 1000;
  
  
        this.elapsedtime = `${hour != 0 ? hour + 'h ' : ''}${min != 0 ? min + 'm ' : ''}${sec}s`
      }, 1000);
    }

    // Set volume for the video
    if (this.config.video) {
      var vid = document.getElementById("videocomp");
      vid.volume = this.config.videovolume;
    }

    // Set volume for the audio
    if (this.config.audio) {
      var vid = document.getElementById("audiocomp");
      vid.volume = this.config.audiovolume;
    }
  },
  destroyed() {
    window.removeEventListener("message");

    this.yt = false;
    this.image = false;

    var iframe = element.querySelector("iframe");
    var video = element.querySelector("video");
    if (iframe) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if (video) {
      video.pause();
    }
  },
  computed: {
    cssvars() {
      return {
        "--color": "#fff",
        "--backgroundcolor": this.config.backgroundcolor,
        "--backgroundimage": this.config.imagesource,
        "--loadingcolor": this.config.loading.color,
      };
    },
  },
  methods: {
    onMessage(event) {
      if (event.data.action === "toggle") {
        this.visible = !this.visible;
      }
    },
    startCallback() {
      this.timer = setInterval(() => {
        fetch(`https://bcc-loadscreen-helper/isgameinitiated`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        })
          .then((resp) => resp.json())
          .then((resp) => {
            if (resp.online) {
              this.loading = false
              if (this.done) {
                this.visible = false;
                clearInterval(this.timer);
              }
            }

            if (resp.spacebar == true && this.config.loadtime.skip) {
                this.loading = false
                this.visible = false;
                clearInterval(this.timer);
                clearTimeout(this.timeout)
            }
          })
          .catch(e => {})
      }, 10000);
    },
  },
}).mount("#app");
