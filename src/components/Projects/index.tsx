import { Container, Slider, Section, Titles, Unavailable } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";


export function Projects(){

	const teste = [1,2,3,4,5,6];
	const [slidesPreView, setSlidesPreView] = useState(3);


	useEffect(()=> {

		function handlerResize(){
			if(window.innerWidth < 1024){
				setSlidesPreView(2);
			}

			if(window.innerWidth < 700){
				setSlidesPreView(1);
			}

			if(window.innerWidth > 1024){
				setSlidesPreView(3);
			}
		}

		handlerResize();

		window.addEventListener("resize", handlerResize);

		return () => {
			window.removeEventListener("resize", handlerResize);
		};

	}, []);


    
	return(
		<Container id="protifolio">
			<Section>
				<Titles>
					<span>Portifolio</span>
					<h2>Portifólio comercial</h2>
			    </Titles>

				<Slider>
					<Swiper
						className="swiper"
						slidesPerView={slidesPreView}
						modules={[Navigation, Pagination]}
						navigation
						pagination={{clickable: true}}
						loop={true}
					>
						{teste.map((_, index) => {
							return(
								<SwiperSlide key={index}>
									<Unavailable>
										<div>
											<span>Adicionado em breve</span>
										</div>
									</Unavailable>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</Slider>
			</Section>

			<Section>
				<Titles>
					<h2>Projetos pessoais</h2>
			    </Titles>

				<Slider>
					<Swiper
						className="swiper"
						slidesPerView={slidesPreView}
						modules={[Navigation, Pagination]}
						navigation
						pagination={{clickable: true}}
						loop={true}
					>
						{teste.map((_, index) => {
							return(
								<SwiperSlide key={index}>
									<Unavailable>
										<div>
											<span>Adicionado em breve</span>
										</div>
									</Unavailable>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</Slider>
			</Section>
			
		</Container>
	);
}