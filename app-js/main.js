import { DarkMode } from "./darkmode.js";
import { Hamburguer } from "./hamburguer.js";
import { MenuDesktop } from "./menu-desktop.js";
import { Modal } from "./modal-product.js";

document.addEventListener("DOMContentLoaded",(e)=>{
    Hamburguer()
    DarkMode()
    MenuDesktop()
    Modal("#menu-item-product","#modal-close","#menu-link-product")
})