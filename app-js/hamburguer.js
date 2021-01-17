export const Hamburguer =() =>{
    let $nav = document.querySelector("#nav")
    document.addEventListener("click",(e)=>{

        if (e.target.matches(".nav__hamburguer__button")|| e.target.matches(".nav__hamburguer__button__icon")) {
            $nav.classList.add("nav__enable")
        }

        if (e.target.matches(".menu__icon__x")) {
            $nav.classList.remove("nav__enable")
        }
    })
}