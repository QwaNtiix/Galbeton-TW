/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gloock"],
      },
      backgroundImage: {
        first:
          "url('https://r4.wallpaperflare.com/wallpaper/712/767/582/building-concrete-construction-job-site-wallpaper-662adcf412388d5628437bb2b8ba8d84.jpg')",
      },
    },
  },
  plugins: [],
};
