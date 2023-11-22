import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */

/* import specific icons */
import {
  faCloud,
  faNoteSticky,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGooglePlay,
  faGitAlt,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import SpookySipsPrivacy from "./views/SpookySipsPrivacy.vue";

import VueScrollTo from "vue-scrollto";

/* add icons to the library */
library.add(faDocker, faGooglePlay, faGitAlt, faCloud, faNoteSticky, faDisplay);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/spooky-sips/privacy", component: SpookySipsPrivacy },
  ],
});

createApp(App)
  .use(VueScrollTo, {
    duration: 0,
  })
  .use(router)
  .mount("#app");
