import { Container } from "./style"
import { BiSolidChevronLeft, BiSolidChevronRight} from "react-icons/bi"

import { CardProject } from "../../components/CardProject"
import { Projects as projects} from "./Projects"

export function Projects(){

    const maxWidth = (280*projects.length) - 280
    let localScroll = 0 //local inicial da rolagem de barra

    function next(){
        const showcase = document.querySelector(".showcaseProjects")
        
        if(localScroll >= 0 && localScroll < maxWidth){
            
            localScroll += 280 
            showcase.scroll(localScroll,0)
        }
    }

    function back(){
        const showcase = document.querySelector(".showcaseProjects")

        if(localScroll > 0){
            localScroll -= 280
            showcase.scroll(localScroll,0)
        }
        
    }

    return(
        <Container id="projects" className="showElement">
            <span>Projetos</span>
            <div className="cards">

                <BiSolidChevronLeft onClick={back}/>
                <div className="showcaseProjects">
                    {
                        projects.map((project) => {

                            return(
                                <CardProject
                                    key={project.id}
                                    src={project.img}
                                    alt={project.alt}
                                    title={project.name}
                                    desc={project.desc}
                                    tecnologi={project.tecns}
                                    site={project.site}
                                    repo={project.repo}
                                />
                            )
                    
                        })
                    }
                </div>
                <BiSolidChevronRight onClick={next}/>
            </div>
        </Container>
    )
}