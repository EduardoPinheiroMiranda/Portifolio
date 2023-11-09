import { 
    Container, Page, Description, 
    SocialMedia, Tecnologi,

} from "./style"

import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaReact, FaGitAlt, FaNodeJs} from "react-icons/fa"

import { Header } from "../../components/Header"
import { SectionSkills } from "./SectionSkills"
import { SectionProject } from "./SectionProject/inde"

export function Home(){

    return(
        <Container>
            <div className="margin"></div>
            <Page>
                <Header className="header"/>
                <main>
                    <Description>
                        <h1>Hello world !</h1>
                        <p>
                            Meu nome é Eduardo, desenvolvedor Full Stack que aprecia as 
                            tecnologias webs e costumo utilizar <strong>JavaScript</strong>, <strong>HTML</strong>, 
                            <strong> CSS</strong> e <strong>React</strong> para dar vida a minha imaginação.
                        </p>
                    </Description>

                    <SocialMedia>
                        <a href="http://github.com/eduardopinheiromiranda" target="_blank" >
                            <BsGithub className="github"/>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/eduardo-pinheiro-miranda-a6ab4521b/" target="_blank">
                            <BsLinkedin className="linkedin"/>
                        </a>
                        
                    </SocialMedia>

                    <Tecnologi>
                        <FaGitAlt/>
                        <FaNodeJs/>
                        <FaReact/>
                    </Tecnologi>

                    
                    <SectionSkills/>

                    <SectionProject/>

                </main>
            </Page>
        </Container>
    )
}