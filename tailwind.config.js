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
        'app-text': '#ccc',
        'app-header': '#ccc',
        'input-background': '#ded5ca',
        'app-button-background' : '#207894',
        'app-toggle-background' : '#207894',
        'app-button-hover-background' : '#175265',
        'app-button-danger-background' : '#b22020',
        'app-button-danger-hover-background' : '#942020',
        'app-li-hover-background' : '#175265',
        'input-focus-border': '#207894',
      },
    },
  },
  plugins: [],
}