import { initRouter } from "./modules/router.js?v=chart-1";
import { initView } from "./modules/ui.js?v=modular-1";
document.addEventListener("view:rendered", initView);
initRouter();
