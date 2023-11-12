import { Container } from "./style"
import { BiSolidChevronLeft, BiSolidChevronRight} from "react-icons/bi"

import { CardProject } from "../../components/CardProject"
import { Projects as projects} from "./Projects"

export function Projects(){
    return(
        <Container id="projects" className="showElement">
            <span>Projetos</span>
            <div className="cards">

                <BiSolidChevronLeft/>
                <div>
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
                <BiSolidChevronRight/>
            </div>
        </Container>
    )
}