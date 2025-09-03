import { Container, Options } from "./styles";


type HorizontalMenu = {
	data: { id: string, name: string, marked: boolean }[],
	markedOption: (index: number) => void
}


export function HorizontalMenu({data, markedOption}: HorizontalMenu){

	
	return(
		<Container id="horizontalMenu">
			{data.map((option, index) => {
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
		</Container>
	);
}