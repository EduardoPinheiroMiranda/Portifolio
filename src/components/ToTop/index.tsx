import { Container } from "./styles";
import Image from "next/image";
import TopIcon from "../../../public/assets/svgs/top.svg";
import { useEffect, useState } from "react";


export function ToTop(){

	const [visible, setVisible] = useState(false);
	

	useEffect(() => {

		function handlerScrollVisible(){
			if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
				setVisible(true);
			}else(
				setVisible(false)
			);
		}
		handlerScrollVisible();

		window.addEventListener("scroll", handlerScrollVisible);

		return () => window.removeEventListener("scroll", handlerScrollVisible);
		
	},  []);


	function scrollToTop(){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	
	return(
		<Container visible={visible} onClick={scrollToTop}>
			<Image src={TopIcon} alt="top-icon"/>
		</Container>
	);
}