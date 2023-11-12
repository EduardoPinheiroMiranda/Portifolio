import { Container } from "./style"
import { BiSolidChevronLeft, BiSolidChevronRight} from "react-icons/bi"

import { CardSkill } from "../../components/CardSkill"
import { Skills as skills } from "./Skills"

export function Skills({...rest}){
    const maxWidth = (280*skills.length) - 280
    let localScroll = 0 //local inicial da rolagem de barra

    function next(){
        const showcase = document.querySelector(".showcase")
        
        if(localScroll >= 0 && localScroll < maxWidth){
            
            localScroll += 280 
            showcase.scroll(localScroll,0)
        }
    }

    function back(){
        const showcase = document.querySelector(".showcase")

        if(localScroll > 0){
            localScroll -= 280
            showcase.scroll(localScroll,0)
        }
        
    }

    return(
        <Container id="skills" className="showElement" {...rest}>
            <div>
                <span>Tecnologisas</span>

                <div className="card">
                    
                <BiSolidChevronLeft onClick={back}/>
                    <div className="showcase">
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
                    <BiSolidChevronRight onClick={next}/>
                </div>  
            </div>                 
            
        </Container>
    )
}