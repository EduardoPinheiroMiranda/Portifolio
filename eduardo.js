const opem = document.querySelector(".perfil")
const destaques =  document.querySelectorAll(".destaques")
const main = document.querySelector(".main")

let on_off = false

opem.onclick = () => {

    if(on_off == false){
        for(let i=0;i<destaques.length; i++){
            destaques[i].classList.add("destaques_active")
        }
        main.classList.add("main_active") 
        on_off = true
    }else{
        for(let i=0;i<destaques.length; i++){
            destaques[i].classList.remove("destaques_active") 
        }
        main.classList.remove("main_active")
        on_off = false
    }




}


