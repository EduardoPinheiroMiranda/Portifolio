import { Contaniner } from "./styled"

export function CardSkill({desc, title, skillsvg, ...rest}){

    return(
        <Contaniner>
            <div >
                <img src={skillsvg.src} alt={skillsvg.alt} />
            </div>
            <span>{title}</span>

            <p>{desc}</p>
        </Contaniner>
    )
}