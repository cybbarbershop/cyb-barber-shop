let $body = document.querySelector("#body-price")
let $menu = document.querySelector("#menu")
let $menuLinkHome = document.querySelector("#menu-link-home")
let $menuLinkPrice = document.querySelector("#menu-link-price")
let $menuLinkProduct = document.querySelector("#menu-link-product")
let $cardPrice = document.querySelector("#card__price")
if (localStorage.getItem("dark-mode")===`true`) {
    $body.classList.add("body__black")
    $menu.classList.add("menu__black")
    $menuLinkHome.classList.add("menu__link__black")
    $menuLinkPrice.classList.add("menu__link__black")
    $menuLinkProduct.classList.add("menu__link__black")
    $cardPrice.classList.add("card__price__black")
} else {
    $body.classList.remove("body__black")
    $menu.classList.remove("menu__black")
    $menuLinkHome.classList.remove("menu__link__black")
    $menuLinkPrice.classList.remove("menu__link__black")
    $menuLinkProduct.classList.remove("menu__link__black")
    $cardPrice.classList.remove("card__price__black")
}
const ModalPrice =(productElement,ElmentClose,productElementLink)=>{
    let $modal = document.querySelector("#modal")

    document.addEventListener("click",(e)=>{

        if (e.target.matches(productElement)||e.target.matches(productElementLink)) {
            $modal.classList.add("modal__enable")
        } 
         if(e.target.matches(ElmentClose)){
             
             $modal.classList.remove("modal__enable")
         }   
    })
}

document.addEventListener("DOMContentLoaded",(e)=>{
    ModalPrice("#menu-item-product","#modal-close","#menu-link-product")
})