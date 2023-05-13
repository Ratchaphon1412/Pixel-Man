<template>
  <nav class="fixed w-full z-10 border-gray-200 bg-black">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between ml-6 p-4"
    >
      <NuxtLink to="/" class="flex flex-row items-center justify-center">
        <Logo class="h-5" />
        <span
          class="self-center text-2xl font-pixelletMedium font-thin whitespace-nowrap text-white"
          >Pixel Man</span
        >
      </NuxtLink>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col justify-center items-center p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black border-gray-700"
        >
          <li>
            <a
              href="#"
              class="font-pixellet font-thin block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-yellow-300"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-pixellet font-thin block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-yellow-300"
              >Store</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-pixellet font-thin block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-yellow-300"
              >Gallery</a
            >
          </li>
          <li>
            <a
              href="#"
              class="font-pixellet font-thin block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 hover:text-yellow-300"
              >Contact</a
            >
          </li>
          <li>
            <button
              type="button"
              class="text-black font-pixellet bg-[#FFE135] font-thin focus:ring-4 focus:outline-none hover:text-[#3581D8] rounded-lg px-4 py-2 text-center mr-3 md:mr-0"
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
