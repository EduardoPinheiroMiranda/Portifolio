import { Container } from "./style"
import { BsList } from "react-icons/bs"


export function Header({...rest}){

    return(
        <Container {...rest}>
            <div>
                <div>
                    <span>Eduardo</span>
                    <span>Pinheiro Miranda</span>
                </div>
                <BsList/>
            </div>
        </Container>
    )
}