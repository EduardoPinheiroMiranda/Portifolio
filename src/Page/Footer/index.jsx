import { Container } from "./style";
import { BsGithub, BsLinkedin } from "react-icons/bs"

export function Footer(){
    return(
        <Container id="contact">
            <span>Contatos</span>
            <div>
                <div>
                    <a href="https://github.com/eduardopinheiromiranda" target="_blank" >
                        <BsGithub/><span>Github</span>
                    </a>

                    <a href="https://www.linkedin.com/in/eduardo-pinheiro-miranda-a6ab4521b/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin/><span>Linkedin</span>
                    </a>
                    
                </div>
                <div>
                    <p>Email: pinheiomiranda@gmail.com</p>
                    <p>Telefone: +55 (33) 984294511</p> 
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <p>Curriculo</p>
                    </a>
                </div>
            </div>
        </Container>
    )
}