import { Container } from "./style"
import { BsChevronLeft, BsChevronRight} from "react-icons/bs"

import { CardSkill } from "../../../components/CardSkill"
import { skills } from "./SkillTeconoligi"

export function SectionSkills({...rest}){

    return(
        <Container {...rest}>
            <span>Tecnologisas</span>

            <div className="card">
                <BsChevronLeft/>
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
                <BsChevronRight/>
            </div>                   
            
        </Container>
    )
}