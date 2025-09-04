import styles from "../styles/home.module.css";

// components
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";


export default function Home() {
	return(
		<main className={styles.container}>
			<Header/>
			<Main/>
		</main>
	);
}
