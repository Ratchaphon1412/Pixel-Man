// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    modules: ['@pinia/nuxt'],
    app:{
      head:{
        title:'Pixel Man',
        link:[
          {rel:'icon', type:'image/x-icon', href:'/logo.png'}
        ]
      }
    }
})
