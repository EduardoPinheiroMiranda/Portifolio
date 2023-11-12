import { Container, Card} from "./style"
import { Certificates as certificades } from "./Certificade"
import { BiSolidChevronLeft, BiSolidChevronRight} from "react-icons/bi"

export function Certificates(){

    return(
        <Container id="certifications" className="showElement">
            <span>Formações</span>
            <div>
                <BiSolidChevronLeft/>
                <Card>
                    {
                        certificades.map( (img) => {

                            return(
                                <div className="certificade" key={img.id}>
                                    <img  src={img.src} alt={img.alt}/>
                                </div>   
                            )
                        })
                    }
                </Card>
                <BiSolidChevronRight/>
            </div>
           
        </Container>
    )
    
}