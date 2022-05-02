module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],

  darkMode: "class",
};
