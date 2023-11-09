import { Container, Tecnologi } from "./style"

export function CardProject({title, src, alt, desc, tecnologi, repo, site}){
    return(
        <Container>
            <img src={src} alt={alt} />
            <span>{title}</span>
            <p>
                {desc}
            </p>
            <Tecnologi >
                <span>Principais Tecnologias</span>
                <div>
                    <div className="tecnologi">
                        {tecnologi}
                    </div>
                </div>
            </Tecnologi>

            <div className="controlls">
                
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button>
                        Visitar
                    </button>
                </a>
                
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button>
                        Repositorio
                    </button>
                </a>
            </div>

        </Container>
    )
}