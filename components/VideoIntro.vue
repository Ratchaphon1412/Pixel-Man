<template>
  <div>
    <video ref="intro" autoplay loop muted playsinline>
      <source :src="videoPath" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoIntro",
  mounted() {
    const video = this.$refs.intro;
    video.playbackRate = this.speedVideo;
  },
  props: {
    videoPath: String,
    speedVideo: Number,
  },
};
</script>

<style scoped>
video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
