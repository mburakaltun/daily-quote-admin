import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import FontAwesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import all icon sets (solid, regular, brands)
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
