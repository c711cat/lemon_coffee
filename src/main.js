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
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import Toast from "primevue/toast";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import OrderList from "primevue/orderlist";
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import Menubar from "primevue/menubar";
import Sidebar from "primevue/sidebar";
import SelectButton from "primevue/selectbutton";
import Badge from "primevue/badge";
import BadgeDirective from "primevue/badgedirective";
import Galleria from "primevue/galleria";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Menu from "primevue/menu";
import ProgressSpinner from "primevue/progressspinner";
import Dialog from "primevue/dialog";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);

app.directive("badge", BadgeDirective);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("TabMenu", TabMenu);
app.component("Dropdown", Dropdown);
app.component("Calendar", Calendar);
app.component("Checkbox", Checkbox);
app.component("Toast", Toast);
app.component("ConfirmDialog", ConfirmDialog);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("OrderList", OrderList);
app.component("InputNumber", InputNumber);
app.component("Textarea", Textarea);
app.component("Menubar", Menubar);
app.component("Sidebar", Sidebar);
app.component("SelectButton", SelectButton);
app.component("Badge", Badge);
app.component("Galleria", Galleria);
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("Menu", Menu);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Dialog", Dialog);

app.mount("#app");
