<template>
  <section class="overflow-hidden">
    <div class="relative overflow-hidden w-full h-screen">
      <VideoIntro
        videoPath="https://firebasestorage.googleapis.com/v0/b/pixel-man-b2216.appspot.com/o/MainLandingVideo-Pixel-Man.mp4?alt=media&token=ead8ed81-598a-4c13-a482-f29cc3bdcf32"
        :speedVideo="speedVideo"
      />

      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed js-show-on-scroll"
        style="background-color: rgba(0, 0, 0, 0.3)"
      >
        <div class="flex justify-center items-center h-full">
          <div
            class="text-center text-white px-8 md:px-12 lg:w-1/2 md:w-2/3 sm:w-2/3 xs:w-2/3"
          >
            <h1
              class="md:text-4xl text-3xl font-xs font-pixelletMedium tracking-tight mb-6"
            >
              Pixel Man
            </h1>
            <Logo class="h-12" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      speedVideo: 2.5,
    };
  },
};
</script>
