import { Container } from "./style"

export function Menu({ ...rest}){

    function close(){
        const menuList = document.querySelector(".menu")
        const menuIcon = document.querySelector("#menu")

        menuList.classList.add("hide")
        menuIcon.classList.remove("rotate")
    }

    return(
        <Container className="menu hide">
        
            <nav>
                <a onClick={close} href="#about">About</a>
                <a onClick={close} href="#skills">Skills</a>
                <a onClick={close} href="#projects">Projetos</a>
                <a onClick={close} href="#certifications">Formações</a>
                <a onClick={close} href="#contact">Contatos</a>
            </nav>
            
        </Container>
    )
}