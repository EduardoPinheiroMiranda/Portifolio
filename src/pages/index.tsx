import styles from "../styles/home.module.css";
import { Header } from "@/components/Header";


export default function Home() {
	return(
		<main className={styles.container}>
			<Header/>
		</main>
	);
}
