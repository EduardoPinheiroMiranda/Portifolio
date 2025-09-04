import { ButtonClose, Container, Menu, Navigation, Option } from "./styles";
import { useState } from "react";
import Image from "next/image";

// icons
import MenuIcon from "../../../../public/assets/svgs/menu.svg";
import Close from "../../../../public/assets/svgs/close.svg";


type VerticalMenu = {
	data: { id: string, name: string, marked: boolean }[],
	markedOption: (index: number) => void
}


export function VerticalMenu({data, markedOption}: VerticalMenu){

	const [openMenu, setOpenMenu] = useState(false);


	return(
		<Container id="verticalMenu">

			<button onClick={() => setOpenMenu(true)}>
				<Image src={MenuIcon} alt="manu-icon" height={40} width={40}/>
			</button>
			
			
			<Menu open={openMenu}>

				<ButtonClose>
					<button onClick={() => setOpenMenu(false)}>
						<Image src={Close} alt="close-menu" height={40} width={40}/>
					</button>
				</ButtonClose>

				
				<Navigation>
					<ul>
						{data.map((option, index) => {
							return(
								<Option
									key={option.id}
									marked={option.marked}
								>
									<a
										href={"#"+option.id}
										onClick={() => {
											setOpenMenu(false);
											markedOption(index);
										}}
									>
										{option.name}
									</a>
								</Option>
							);
						})}
					</ul>
				</Navigation>

			</Menu>
		</Container>
	);
}