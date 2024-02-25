import { createApp } from 'vue'
import App from './App.vue'

// - Style -
import './styleFolder/app.css'

// - Router -
import router from './router';

// - Icons -

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faHouseUser, faMagnifyingGlass, faMessage, faUserSecret, faUsers, faStar, faCamera} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUsers, faHouseUser, faMessage, faBars, faMagnifyingGlass, faStar, faCamera)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);
app.mount('#app');
