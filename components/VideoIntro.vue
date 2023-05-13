<template>
  <div>
    <video ref="intro" autoplay loop muted playsinline>
      <source
        src="@/assets/video/pexels-matthias-groeneveld-4306405-3840x2160-24fps.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoIntro",
  mounted() {
    const video = this.$refs.intro;
    video.playbackRate = 2.5;
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
