import Image from "next/image";
import { data } from "../../../portfolioData";
import { Container, ListServices, Service, ServicesOffered, Titles } from "./styles";


export function Services(){
	return(
		<Container id="servico">
			<Titles>
				<span>Serviços</span>
				<h2>Serviços que ofereço</h2>
			</Titles>
			
			<ServicesOffered>
				{
					data.servicesOffered.map((services) => {
						return(
							<ListServices key={String(services)}>
								{
									services.map((service) => {
										return(
											<Service key={String(service)}>
												<Image src={service.icon} alt={service.alt}/>
												<span>{service.title}</span>
												<p>{service.description}</p>
											</Service>
										);
									})
								}
							</ListServices>
						);
					})
				}
			</ServicesOffered>
		</Container>
	);
}