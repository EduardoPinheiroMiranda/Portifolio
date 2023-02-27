const opem = document.querySelector(".perfil")
const destaques =  document.querySelectorAll(".destaques")
const main = document.querySelector(".main")

const exibirContent = document.querySelectorAll(".content")
const opemInfo = document.querySelector(".opemInfo")
const modalOpem = document.querySelector("dialog")
const modalClose = document.querySelector(".Close")

let on_off = false

opem.onclick = () => {

    if(on_off == false){
        for(let i=0;i<destaques.length; i++){
            destaques[i].classList.add("destaques_active")
            i>4 ? exibirContent[i-1].classList.add("exibir_content") : exibirContent[i].classList.add("exibir_content")
        }
        destaques[4].classList.add("perfil")
        main.classList.add("main_active") 
        on_off = true
    }else{
        for(let i=0;i<destaques.length; i++){
            destaques[i].classList.remove("destaques_active")
            i>4 ? exibirContent[i-1].classList.remove("exibir_content") : exibirContent[i].classList.remove("exibir_content")
        }
        destaques[4].classList.remove("perfil")
        main.classList.remove("main_active")
        on_off = false
    } 
}

opemInfo.onclick = () => {
    modalOpem.showModal()
}

modalClose.onclick = () => {
    modalOpem.close()
}