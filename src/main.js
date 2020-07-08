import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as $ from 'jquery'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faJs, faVuejs, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faDownload, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import MarqueeText from 'vue-marquee-text-component'
// import SvgVue from 'svg-vue';
// Vue.use(SvgVue);

library.add(
  faJs, faVuejs, faLinkedin, faArrowUp,
  faDownload, faFileDownload
  )

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
Vue.component('marquee-text', MarqueeText)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  store,
  $,
  render: h => h(App),
  MarqueeText
}).$mount('#app')
