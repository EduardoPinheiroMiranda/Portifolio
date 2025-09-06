import Image from "next/image";
import { Container, ScrollView, Titles } from "./styles";
import { data } from "../../../portfolioData";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";


export function Skills(){

	const [slidesPreView, setSlidesPreView] = useState(7);


	useEffect(() => {

		function handlerResize(){

			if(window.innerWidth > 750){
				setSlidesPreView(7);
			}
			
			if(window.innerWidth < 750){
				setSlidesPreView(4);
			}
			
			if(window.innerWidth < 380){
				setSlidesPreView(3);
			}
		}
		handlerResize();

		window.addEventListener("resize", handlerResize);
		
	}, []);


	return(
		<Container id="tecnologias">
			<Titles>
				<span>Tecnologias</span>
				<h2>Principais ferramentas que utilizo</h2>
			</Titles>

			<ScrollView>
				{data.technologies.map((line, index) => {
					return(
						<Swiper
							key={`line-${index}`}
							className="swiper"
							slidesPerView={slidesPreView}
							spaceBetween={10}
							modules={[Autoplay]}
							speed={5000}
							autoplay={{
								delay: 0,
								disableOnInteraction: false,
								reverseDirection: index%2 === 0 ? true : false
							}}
							loop={true}
						>
							{line.map((icon) => {
								return(
									<SwiperSlide key={`swiper-icon-${icon.id}`} className="icon">
										<Image src={icon.icon} alt={icon.alt}/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					);
				})}
				
			</ScrollView>
		</Container>
	);
}