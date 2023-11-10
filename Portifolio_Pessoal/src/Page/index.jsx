import {  Container } from "./style"

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
            </main>
        </Container>
    )
}