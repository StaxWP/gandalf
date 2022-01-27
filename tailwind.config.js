module.exports = {
  prefix: "gan-",
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["'Open Sans'", "sans-serif"],
    },
    extend: {
      boxShadow: {
        top: "0px -4px 6px -1px rgb(0 0 0 / 0.1), 0px -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      transitionProperty: {
        width: "width",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
