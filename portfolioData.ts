import JS from "./public/assets/svgs/js.svg";
import React from "./public/assets/svgs/react.svg";
import Android from "./public/assets/svgs/android.svg";
import Mysql from "./public/assets/svgs/mysql.svg";
import Postgresql from "./public/assets/svgs/postgresql.svg";
import Prisma from "./public/assets/svgs/prisma.svg";
import Docker from "./public/assets/svgs/docker.svg";
import Node from "./public/assets/svgs/node.svg";
import CSS from "./public/assets/svgs/css.svg";
import HTML from "./public/assets/svgs/html.svg";
import Wordpress_1 from "./public/assets/svgs/wordpress-2.svg";
import Figma from "./public/assets/svgs/figma.svg";
import Gimp from "./public/assets/svgs/gimp.svg";
import Linux from "./public/assets/svgs/linux.svg";
import StyledComponents from "./public/assets/svgs/styled-components.svg";
import Elememtor from "./public/assets/svgs/elementor.svg";
import Redis from "./public/assets/svgs/redis.svg";
import Next from "./public/assets/svgs/next-js.svg";
import CodeSquad from "./public/assets/svgs/code-square.svg";
import Mobile from "./public/assets/svgs/mobile.svg";
import Api from "./public/assets/svgs/api.svg";
import PenTool from "./public/assets/svgs/pen-tool.svg";
import Wordpress_2 from "./public/assets/svgs/wordpress.svg";


export const data = {
	MenuOptions: [
		{ id: "home", name: "Home", marked: true },
		{ id: "servico", name: "Serviço", marked: false },
		{ id: "tecnologias", name: "Tecnologias", marked: false },
		{ id: "protifolio", name: "Portifólio", marked: false },
		{ id: "sobre", name: "Sobre", marked: false },
		{ id: "contatos", name: "Contatos", marked: false },
	],
	technologies: [
	// line 1
		[
			{ id: "icon-1", alt: "icon-node", icon: Node},
			{ id: "icon-2", alt: "icon-react", icon: React},
			{ id: "icon-3", alt: "icon-android", icon: Android},
			{ id: "icon-4", alt: "icon-mysql", icon: Mysql},
			{ id: "icon-5", alt: "icon-postgresql", icon: Postgresql},
			{ id: "icon-6", alt: "icon-prisma", icon: Prisma},
			{ id: "icon-7", alt: "icon-docker", icon: Docker},
			{ id: "icon-8", alt: "icon-js", icon: JS},
			{ id: "icon-9", alt: "icon-css", icon: CSS},
		],
		// line 2
		[
			{ id: "icon-10", alt: "icon-html", icon: HTML},
			{ id: "icon-11", alt: "icon-wordpress", icon: Wordpress_2},
			{ id: "icon-12", alt: "icon-figma", icon: Figma},
			{ id: "icon-13", alt: "icon-gimp", icon: Gimp},
			{ id: "icon-14", alt: "icon-linux", icon: Linux},
			{ id: "icon-15", alt: "icon-linux", icon: StyledComponents},
			{ id: "icon-16", alt: "icon-linux", icon: Elememtor},
			{ id: "icon-17", alt: "icon-linux", icon: Redis},
			{ id: "icon-18", alt: "icon-linux", icon: Next},
		]
	],
	servicesOffered: [
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
				icon: Wordpress_1,
				alt: "icon-wordpress",
				title: "Crianção de sites com Wordpress",
				description: "Desenvolvimento de sites dinâmicos e personalizados com foco em performance, SEO e facilidade de gerenciamento."
			},
		]
	]
};