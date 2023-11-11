import {  Container } from "./style"
import { BsArrowUp } from "react-icons/bs"

import { Header } from "../components/Header"
import { About } from "./About"
import { Skills } from "./Skills"
import { Projects } from "./Projects"

export function Home(){

    return(
        <Container>
            <Header className="header"/>
            <main>
                <About/>
                <Skills/>
                <Projects/>

                <div className=" toTop">
                    <BsArrowUp/>
                </div>
            </main>
            
        </Container>
    )
}