import { Container, Description, Titles } from "./styles";
import Image from "next/image";
import PerfilPhoto from "../../../public/assets/images/perfil.png";


export function About(){
	return(
		<Container id="sobre">
			<Titles>
				<span>Sobre</span>
				<h2>Quem eu sou</h2>
			</Titles>

			<Description>
				<div>
					<p>
                        Olá! Meu nome é <span>Eduardo Pinheiro Miranda</span>, sou 
                        desenvolvedor Full Stack, com uma forte afinidade pelo back-end. 
                        Ao longo da minha jornada, também desenvolvi habilidades no front-end e 
                        uma boa noção de design, o que me permite atuar com versatilidade em 
                        diferentes etapas de um projeto.
					</p>
					<p>
                        Sou uma pessoa comunicativa, que acredita na força da colaboração e na 
                        troca de conhecimento. Gosto de trabalhar em equipe, resolver problemas e 
                        transformar ideias em soluções reais. Minha facilidade em lidar com pessoas 
                        contribui para ambientes de trabalho mais leves, produtivos e criativos.
					</p>
					<p>
                        Seja desenvolvendo APIs robustas, interfaces intuitivas ou propondo 
                        melhorias em um produto, estou sempre em busca de aprender mais e evoluir 
                        como profissional e como pessoa.
					</p>
				</div>

				<Image src={PerfilPhoto} alt="Eduardo-Pinheiro-Miranda" priority={true}/>
			</Description>
		</Container>
	);
}