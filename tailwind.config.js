/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
      //  sans:['Pixellet'],
        pixellet: ['Pixellet'],
        pixelletMedium: ['PixelletMedium'],
        pixelletBold: ['PixelletBold'],
        pixelletItalic: ['PixelletItalic'],
        pixelletBoldItalic: ['PixelletBoldItalic'],
        pixelletCircle: ['PixelletCircle'],

      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

