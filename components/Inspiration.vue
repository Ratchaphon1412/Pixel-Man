<template>
  <section class="w-full h-screen grid md:grid-cols-12 grid-cols-8 bg-black">
    <div class="grid md:col-start-4 md:col-span-6 col-start-2 col-span-6">
      <div class="flex flex-col justify-center items-center">
        <h1 class="font-pixellet text-4xl text-white mb-4">Inspiration</h1>
        <p class="font-pixellet text-base text-white">
          <Typed :options="options">
            <span class="text-yellow-400">> Pixel Man </span
            ><span class="typing"></span>
          </Typed>
          <!-- <span ref="textType"> </span> -->
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Typed } from "@duskmoon/vue3-typed-js";

import type { TypedOptions } from "@duskmoon/vue3-typed-js";
const speedVideo = 1;

const options: TypedOptions = {
  strings: [
    "What is the inspiration for Pixel Man?",
    `is more than just a clothing store - it's a nostalgic journey back
            to the 80s, where pixel art was king and video arcades were the
            ultimate destination. Our unique collection of t-shirts features
            vibrant and eye-catching pixel art designs that pay homage to the
            golden age of gaming. Whether you're a die-hard retro gamer or
            simply appreciate the bold and colorful style of the 80s, Pixel Man
            has something for everyone. With high-quality materials and a
            comfortable fit, our shirts are perfect for casual wear or making a
            statement at your next gaming convention. Show off your love for all
            things retro with Pixel Man - where pixel art meets fashion !`,
  ],

  typeSpeed: 20,
};
</script>
