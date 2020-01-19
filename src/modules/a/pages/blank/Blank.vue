<template>
  <div>
    <video-player  class="video-player vjs-custom-skin" id="myVideo"
      ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
          @statechanged="playerStateChanged($event)"
          @play="onPlayerPlay($event)"
          @error="onError($event)"
      ></video-player>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          height: '490',
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        },
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>
