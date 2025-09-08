import Image from "next/image";
import { ContactSection, Container, Form, Information, Section, Titles } from "./styles";
import Linkdin from "../../../public/assets/svgs/linkedin.svg";
import Github from "../../../public/assets/svgs/github.svg";
import Whatsapp from "../../../public/assets/svgs/whatsapp.svg";
import { useState } from "react";


export function Contact(){

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	

	return(
		<Container id="contatos">
			<Section>
				<Titles>
					<h2>Contato</h2>
				</Titles>

				<ContactSection>
					<Information>
						<p>
							Se você tem um projeto em mente, deseja colaborar ou apenas quer 
							trocar uma ideia, fique à vontade para me chamar! Você pode preencher 
							o formulário abaixo ou, se preferir, me encontrar nas redes:
						</p>

						<div>
							<a href="https://www.linkedin.com/in/eduardo-pinheiro-miranda" target="_blank">
								<Image src={Linkdin} alt="linkedin-Eduardo-Pinheiro-Miranda"/>
							</a>
							<a href="https://github.com/EduardoPinheiroMiranda" target="_blank">
								<Image src={Github} alt="linkedin-Eduardo-Pinheiro-Miranda"/>
							</a>
							<a href="https://wa.me/5533984294511" target="_blank">
								<Image src={Whatsapp} alt="Whatsapp-Eduardo-Pinheiro-Miranda"/>
							</a>
						</div>

						<p>
							Estou sempre aberto a novas conexões e oportunidades.
						</p>
					</Information>

					<Form>
						<label htmlFor="input-name">Nome</label>
						<input
							id="input-name"
							placeholder="Informe seu nome"
							type="text"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<label htmlFor="input-phone">Telefone</label>
						<input
							id="input-phone"
							placeholder="Informe seu número de telefone"
							type="number"
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
						/>
						<label htmlFor="input-message">Mensagem</label>
						
						<textarea
							id="input-message"
							placeholder="Deixe sua mensagem aqui"
							onChange={(e) => setMessage(e.target.value)}
							value={message}
						/>
						
						<div>
							<button type="submit">
								<span>Enviar</span>
							</button>
						</div>
						
					</Form>
				</ContactSection>
			</Section>
		</Container>
	);
}