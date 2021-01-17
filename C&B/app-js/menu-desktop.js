export const MenuDesktop =()=>{
    let $nav = document.querySelector("#nav")
    let $menuLinkHome = document.querySelector("#menu-link-home")
    let $menuLinkPrice = document.querySelector("#menu-link-price")
    let $menuLinkProduct = document.querySelector("#menu-link-product")
    let $body = document.querySelector("#body")
    document.addEventListener("scroll",(e)=>{
        if (window.pageYOffset >= 204) {
            $nav.classList.add("nav__fixed")
            $menuLinkHome.classList.add("menu__link__fixed")
            $menuLinkPrice.classList.add("menu__link__fixed")
            $menuLinkProduct.classList.add("menu__link__fixed")
        }else{
            $nav.classList.remove("nav__fixed")
            $menuLinkHome.classList.remove("menu__link__fixed")

        }
    })
}