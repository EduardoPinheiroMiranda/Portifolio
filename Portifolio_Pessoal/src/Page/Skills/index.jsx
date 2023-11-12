import { Container } from "./style"
import { BiSolidChevronLeft, BiSolidChevronRight} from "react-icons/bi"

import { CardSkill } from "../../components/CardSkill"
import { Skills as skills } from "./Skills"

export function Skills({...rest}){

    return(
        <Container id="skills" className="showElement" {...rest}>
            <div>
                <span>Tecnologisas</span>

                <div className="card">
                    
                <BiSolidChevronLeft/>
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
                    <BiSolidChevronRight/>
                </div>  
            </div>                 
            
        </Container>
    )
}