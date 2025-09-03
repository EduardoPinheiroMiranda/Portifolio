import { Container, Menu } from "./styles";
import Image from "next/image";
import Logo from "../../../public/Logo.png";

// components
import { HorizontalMenu } from "./HorizontalMenu";
import { VerticalMenu } from "./VerticalMenu";
import { useState } from "react";
import { MenuOptions } from "./menuOptions";


export function Header(){

	const [menuOptions, setMenuOptions] = useState(MenuOptions);


	function markedOption(index: number){

		const editOptions = menuOptions.map((option, position) => {
			if(position === index){
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
		
		setMenuOptions(editOptions);
	}

	
	return(
		<Container>
			<Image src={Logo} alt="logo-eduardo" priority={true} />

			<Menu>
				<HorizontalMenu data={menuOptions} markedOption={markedOption}/>
				<VerticalMenu data={menuOptions} markedOption={markedOption}/>
			</Menu>
			
		</Container>
	);
}