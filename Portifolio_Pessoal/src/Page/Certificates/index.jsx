import { Container, Card} from "./style"
import { Certificates as certificates } from "./Certificade"
import { BiSolidChevronLeft, BiSolidChevronRight} from "react-icons/bi"

export function Certificates(){

    const maxWidth = (280*certificates.length) - 280
    let localScroll = 0 //local inicial da rolagem de barra

    function next(){
        const showcase = document.querySelector(".showcaseCertificade")
        
        if(localScroll >= 0 && localScroll < maxWidth){
            
            localScroll += 280 
            showcase.scroll(localScroll,0)
        }
    }

    function back(){
        const showcase = document.querySelector(".showcaseCertificade")

        if(localScroll > 0){
            localScroll -= 280
            showcase.scroll(localScroll,0)
        }
        
    }

    return(
        <Container id="certifications" className="showElement">
            <span>Formações</span>
            <div>
                <BiSolidChevronLeft onClick={back}/>
                <Card className="showcaseCertificade">
                    {
                        certificates.map( (img) => {

                            return(
                                <div className="certificade" key={img.id}>
                                    <img  src={img.src} alt={img.alt}/>
                                </div>   
                            )
                        })
                    }
                </Card>
                <BiSolidChevronRight onClick={next}/>
            </div>
           
        </Container>
    )
    
}