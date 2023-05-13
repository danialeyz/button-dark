/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "moon-anim": "moon-anim 1s ease-in-out infinite",
        button: "button 0.5s ease-out  infinite",
      },
      keyframes: {
        "moon-anim": {
          "0%": { opacity: "1", transform: " translateX(0px)" },
          "100%": {
            opacity: "0",
            transform: " translateX(-60px) rotate(200deg)",
          },
        },
      },
      plugins: [],
    },
  },
};
