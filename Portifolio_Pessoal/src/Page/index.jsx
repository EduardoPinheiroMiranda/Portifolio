import {  Container } from "./style"
import { BsArrowUp } from "react-icons/bs"

import { Header } from "../components/Header"
import { Menu } from "../components/Menu"
import { About } from "./About"
import { Skills } from "./Skills"
import { Projects } from "./Projects"
import { Certificates } from "./Certificates"
import { Footer } from "./Footer"



export function Home(){
    
    function showElements(){
        const intersectObserver = new IntersectionObserver( (entries) => {
            entries.forEach((item) =>{
                    item.target.classList.toggle("show", item.isIntersecting)
            })
            
        })
        
        
        
        const elements = document.querySelectorAll(".showElement")
        elements.forEach((item) => intersectObserver.observe(item))
        
    }


    return(
        <Container >
            <Header />
            <Menu/>
            <main onScroll={showElements}>
                <About/>
                <Skills/>
                <Projects/>
                <Certificates/>
                <Footer/>

                <div className=" toTop">
                    <a href="#about">
                        <BsArrowUp/>
                    </a>
                </div>
            </main>
            
        </Container>
    )
}