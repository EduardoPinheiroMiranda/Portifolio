import { Container, Navegation } from "./style"
import { TbChevronRight, TbSlash, TbChevronLeft} from "react-icons/tb"
export function Header(){

    return(
        <Container>
            <div>
                <h1>
                    <TbChevronLeft/>
                    Eduardo Pinheiro Miranda
                    <TbSlash/>
                    <TbChevronRight/> 
                   
                </h1>
            </div>
            <Navegation>
                <ul>Home</ul>
                <ul>Skill</ul>
                <ul>Projetos</ul>
                <ul>Contatos</ul>
            </Navegation>
        </Container>
    )
}