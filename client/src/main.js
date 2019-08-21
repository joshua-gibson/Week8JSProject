import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import { Icon }  from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
