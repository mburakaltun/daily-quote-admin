import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import all icon sets (solid, regular, brands)
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

const options = {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    transition: "Vue-Toastification__fade",
};
app.use(Toast, options);

app.mount('#app')
