import { createApp } from "vue";
import App from "./App.vue";
import { useDarkMode } from "./composables/useDarkMode";

const { initTheme } = useDarkMode();
initTheme();

createApp(App).mount("#app");
