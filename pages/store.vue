<template>
    <NuxtLayout>
        <Search />

        <div class="max-w-[1200px] h-[300px] w-full m-auto py-8 relative">
            <img :src="slides[currentIndex].url"  class="w-full h-full rounded-2xl bg-no-repeat bg-cover">
        </div>

        <div class="gird gird-cols-3 gap-8 py-8 container mx-auto bg-black">
            <div v-for="n in 6"
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 inline-block">
                <a href="#">
                    <img class="rounded-t-lg" src="@/assets/images/example-shirt.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                        acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
    </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue';
let slides = ref([]);

slides = [
    {
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
    },
    {
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
    },
    {
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
    },
    {
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
    },
    {
        url: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
    }
];

let currentIndex = ref(0);

// const prevSlide = () => {
//     const isFirstSlide = currentIndex.value === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex.value - 1;
//     currentIndex.value = newIndex;
// }

const nextSlide = () => {
    const isLastSlide = currentIndex.value === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex.value + 1;
    currentIndex.value = newIndex;
}

setInterval(function() {
  // Code to be executed every 1 second
  nextSlide()
}, 1000);

</script>