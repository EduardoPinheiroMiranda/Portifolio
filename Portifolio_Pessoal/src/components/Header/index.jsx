import { Container} from "./style"
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
                <div>
                    <span>Eduardo</span>
                    <span>Pinheiro Miranda</span>
                </div>
                <BsList id="menu" onClick={showMenu}/>
            </div>
        </Container>
    )
}