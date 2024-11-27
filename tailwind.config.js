/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
      extend: {},
  },
  plugins: [
      require('tailwindcss-fluid'), // Add this line
  ],
};
