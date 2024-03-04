import { getDataApi } from "./js/getData.js";
import { clearLocalStorageOnRefresh } from "./js/localTest.js";

getDataApi()


window.addEventListener("beforeunload", clearLocalStorageOnRefresh);
