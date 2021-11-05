import { createApp, h } from "vue";
import App from "./App.vue";
import NotFoundComponent from "./NotFoundComponent.vue";
// import "./index.css";
import ch1 from "./components/ch1.vue";
import ch2 from "./components/ch2.vue";
import ch2bonus from "./components/ch2bonus.vue";
import slidingSquares from "./components/slidingSquares.vue";
import "tailwindcss/tailwind.css";

const routes = {
  "/": App,
  "/apply": App,
  "/ch1": ch1,
  "/ch2": ch2,
  "/ch2/bonus": ch2bonus,
  "/slsquare": slidingSquares
};

const names = {
  "/": "Main",
  "/apply": "Application",
  "/ch1": "Challenge 1",
  "/ch2": "Challenge 2",
  "/slsquare": "Sliding squares",
};

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname.split("/challenges")[1],
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || App;
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
