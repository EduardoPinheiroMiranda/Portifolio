import { Container } from "./style"
import { BsChevronLeft, BsChevronRight} from "react-icons/bs"

import { CardProject } from "../../../components/CardProject"
import { Projects } from "./Projects"

export function SectionProject(){
    return(
        <Container>
            <span>Projetos</span>
            <div className="cards">

                <BsChevronLeft/>
                <div>
                    {
                        Projects.map((project) => {

                            return(
                                <CardProject
                                    key={project.id}
                                    src={project.img}
                                    alt={project.alt}
                                    title={project.name}
                                    desc={project.desc}
                                    tecnologi={project.tecns}
                                />
                            )
                    
                        })
                    }
                </div>
                <BsChevronRight/>
            </div>
        </Container>
    )
}