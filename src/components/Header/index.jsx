import { Container, SmallerMenu, Nav} from "./style"
import { BsList } from "react-icons/bs"


export function Header({...rest}){

    function showMenu(){
        const menuList = document.querySelector(".menu")
        const menuIcon = document.querySelector("#menu")

        menuList.classList.toggle("hide")
        menuIcon.classList.toggle("rotate")
    }

    return(
        <Container {...rest}>
            <div>
                <SmallerMenu>
                    <div>
                        <span>Eduardo</span>
                        <span>Pinheiro Miranda</span>
                    </div>
                    <BsList id="menu" onClick={showMenu}/>
                </SmallerMenu>
                
                <Nav className="nav">
                    <div>
                        <a onClick={close} href="#about">About</a>
                        <a onClick={close} href="#skills">Skills</a>
                        <a onClick={close} href="#projects">Projetos</a>
                        <a onClick={close} href="#certifications">Formações</a>
                        <a onClick={close} href="#contact">Contatos</a>
                    </div>
                    
                </Nav>
            </div>
        </Container>
    )
}