import { createApp, h } from "vue";
import App from "./App.vue";
import NotFoundComponent from "./NotFoundComponent.vue";
import "tailwindcss/tailwind.css";
import "./index.css";

import ch1 from "./components/ch1.vue";
import ch2 from "./components/ch2.vue";

const routes = {
  "/": App,
  "/apply": App,
  "/ch1": ch1,
  "/ch2": ch2,
};

const names = {
  "/": "Main",
  "/apply": "Application",
  "/ch1": "Challenge 1",
  "/ch2": "Challenge 2",
};

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent;
    },
  },

  render() {
    return h(this.CurrentComponent);
  },
};

const app = createApp(SimpleRouter);

app.provide("routeName", names[window.location.pathname] || "");
app.provide("menuRoutes", names || []);
app.mount("#app");
