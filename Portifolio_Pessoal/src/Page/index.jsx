import {  Container } from "./style"
import { BsArrowUp } from "react-icons/bs"

import { Header } from "../components/Header"
import { About } from "./About"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import { Certificates } from "./Certificates"
import { Footer } from "./Footer"

export function Home(){

    return(
        <Container>
            <Header className="header"/>
            <main>
                <About/>
                <Skills/>
                <Projects/>
                <Certificates/>
                <Footer/>

                <div className=" toTop">
                    <BsArrowUp/>
                </div>
            </main>
            
        </Container>
    )
}