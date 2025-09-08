import { Button, Contact, Container, Description, Icon, ImagePerfil, Informations } from "./styles";

// assets
import Github from "../../../public/assets/svgs/github.svg";
import Linkedin from "../../../public/assets/svgs/linkedin.svg";
import Perfil from "../../../public/assets/images/perfil.png";
import Whatsapp from "../../../public/assets/svgs/whatsapp.svg";

export function Main(){
	return(
		<Container id="home">
			<Informations>
				<Description>
					<h1>Desenvolvedor full stack.</h1>
					<p>
                        Olá, meu nome é Eduardo, sou um desenvolvedor full stack e tenho experiência
                        no desenvolvimento de aplicações front-end, back-end e mobile, 
                        além da criação de interfaces e designs para aplicações digitais, 
                        utilizando tecnologias como <span>React</span>,<span> Node.js</span>, 
					    <span> React Native</span>,<span> Figma</span> e <span>WordPress</span>.
					</p>
				</Description>

				<Contact>

					<a href="https://docs.google.com/document/d/1dDHVX-EirkyJ8thztBGV0YqyLX3h7UuhpjYtVG4Shbc/edit?usp=sharing" target="_blank">
						<Button>
							<span>Veja meu curriculo</span>
						</Button>
					</a>

					<div>
						<a href="https://www.linkedin.com/in/eduardo-pinheiro-miranda" target="_blank">
							<Icon src={Linkedin} alt="github" priority={true}/>
						</a>
						<a href="https://github.com/EduardoPinheiroMiranda" target="_blank">
							<Icon src={Github} alt="github" priority={true}/>
						</a>
						<a href="https://wa.me/5533984294511" target="_blank">
							<Icon src={Whatsapp} alt="Whatsapp-Eduardo-Pinheiro-Miranda"/>
						</a>
					</div>
					
				</Contact>
			</Informations>

			<ImagePerfil src={Perfil} alt="Eduardo-Pinheiro-Miranda" priority={true}/>
		</Container>
	);
}