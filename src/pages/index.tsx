import { Services } from "@/components/services";
import styles from "../styles/home.module.css";

// components
import { Main } from "@/components/Main";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";


export default function Home() {
	return(
		<main className={styles.container}>
			<Main/>
			<Services/>
			<Skills/>
			<Projects/>
			<About/>
		</main>
	);
}
