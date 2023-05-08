module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
      // Adding PrelineUI
      'node_modules/preline/dist/*.js',
    ],
    theme: {
      extend: {},
    },
    plugins: [
        // Adding PrelineUI
        require('preline/plugin'),
    ],
  }