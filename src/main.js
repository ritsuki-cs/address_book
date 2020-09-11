import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7f2Pgq6SZibTyxMlAx_5M0-N6EmspJI8',
  authDomain: 'my-address-pj-c7c1a.firebaseapp.com',
  databaseURL: 'https://my-address-pj-c7c1a.firebaseio.com',
  projectId: 'my-address-pj-c7c1a',
  storageBucket: 'my-address-pj-c7c1a.appspot.com',
  messagingSenderId: '1052251483532',
  appId: '1:1052251483532:web:6b4e36acdcb96c95763aa9',
  measurementId: 'G-JYT2B95BXC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
