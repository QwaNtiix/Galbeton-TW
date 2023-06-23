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
          "url('https://cdn.discordapp.com/attachments/1043641455643742208/1121819571926605934/161724273_123307499737155_4550365991362419331_n.png')",
      },
    },
  },
  plugins: [],
};
