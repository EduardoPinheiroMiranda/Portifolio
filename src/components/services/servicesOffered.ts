import CodeSquad from "../../../public/assets/svgs/code-square.svg";
import Mobile from "../../../public/assets/svgs/mobile.svg";
import Api from "../../../public/assets/svgs/api.svg";
import PenTool from "../../../public/assets/svgs/pen-tool.svg";
import Wordpress from "../../../public/assets/svgs/wordpress.svg";


export const servicesOffered = [
	// Para cada array adicione apenas 3 objetos para não quebrar
	// o estilo da página.
	[
		{
			icon: CodeSquad,
			alt: "icon-code-squade",
			title: "Desenvolvimento de sites com React",
			description: "Criação de interfaces modernas, rápidas e escaláveis usando as melhores práticas do ecossistema React."
		},
		{
			icon: Api,
			alt: "icon-api",
			title: "Criação de APIs REST",
			description: "Desenvolvimento de APIs seguras, organizadas e eficientes para conectar sistemas e aplicações com solidez e escalabilidade."
		},
		{
			icon: Mobile,
			alt: "icon-mobile",
			title: "Desenvolvimento de APPs com React Native",
			description: "Desenvolvimento de aplicativos Android com React Native, unindo performance nativa e design responsivo para oferecer experiências móveis de alta qualidade."
		},
        
	],
	[
		{
			icon: PenTool,
			alt: "icon-pen-tool",
			title: "Protótipos de sites e aplicações",
			description: "Transformo ideias em protótipos funcionais e visualmente alinhados, facilitando a validação de projetos antes do desenvolvimento."
		},
		{
			icon: Wordpress,
			alt: "icon-wordpress",
			title: "Crianção de sites com Wordpress",
			description: "Desenvolvimento de sites dinâmicos e personalizados com foco em performance, SEO e facilidade de gerenciamento."
		},
	]
];