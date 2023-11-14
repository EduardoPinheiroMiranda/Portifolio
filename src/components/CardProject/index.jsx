import { Container, Tecnologi } from "./style"
import { BiSolidChevronDown } from "react-icons/bi"

export function CardProject({title, src, alt, desc, tecnologi, repo, site}){
    return(
        <Container>
            <div>
                <img src={src} alt={alt} />
                <span>{title}</span>
                <p>
                    {desc}
                </p>
            </div>
            
            <Tecnologi >
                <span>Principais Tecnologias</span>
                <div>
                    <div className="tecnologi">
                        {
                            tecnologi.map( (tec) => {
                                return(
                                    <div key={tec.id}>
                                        {tec.svg}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <BiSolidChevronDown/> 
                </div>
            </Tecnologi>

            <div className="controlls">
                
                <a href={site} target="_blank" rel="noopener noreferrer">
                    <button>
                        Visitar
                    </button>
                </a>
                
                <a href={repo} target="_blank" rel="noopener noreferrer">
                    <button>
                        Repositorio
                    </button>
                </a>
            </div>

        </Container>
    )
}