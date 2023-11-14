import { Contaniner } from "./styled"

export function CardSkill({desc, title, skillsvg, ...rest}){

    return(
        <Contaniner>
            <div >
                {skillsvg}
            </div>
            <span>{title}</span>

            <p>{desc}</p>
        </Contaniner>
    )
}