import { Container, Page, Description, SocialMedia, Tecnologi, SectionSkill} from "./style"

import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaReact, FaGitAlt, FaNodeJs} from "react-icons/fa"

import { Header } from "../../components/Header"
import { CardSkill } from "../../components/CardSkill"
import { skills } from "./SkillTeconoligi"

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
                            tecnologias webs. Costumo utilizar <span>JavaScript</span>, <span>HTML</span>, 
                            <span>CSS</span>, <span>React</span> para dar vida a minha imaginação.
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

                    <SectionSkill>
                        <span>Tecnologisas</span>

                        <div>
                            {
                                skills.map((skill) => {
                                    return(
                                        <CardSkill
                                            key={skill.id}
                                            title={skill.name}
                                            desc={skill.desc}
                                            skillsvg={skill.svg}
                                        />
                                    )
                                })
                            }
                        </div>
                        
                        
                        
                          
                        
                    </SectionSkill>


                </main>
            </Page>
        </Container>
    )
}