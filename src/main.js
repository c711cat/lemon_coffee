import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import TabMenu from "primevue/tabmenu";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("TabMenu", TabMenu);
app.component("Dropdown", Dropdown);
app.component("Calendar", Calendar);
app.component("Checkbox", Checkbox);

app.mount("#app");
