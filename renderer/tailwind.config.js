module.exports = {
  content: [
    "./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: {
        b1: '#1F1F1F',
        b2: '#313131'
      },
      white: '#ffffff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      blue: {
        100: '#3185fc'
      },
      red: '#ff0000',
      green: {
        sage1: '#5C9C73',
        sage2: '#72B68A'
      },
      yellow: '#ffff00',
    },
    extend: {},
  },
  plugins: [],
  mode: 'jit',
};
