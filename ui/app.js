const { createApp } = Vue;

createApp({
  data() {
    return {
      visible: true,
      timer : null,
      config: CONFIG
    };
  },
  mounted() {
    window.addEventListener("message", function (e) {
      console.log(e.data.eventName);
    });

    this.timer = setInterval(() => {
      fetch(`https://bcc-loadscreen-helper/isgameinitiated`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }).then(resp => resp.json()).then(resp => {
        if(resp.online) {
          this.visible = false
          clearInterval(this.timer)
        }
      });

      if (this.config.video) {
        var vid = document.getElementById("videocomp");
        vid.volume = this.config.videovolume;
      }
  
      if (this.config.audio) {
        var vid = document.getElementById("audiocomp");
        vid.volume = this.config.audiovolume;
      }
    }, 20000);
  },
  destroyed() {
    window.removeEventListener("message");

    this.yt = false
    this.image = false

    var iframe = element.querySelector( 'iframe');
    var video = element.querySelector( 'video' );
    if ( iframe ) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    if ( video ) {
      video.pause();
    }
  },
  computed: {
    cssvars() {
      return {
        '--color': '#fff',
        '--backgroundcolor': this.config.backgroundcolor,
        '--backgroundimage': this.config.imagesource,
        '--loadingcolor': this.config.loading.color
      }
    }
  },
  methods: {
    onMessage(event) {
      if (event.data.action === "toggle") {
        this.visible = !this.visible;
      }
    },
  },
}).mount("#app");
