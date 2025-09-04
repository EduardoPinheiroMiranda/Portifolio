import { useState } from "react";
import { Container, Menu } from "./styles";
import { MenuOptions } from "./menuOptions";
import Image from "next/image";
import Logo from "../../../public/assets/images/Logo.png";

// components
import { HorizontalMenu } from "./HorizontalMenu";
import { VerticalMenu } from "./VerticalMenu";


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
			<Image src={Logo} alt="logo-eduardo" priority={true} width={123} height={30}/>

			<Menu>
				<HorizontalMenu data={menuOptions} markedOption={markedOption}/>
				<VerticalMenu data={menuOptions} markedOption={markedOption}/>
			</Menu>
			
		</Container>
	);
}