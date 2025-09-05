import Image from "next/image";
import { Container, ListIcon, ScrollView, Titles } from "./styles";
import { technology } from "./technology";


export function Skills(){
	return(
		<Container id="tecnologias">
			<Titles>
				<span>Tecnologias</span>
				<h2>Principais ferramentas que utilizo</h2>
			</Titles>

			<ScrollView>
				{technology.map((elements) => {
					return(
						<ListIcon key={String(elements)}>
							{elements.map((icon) => {
								return(
									<div key={String(icon)}>
										<Image src={icon.icon} alt={icon.alt}/>
									</div>
								);
							})}
						</ListIcon>
					);
				})}
			</ScrollView>
		</Container>
	);
}