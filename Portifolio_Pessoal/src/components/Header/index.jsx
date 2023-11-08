import { Container, Navegation } from "./style"
import { FaChevronLeft, FaChevronRight} from "react-icons/fa"
import { RxSlash } from "react-icons/rx"
export function Header({...rest}){

    return(
        <Container {...rest}>
            <div>
                <FaChevronLeft/>
                <span>Eduardo Pinheiro Miranda</span>
                <RxSlash/>
                <FaChevronRight/> 
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