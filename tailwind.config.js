export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-background': '#16253b',
        'container-background': '#212a36',
        'app-text': '#ddd',
        'app-header': '#ddd',
        'input-background': '#ded5ca',
        'app-button-background' : '#207894',
        'app-button-hover-background' : '#175265',
        'input-focus-border': '#207894',
      },
    },
  },
  plugins: [],
}