import { Container, Menu, Options } from "./styles";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { useState } from "react";

// svg
import MenuSvg from "../../../public/menu.svg";


export function Header(){

	const [options, setOptions] = useState([
		{ id: "home", name: "Home", marked: true },
		{ id: "servico", name: "Serviço", marked: false },
		{ id: "tecnologias", name: "Tecnologias", marked: false },
		{ id: "protifolioProfissional", name: "Portifólio profissional", marked: false },
		{ id: "portifolioPessoal", name: "Portifólio pessoal", marked: false },
		{ id: "sobre", name: "Sobre", marked: false },
		{ id: "contatos", name: "Contatos", marked: false },
	]);
	

	function markedOption(index: number){

		const editOptions = options.map((option, ind) => {
			if(ind === index){
				return {
					id: option.id,
					name: option.name,
					marked: !option.marked
				};
			}
			return {
				id: option.id,
				name: option.name,
				marked: option.marked === true && false
			};
		});
		
		setOptions(editOptions);
	}
	

	return(
		<Container>
			<Image src={Logo} alt="logo-eduardo" priority={true} />

			<Menu>
				{options.map((option, index) => {
					return (
						<Options
							key={option.id}
							marked={option.marked} 
							onClick={() => markedOption(index)} 
							href={"#"+option.id}
						>
							{option.name}
							<div/>
						</Options>
					);
				})}
				<Image src={MenuSvg} alt="menu-icon" width={50} height={50}/>
			</Menu>
		</Container>
	);
}