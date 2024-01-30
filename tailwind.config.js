// tailwind.config.js
module.exports = {
  // ...
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      }),
    },
  },
  
  variants: {
    extend: {},
  },
};
