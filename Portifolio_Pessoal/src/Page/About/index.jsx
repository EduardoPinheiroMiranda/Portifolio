import { Container, Description, SocialMedia, Tecnologi,} from "./style"

import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaReact, FaGitAlt, FaNodeJs} from "react-icons/fa"

export function About(){

    return(
        <Container id="about">
            
            <Description className="description">
                <h1>Hello world !</h1>
                <p>
                    Meu nome é Eduardo, desenvolvedor Full Stack que aprecia as 
                    tecnologias webs e costumo utilizar <span>JavaScript</span>, <span>HTML</span>, 
                    <span> CSS</span> e <span>React</span> para dar vida a minha imaginação.
                </p>
            </Description>

            <SocialMedia className="socialMedia">
                <a href="http://github.com/eduardopinheiromiranda" target="_blank" >
                    <BsGithub className="github"/>
                </a>
                
                <a href="https://www.linkedin.com/in/eduardo-pinheiro-miranda-a6ab4521b/" target="_blank">
                    <BsLinkedin className="linkedin"/>
                </a>
                
            </SocialMedia>

            <Tecnologi className="tecnologi">
                <FaGitAlt/>
                <FaNodeJs/>
                <FaReact/>
            </Tecnologi>

        </Container>
    )
}