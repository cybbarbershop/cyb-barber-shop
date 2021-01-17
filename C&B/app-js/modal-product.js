export const Modal =(productElement,ElmentClose,productElementLink)=>{
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