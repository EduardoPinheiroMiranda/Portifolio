import { Services } from "@/components/services";
import styles from "../styles/home.module.css";

// components
import { Main } from "@/components/Main";


export default function Home() {
	return(
		<main className={styles.container}>
			<Main/>
			<Services/>
		</main>
	);
}
