/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import firebase from "firebase";

Vue.config.productionTip = false;
Vue.use(NowUiKit);

var firebaseConfig = {
    apiKey: "AIzaSyDVIo8kKHwReaHnBAXnAHOmNbVObUQZYSI",
    authDomain: "bestboxusa-sso.firebaseapp.com",
    projectId: "bestboxusa-sso",
    storageBucket: "bestboxusa-sso.appspot.com",
    messagingSenderId: "427014584525",
    appId: "1:427014584525:web:c5a8d86e73627aeb88d184",
    measurementId: "G-23BH0K7YS2"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

let app = '';

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

